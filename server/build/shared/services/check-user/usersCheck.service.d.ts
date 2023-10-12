import dbFiles from "../../../database/dbFiles.db";
import User from "../../../app/user/entities/user.entity";
import Token from "../../enitities/token.entity";
import TokenDTO from "../../dtos/token.dto";
declare class userCheck extends dbFiles {
    private userReposetory;
    private tokenReposetory;
    constructor();
    check(user: User): Promise<boolean>;
    findByEmail(email: string): Promise<User | null>;
    findByUserName(username: string): Promise<User | null>;
    addToken(data: TokenDTO): Promise<User | null>;
    checkToken(token: string, ip: string): Promise<Token | null>;
    run(): Promise<void>;
}
export default userCheck;
//# sourceMappingURL=usersCheck.service.d.ts.map