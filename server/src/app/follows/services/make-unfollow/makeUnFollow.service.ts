import FollowService from "../../../../shared/services/follows-actions/followsActions.service";
import userCheck from "../../../../shared/services/check-user/usersCheck.service";
import isUUID from "../../../../traits/isUUid.trait";
import FollowsDTO from "../../dto/follows.dto";

class MakeUnFollowService {
  private followsDB: FollowService;
  private user: userCheck;
  private isUuid = isUUID;
  constructor() {
    this.followsDB = new FollowService();
    this.user = new userCheck();
  }

  async use(from: string, to: string) {
    try {
      const handle = await this.handleFollow(from, to);
      if (handle !== false) {
        return handle;
      }

      const result = await this.followsDB.deleteFollow(from, to);

      console.log(result);
      return {
        status: 200,
        message: `Make un Follow Successfully`,
        data: new FollowsDTO(result),
      };
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async handleFollow(from: string, to: string) {
    if (from === to) {
      return {
        status: 412,
        message: `You can't make unfollow for your self`,
        data: [],
      };
    }
    if (!this.isUuid(to)) {
      return {
        status: 412,
        message: `Please write a valied uuid.`,
        data: [],
      };
    }
    const check = await this.user.findById(to);
    if (check === null) {
      return {
        status: 412,
        message: `User you want to make unfollow doesn't exist, please try again later.`,
        data: [],
      };
    }

    const getBlock = await this.followsDB.getFollowStatus(from, to);
    for (const el of getBlock) {
      if (el.status === "block") {
        return {
          status: 405,
          message: `User Can't make follow to this user.`,
          data: [],
        };
      }
    }

    return false;
  }
}

export default MakeUnFollowService;
