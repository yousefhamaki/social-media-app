import Token from "../../../../traits/Token.trait";
import HashPassword from "../../../../traits/hashPassword.trait";
import UserDTO from "../../dtos/user.dto";
import userCheck from "../../../../shared/services/check-user/usersCheck.service";
import TokenDTO from "../../../../shared/dtos/token.dto";

class LoginUser {
  private readonly check: userCheck;
  private readonly hash: HashPassword;
  public token: Token;
  constructor() {
    this.check = new userCheck();
    this.hash = new HashPassword();
    this.token = new Token();
  }
  async use(
    email: string,
    password: string,
    ip: string
  ): Promise<UserDTO | null> {
    try {
      const user = await this.check.findByEmail(email);
      if (user === null) {
        return null;
      }
      const token = await this.token.generate({ ...(await new UserDTO(user)) });

      if (token === undefined) {
        throw new Error(
          `Can't make login in this time, Please try again later.`
        );
      }

      if (
        user !== null &&
        (await this.hash.chech(password, user.password)) &&
        token !== undefined
      ) {
        const userDto = new UserDTO(user, token);
        const tokenDto = await new TokenDTO(userDto, ip);

        await this.check.addToken(tokenDto);
        return userDto;
      }

      return null;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}

export default LoginUser;
