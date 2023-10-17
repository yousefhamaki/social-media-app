import ReturnDTO from "../../../../shared/dtos/returnJson.dto";
import FollowService from "../../../../shared/services/follows-actions/followsActions.service";
import FollowsDTO from "../../dto/follows.dto";
import FollowsEntity from "../../entities/follows.entity";

class GetBlocksService {
  private readonly followDB: FollowService;
  constructor() {
    this.followDB = new FollowService();
  }

  async use(user_id: string) {
    try {
      const blocks = await this.followDB.getBlocks(user_id);
      const result = await this.fetchBlocks(blocks);

      return new ReturnDTO(200, `Getting Blocks users successfully`, result);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async fetchBlocks(data: FollowsEntity[]): Promise<FollowsDTO[]> {
    try {
      const result = [];
      for (const el of data) {
        result[result.length] = new FollowsDTO(el);
      }
      return result;
    } catch (err) {
      throw new Error(`Can't fetch data`);
    }
  }
}

export default GetBlocksService;
