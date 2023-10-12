import User from "../../entities/user.entity";
import dbFiles from "../../../../database/dbFiles.db";
import Token from "../../../../traits/Token.trait";
import UserDTO from "../../dtos/user.dto";
declare class UserService extends dbFiles {
    private readonly passKey;
    private check;
    private passwordHash;
    token: Token;
    private userReposetory;
    constructor();
    use(user: User, ip: string): Promise<UserDTO>;
    createUser(user: User): Promise<User>;
    createCheck(user: User): Promise<boolean>;
    run(): Promise<void>;
}
export default UserService;
//# sourceMappingURL=createUser.service.d.ts.map