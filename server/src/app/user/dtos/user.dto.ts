import User from "../entities/user.entity";

class UserDTO {
  id: string;
  username: string;
  email: string;
  role: string;
  token: string | null;

  constructor(user: User, token: string = null) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.role = user.role;
    if (token === null) {
      delete this.token;
    } else {
      this.token = token;
    }
  }
}

export default UserDTO;
