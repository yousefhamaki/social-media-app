import { Request } from "express";
import User from "../../app/user/entities/user.entity";
interface ARequest extends Request {
    user?: User | undefined;
    file?: any;
    files?: any;
}
export default ARequest;
//# sourceMappingURL=Request.interface.d.ts.map