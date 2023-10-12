import Token from "../../../../traits/Token.trait";
import UserDTO from "../../dtos/user.dto";
declare class LoginUser {
    private readonly check;
    private readonly hash;
    token: Token;
    constructor();
    use(email: string, password: string, ip: string): Promise<UserDTO | null>;
}
export default LoginUser;
//# sourceMappingURL=loginUser.service.d.ts.map