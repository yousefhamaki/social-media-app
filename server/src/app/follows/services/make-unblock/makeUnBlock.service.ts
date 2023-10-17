import ReturnDTO from "../../../../shared/dtos/returnJson.dto";
import FollowService from "../../../../shared/services/follows-actions/followsActions.service";

class MakeUnBlock {
  private readonly followService: FollowService;
  constructor() {
    this.followService = new FollowService();
  }

  async use(from: string, to: string) {
    try {
      const result = await this.followService.DeleteFollows(from, to);
      if (result.affected === 0) {
        return new ReturnDTO(200, `You didn't make block to this user`, result);
      }
      console.log(result);
      return new ReturnDTO(
        200,
        `Remove block to this user successfully`,
        result
      );
    } catch (err) {
      throw new Error(`Can't make block now, Please try again later.`);
    }
  }
}

export default MakeUnBlock;
