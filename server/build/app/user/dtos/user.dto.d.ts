import User from "../entities/user.entity";
declare class UserDTO {
    id: string;
    username: string;
    email: string;
    role: string;
    token: string | null;
    constructor(user: User, token?: string);
}
export default UserDTO;
//# sourceMappingURL=user.dto.d.ts.map