import { Router } from "express";
import UserController from "./user.controller";
import ParamsCheck from "../../middleware/paramsCheck.middleware";
import userRequest from "./requests/user.request";
import AuthorizationMiddleware from "../../middleware/Authorization.middleware";

const userRoutes = Router();
const userController = new UserController();
const queryCheck = new ParamsCheck();
const request = new userRequest();
const authorization = new AuthorizationMiddleware();

userRoutes.post(
  "/user/create",
  queryCheck.use(request.add),
  userController.createUser
);

userRoutes.post(
  "/user/login",
  queryCheck.use(request.login),
  userController.AuthUser
);

userRoutes.post(
  "/user/change/password",
  authorization.ValidToken,
  queryCheck.use(request.changePass),
  userController.changePassword
);

userRoutes.post(
  "/user/update",
  authorization.ValidToken,
  queryCheck.use(request.add),
  userController.updateUser
);

userRoutes.get(
  "/user/:user_id",
  authorization.ValidToken,
  userController.getUserInfo
);

export default userRoutes;
