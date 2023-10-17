import { getRepository } from "typeorm";
import dbFiles from "../../../database/dbFiles.db";
import User from "../../../app/user/entities/user.entity";
import Token from "../../enitities/token.entity";
import TokenDTO from "../../dtos/token.dto";

class userCheck extends dbFiles {
  private userReposetory: any;
  private tokenReposetory: any;
  constructor() {
    super();
    this.run();
  }

  async check(user: User): Promise<boolean> {
    const checkEmail = await this.findByEmail(user.email);
    const checkUsername = await this.findByUserName(user.username);

    if (checkEmail === null && checkUsername === null) {
      return true;
    } else {
      return false;
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userReposetory
      .createQueryBuilder("users")
      .where("users.email = :email", { email: email })
      .getOne();
  }

  async findById(id: string): Promise<User | null> {
    return await this.userReposetory
      .createQueryBuilder("users")
      .where("users.id = :id", { id: id })
      .getOne();
  }

  async findByUserName(username: string): Promise<User | null> {
    return await this.userReposetory
      .createQueryBuilder("users")
      .select("users.id")
      .where("users.username = :username", { username: username })
      .getOne();
  }

  async addToken(data: TokenDTO): Promise<User | null> {
    return await this.tokenReposetory.save(data);
  }

  async checkToken(token: string, ip: string): Promise<Token | null> {
    return await this.tokenReposetory
      .createQueryBuilder("tokens")
      .where("tokens.token = :token", { token: token })
      .andWhere("tokens.user_ip = :ip", { ip: ip })
      .getOne();
  }

  async run() {
    this.initializeDatabase();
    // this.connection = await createConnection(ormconfig);
    this.userReposetory = await getRepository(User);
    this.tokenReposetory = await getRepository(Token);
  }
}

export default userCheck;
