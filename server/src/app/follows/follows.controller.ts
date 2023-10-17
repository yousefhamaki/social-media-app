import { NextFunction, Response } from "express";
import MakeFollowService from "./services/make-follow/makeFollow.service";
import ARequest from "../../shared/interface/Request.interface";
import ReturnDTO from "../../shared/dtos/returnJson.dto";
import MakeUnFollowService from "./services/make-unfollow/makeUnFollow.service";
import MakeBlock from "./services/make-block/makeBlock.service";
import MakeUnBlock from "./services/make-unblock/makeUnBlock.service";
import GetBlocksService from "./services/get-blocks/getBlocks.service";

const makeFollow = new MakeFollowService();
const makeunFollow = new MakeUnFollowService();
const makeBlock = new MakeBlock();
const makeUnBlock = new MakeUnBlock();
const getBlocks = new GetBlocksService();

class FollowController {
  async createFollow(req: ARequest, res: Response, _next: NextFunction) {
    try {
      const result = await makeFollow.use(req.user.id, req.params.to as string);

      return res
        .status(result.status)
        .json(new ReturnDTO(result.status, result.message, result.data));
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async createUnFollow(req: ARequest, res: Response, _next: NextFunction) {
    try {
      const result = await makeunFollow.use(
        req.user.id,
        req.params.to as string
      );

      return res
        .status(result.status)
        .json(new ReturnDTO(result.status, result.message, result.data));
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async createBlock(req: ARequest, res: Response, _next: NextFunction) {
    try {
      const result = await makeBlock.use(req.user.id, req.params.to as string);

      return res.status(result.status).json(result);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async removeBlock(req: ARequest, res: Response, _next: NextFunction) {
    try {
      const result = await makeUnBlock.use(
        req.user.id,
        req.params.to as string
      );

      return res.status(result.status).json(result);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async getBlocks(req: ARequest, res: Response, _next: NextFunction) {
    try {
      const result = await getBlocks.use(req.user.id);

      return res.status(result.status).json(result);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}

export default FollowController;
