import { Router } from "express";
import multer from "multer";
import PostsController from "./posts.controller";
import AuthorizationMiddleware from "../../middleware/Authorization.middleware";
import PostsRequest from "./requests/posts.request";
import ParamsCheck from "../../middleware/paramsCheck.middleware";

const postsRouter = Router();
const postsController = new PostsController();
const authorization = new AuthorizationMiddleware();
const upload = multer({ storage: multer.memoryStorage() });
const paramsCheck = new ParamsCheck();
const request = new PostsRequest();

postsRouter.get("/posts", authorization.ValidToken, postsController.getPosts);

postsRouter.get(
  "/posts/:user_id",
  authorization.ValidToken,
  postsController.getUserPosts
);

postsRouter.post(
  "/posts/create",
  authorization.ValidToken,
  upload.array("files"),
  paramsCheck.use(request.create),
  postsController.create
);

export default postsRouter;
