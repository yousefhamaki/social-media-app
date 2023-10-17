import User from "../entities/user.entity";
import UserDTO from "./user.dto";

class UserInfoDTO extends UserDTO {
  followers: number;
  following: number;
  constructor(user: User, followers: number, following: number) {
    super(user);
    this.followers = followers;
    this.following = following;
  }
}

export default UserInfoDTO;
