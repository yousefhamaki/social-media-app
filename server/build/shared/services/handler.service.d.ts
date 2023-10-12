import { NextFunction, Request, Response } from "express";
import JsonReurn from "../../interface/JsonReturn.interface";
declare class Handler {
    ErrorResponse(_req: Request, res: Response): void;
    Homeresponse(_: Request, res: Response): Promise<Response<JsonReurn>>;
    HandleError(err: Error, req: Request, res: Response, next: NextFunction): void;
}
export default Handler;
//# sourceMappingURL=handler.service.d.ts.map