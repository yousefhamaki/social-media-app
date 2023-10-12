import UserDTO from "../../app/user/dtos/user.dto";
declare class TokenDTO {
    user_id: string;
    token: string;
    user_ip: string;
    permissions: object | string;
    constructor(data: UserDTO, user_ip: string, permissions?: object);
}
export default TokenDTO;
//# sourceMappingURL=token.dto.d.ts.map