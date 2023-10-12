import { getRepository } from "typeorm";
import HashPassword from "../../../../traits/hashPassword.trait";
import userCheck from "../../../../shared/services/check-user/usersCheck.service";
import User from "../../entities/user.entity";
import dbFiles from "../../../../database/dbFiles.db";

class ChangePassword extends dbFiles {
  private readonly check: userCheck;
  private readonly hash: HashPassword;
  private userReposetory;

  constructor() {
    super();
    this.run();
    this.check = new userCheck();
    this.hash = new HashPassword();
  }

  async use(
    email: string,
    oldPassword: string,
    newPassword: string
  ): Promise<boolean> {
    try {
      const user = await this.check.findByEmail(email);

      if (!user) {
        throw new Error("Your E-mail isnot defined.");
      }

      if (await this.hash.chech(oldPassword, user.password)) {
        const result = await this.saveNewPassword(
          email,
          await this.hash.hashPassword(newPassword)
        );
        return true;
      }

      return false;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async saveNewPassword(email: string, newPassword: string) {
    try {
      const result = await this.userReposetory
        .createQueryBuilder("users")
        .update("users.password = :password", { password: newPassword })
        .where("users.email = :email", { email: email });

      return result;
    } catch (err) {
      throw new Error("Can't change your password please try againg");
    }
  }

  async run() {
    this.initializeDatabase();
    // this.connection = await createConnection(ormconfig);
    this.userReposetory = getRepository(User);
  }
}

export default ChangePassword;
