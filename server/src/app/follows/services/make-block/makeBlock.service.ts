import ReturnDTO from "../../../../shared/dtos/returnJson.dto";
import userCheck from "../../../../shared/services/check-user/usersCheck.service";
import FollowService from "../../../../shared/services/follows-actions/followsActions.service";
import isUUID from "../../../../traits/isUUid.trait";

class MakeBlock {
  private readonly followService: FollowService;
  private user: userCheck;
  private isUuid = isUUID;
  constructor() {
    this.followService = new FollowService();
    this.user = new userCheck();
  }

  async use(from: string, to: string) {
    try {
      const handle = await this.handleBlock(from, to);
      if (handle !== false) {
        return handle;
      }
      const remove = await this.followService.DeleteFollows(from, to);
      console.log(remove);
      const result = await this.followService.createFollow({
        from,
        to,
        status: "block",
      });

      return new ReturnDTO(200, `Make block to this user successfully`, result);
    } catch (err) {
      throw new Error(`Can't make block now, Please try again later.`);
    }
  }
  async handleBlock(from: string, to: string) {
    if (from === to) {
      return {
        status: 412,
        message: `You can't make block for your self`,
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
        message: `User you want to make block doesn't exist, please try again later.`,
        data: [],
      };
    }

    const checkexist = await this.followService.getFollow(from, to);
    if (checkexist !== null && checkexist.status === "block") {
      return {
        status: 412,
        message: `You already Block this user.`,
        data: [],
      };
    }

    return false;
  }
}

export default MakeBlock;
