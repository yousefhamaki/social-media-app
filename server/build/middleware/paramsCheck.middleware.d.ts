import { Request, Response, NextFunction } from "express";
import { ErrorMessages } from "validatorjs";
declare class ParamsCheck {
    private readonly checkQuery;
    use(required: {
        [key: string]: string;
    }): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
    validation(body: {
        [key: string]: string | qs.ParsedQs | string[] | qs.ParsedQs[];
    }, rules: {
        [key: string]: string;
    }, customMessages: ErrorMessages, next: NextFunction): Promise<any>;
}
export declare const CheckQuery: (required: {
    [key: string]: string;
}) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export default ParamsCheck;
//# sourceMappingURL=paramsCheck.middleware.d.ts.map