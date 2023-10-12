import { Response, NextFunction } from "express";
import ARequest from "../shared/interface/Request.interface";
declare class AuthorizationMiddleware {
    ValidToken(req: ARequest, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}
export default AuthorizationMiddleware;
//# sourceMappingURL=Authorization.middleware.d.ts.map