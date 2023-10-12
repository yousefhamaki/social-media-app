import { Request, Response, NextFunction } from "express";
import UserService from "./services/create-user/createUser.service";
import ReturnDTO from "../../shared/dtos/returnJson.dto";
import LoginUser from "./services/login-user/loginUser.service";
import ChangePassword from "./services/change-password/changePassword.service";
import ARequest from "../../shared/interface/Request.interface";
import UpdateUserService from "./services/update-user/updateUser.service";
import UserDTO from "./dtos/user.dto";

const createUserService: UserService = new UserService();
const loginUserService: LoginUser = new LoginUser();
const changePasswordService: ChangePassword = new ChangePassword();
const updateUserService: UpdateUserService = new UpdateUserService();

class UserController {
  constructor() {
    try {
    } catch (error) {
      console.error("Error initializing UserService or LoginUser:", error);
    }
  }
  // private readonly userService: UserService = new UserService();
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<ReturnDTO>> {
    try {
      const result = await createUserService.use(req.body, req.ip);

      const returnDto = new ReturnDTO(
        200,
        "Created new user successfully",
        result
      );

      return res.json(returnDto);
    } catch (err) {
      next(err);
    }
  }

  async AuthUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<ReturnDTO>> {
    try {
      // this function doing authentication services and add token into db
      const result = await loginUserService.use(
        req.body.email,
        req.body.password,
        req.ip
      );

      if (result === null) {
        return res
          .status(401)
          .json(
            new ReturnDTO(401, "E-mail or password is not correct", result)
          );
      } else {
      }

      return res.json(
        new ReturnDTO(200, "Make auth for user successfully", result)
      );
    } catch (err) {
      next(err);
    }
  }

  async changePassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<ReturnDTO>> {
    try {
      const result = await changePasswordService.use(
        req.body.email as string,
        req.body.oldpassword as string,
        req.body.newpassword as string
      );

      if (result === false) {
        return res
          .status(401)
          .json(new ReturnDTO(401, "Your old password isnot correct.", null));
      } else {
        return res.json(
          new ReturnDTO(200, "Your password changed successfully", null)
        );
      }
    } catch (err) {
      next(err);
    }
  }

  async updateUser(
    req: ARequest,
    res: Response,
    next: NextFunction
  ): Promise<Response<ReturnDTO>> {
    try {
      req.body.id = req.user.id;
      const result = await updateUserService.use(req.body);

      const userDto = await new UserDTO(result);

      const returnDto = new ReturnDTO(
        200,
        "Updated user info successfully",
        userDto
      );

      return res.json(returnDto);
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
