import UserDTO from "../../app/user/dtos/user.dto";

class TokenDTO {
  user_id: string;
  token: string;
  user_ip: string;
  permissions: object | string;

  constructor(data: UserDTO, user_ip: string, permissions: object = {}) {
    this.user_id = data.id;
    this.token = data.token;
    this.user_ip = user_ip;
    this.permissions = JSON.stringify(permissions);
  }
}

export default TokenDTO;
