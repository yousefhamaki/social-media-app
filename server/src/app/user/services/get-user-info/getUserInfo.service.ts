import ReturnDTO from "../../../../shared/dtos/returnJson.dto";
import userCheck from "../../../../shared/services/check-user/usersCheck.service";
import FollowService from "../../../../shared/services/follows-actions/followsActions.service";
import isUUID from "../../../../traits/isUUid.trait";
import FollowsEntity from "../../../follows/entities/follows.entity";
import UserInfoDTO from "../../dtos/userInfo.dto";
import User from "../../entities/user.entity";

class GetUserInfoService {
  private readonly isUuid = isUUID;
  private readonly userInfo: userCheck;
  private readonly followsInfo: FollowService;
  constructor() {
    this.userInfo = new userCheck();
    this.followsInfo = new FollowService();
  }

  async use(user_id: string, to: string): Promise<ReturnDTO> {
    try {
      if (!this.isUuid(user_id)) {
        return new ReturnDTO(412, `Please Enter a valied user id`, []);
      }
      const followStatus = await this.getfollowStatus(user_id, to);
      if (followStatus === "block") {
        return new ReturnDTO(
          405,
          `You haven't permission to visit this page`,
          []
        );
      }
      const userInfo = await this.getuserInfo(user_id);
      const followers = await this.getfollowersInfo(user_id);
      const following = await this.getfollowingInfo(user_id);

      console.log(followStatus);
      const result = new UserInfoDTO(userInfo, followers, following);

      return new ReturnDTO(200, `Getting user Info Successfully`, result);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async getuserInfo(id: string): Promise<User> {
    try {
      return await this.userInfo.findById(id);
    } catch (err) {
      throw new Error(`Can't get user Info`);
    }
  }

  async getfollowingInfo(id: string): Promise<number> {
    try {
      return await this.followsInfo.getFollowing(id);
    } catch (err) {
      throw new Error(`Can't get user Info`);
    }
  }

  async getfollowStatus(
    from: string,
    to: string
  ): Promise<"block" | FollowsEntity[]> {
    try {
      const status = await this.followsInfo.getFollowStatus(from, to);
      for (const el of status) {
        if (el.status === "block") {
          return "block";
        }
      }

      return status;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async getfollowersInfo(id: string): Promise<number> {
    try {
      return await this.followsInfo.getFollowers(id);
    } catch (err) {
      throw new Error(`Can't get user Info`);
    }
  }
}

export default GetUserInfoService;
