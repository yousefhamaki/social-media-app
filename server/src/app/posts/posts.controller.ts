import { NextFunction, Request, Response } from "express";
import CreatePost from "./services/create-post/createPost.service";
import GetUserPostsService from "./services/get-user-posts/getUserPosts.service";
import ReturnDTO from "../../shared/dtos/returnJson.dto";
import ARequest from "../../shared/interface/Request.interface";
import FileInterface from "../../shared/interface/File.interface";
import GetPostsService from "./services/get-posts/getPosts.service";

const createService = new CreatePost();
const getUserPosts = new GetUserPostsService();
const getPosts = new GetPostsService();

class PostsController {
  async create(req: ARequest, res: Response, _next: NextFunction) {
    try {
      const result = await createService.use(
        req.body.title,
        req.body.content,
        (await req.files) as FileInterface[],
        req.user.id
      );

      const returnV = new ReturnDTO(
        200,
        "Creating new Post successfully",
        result
      );

      return res.json(returnV);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async getUserPosts(req: Request, res: Response, _next: NextFunction) {
    try {
      const page = req.query.page ? Number(req.query.page) - 1 : 0;
      const result = await getUserPosts.use(req.params.user_id, page);

      const returnV = new ReturnDTO(
        200,
        "Getting Posts of user successfully",
        result
      );

      return res.json(returnV);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async getPosts(req: Request, res: Response, _next: NextFunction) {
    try {
      let page =
        req.query.page && Number(req.query.page) > 0
          ? Number(req.query.page) - 1
          : 0;
      const result = await getPosts.use(page);

      const returnV = new ReturnDTO(200, "Getting Posts successfully", result);

      return res.json(returnV);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}

export default PostsController;
