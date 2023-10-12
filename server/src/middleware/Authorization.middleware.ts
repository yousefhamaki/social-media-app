import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../app/user/entities/user.entity";
import Config from "../shared/services/config.service";
import ARequest from "../shared/interface/Request.interface";
import ReturnDTO from "../shared/dtos/returnJson.dto";
import Token from "../traits/Token.trait";
import userCheck from "../shared/services/check-user/usersCheck.service";

const tokenService = new Token();
const checkUserService = new userCheck();

class AuthorizationMiddleware {
  async ValidToken(req: ARequest, res: Response, next: NextFunction) {
    try {
      const auth = req.headers.authorization as string;

      if (auth !== undefined) {
        const authData = auth.split(" ");
        const authType = authData[0].toLowerCase();
        const token = authData[1];

        // checking if have token and type is bearer
        if (token && authType === "bearer") {
          const check: JwtPayload = (await tokenService.verifyJWT(
            token
          )) as unknown as User;

          //checking if token is valied and got user info
          if (check && check.email) {
            //search if token have a created and added to db
            const result = {
              ...(await checkUserService.checkToken(token, req.ip)),
            };

            // checking if token is in db
            if (
              result &&
              result.user_id &&
              result.user_id === (check.id as string)
            ) {
              // save user info in req.user and pass to next middleware
              req.user = check as User;
              return next();
            }
          }
        }
      }
      // return error authentication if any check failed from all last checks
      return res
        .status(401)
        .json(new ReturnDTO(401, "Error Auth: please try again.", null));
    } catch (err) {
      return res
        .status(401)
        .json(new ReturnDTO(401, "Error Auth: please try again.", null));
    }
  }
}

export default AuthorizationMiddleware;
