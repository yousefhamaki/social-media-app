import { getRepository } from "typeorm";
import User from "../../entities/user.entity";
import dbFiles from "../../../../database/dbFiles.db";
import generatePasskey from "../../../../traits/passKey.trait";
import userCheck from "../../../../shared/services/check-user/usersCheck.service";
import HashPassword from "../../../../traits/hashPassword.trait";
import Token from "../../../../traits/Token.trait";
import UserDTO from "../../dtos/user.dto";
import TokenDTO from "../../../../shared/dtos/token.dto";

class UserService extends dbFiles {
  private readonly passKey = generatePasskey;
  private check: userCheck;
  private passwordHash: HashPassword;
  public token: Token;
  // private connection;
  private userReposetory;

  constructor() {
    super();
    this.run();
    this.check = new userCheck();
    this.passwordHash = new HashPassword();
    this.token = new Token();
  }

  /**
   * @author y.hamaki
   * @type handler function
   * @param user @type { User } the queries who comes from request
   * @returns {Promise<UserDTO>} this function returns UserDTO to send to user info and user token
   */

  // this is main function to create new user
  async use(user: User, ip: string): Promise<UserDTO> {
    try {
      // make check for new user info if exist or not
      await this.createCheck(user);
      // create new user in db
      const userInfo = await this.createUser(user);
      const token = await this.token.generate({
        ...(await new UserDTO(userInfo)),
      });

      const userDto = new UserDTO(userInfo, token);

      const tokenDto = await new TokenDTO(userDto, ip);

      await this.check.addToken(tokenDto);

      return userDto;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  /**
   * @author y.hamaki
   * @type handler function
   * @param user @type { User } the queries who comes from request
   * @returns {Promise<User>} this function returns user info after added to database
   */

  async createUser(user: User): Promise<User> {
    try {
      // generate pass key for hasing message end-to-end
      const passKey = this.passKey(15);
      user.passkey = passKey;
      //make hashing for password
      user.password = await this.passwordHash.hashPassword(user.password);
      //return data after create new user
      return await this.userReposetory.save(user);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  /**
   * @author y.hamaki
   * @type handler function
   * @param user @type { User } the queries who comes from request
   * @returns {Promise<boolean>} this function returns boolean value if user have a valied email and username
   */

  async createCheck(user: User): Promise<boolean> {
    const checkEmail = await this.check.findByEmail(user.email);
    const checkUsername = await this.check.findByUserName(user.username);

    if (checkEmail !== null) {
      throw new Error("Email is already exist. Please use another Email.");
    }

    if (checkUsername !== null) {
      throw new Error(
        "Username is already exist. Please use another Username."
      );
    }

    return true;
  }

  // this function must run in constructor to handle class values
  async run() {
    this.initializeDatabase();
    // this.connection = await createConnection(ormconfig);
    this.userReposetory = await getRepository(User);
  }
}

export default UserService;
