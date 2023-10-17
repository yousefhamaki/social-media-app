import { Router } from "express";
import FollowController from "./follows.controller";
import AuthorizationMiddleware from "../../middleware/Authorization.middleware";

const followsRouter = Router();
const followController = new FollowController();
const authorization = new AuthorizationMiddleware();

followsRouter.get(
  "/follow/create/:to",
  authorization.ValidToken,
  followController.createFollow
);

followsRouter.delete(
  "/follow/remove/:to",
  authorization.ValidToken,
  followController.createUnFollow
);

followsRouter.patch(
  "/follow/block/:to",
  authorization.ValidToken,
  followController.createBlock
);

followsRouter.delete(
  "/follow/unblock/:to",
  authorization.ValidToken,
  followController.removeBlock
);

followsRouter.get(
  "/follow/getblocks",
  authorization.ValidToken,
  followController.getBlocks
);

export default followsRouter;
