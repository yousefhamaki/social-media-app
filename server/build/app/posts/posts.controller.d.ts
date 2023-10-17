import { NextFunction, Request, Response } from "express";
import ARequest from "../../shared/interface/Request.interface";
declare class PostsController {
    create(req: ARequest, res: Response, _next: NextFunction): Promise<Response<any, Record<string, any>>>;
    getUserPosts(req: Request, res: Response, _next: NextFunction): Promise<Response<any, Record<string, any>>>;
    getPosts(req: Request, res: Response, _next: NextFunction): Promise<Response<any, Record<string, any>>>;
}
export default PostsController;
//# sourceMappingURL=posts.controller.d.ts.map