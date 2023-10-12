import { Request, Response, NextFunction } from "express";
import ReturnDTO from "../../shared/dtos/returnJson.dto";
import ARequest from "../../shared/interface/Request.interface";
declare class UserController {
    constructor();
    createUser(req: Request, res: Response, next: NextFunction): Promise<Response<ReturnDTO>>;
    AuthUser(req: Request, res: Response, next: NextFunction): Promise<Response<ReturnDTO>>;
    changePassword(req: Request, res: Response, next: NextFunction): Promise<Response<ReturnDTO>>;
    updateUser(req: ARequest, res: Response, next: NextFunction): Promise<Response<ReturnDTO>>;
}
export default UserController;
//# sourceMappingURL=user.controller.d.ts.map