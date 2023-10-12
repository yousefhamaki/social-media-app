import { getRepository } from "typeorm";
import dbFiles from "../../../../database/dbFiles.db";
import User from "../../entities/user.entity";

class UpdateUserService extends dbFiles {
  private userReposetory: any;
  constructor() {
    super();
    this.run();
  }

  async use(user: User) {
    try {
      return await this.updateUser(user);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async updateUser(user: User) {
    return await this.userReposetory.save(user);
  }

  async run() {
    this.initializeDatabase();
    // this.connection = await createConnection(ormconfig);
    this.userReposetory = await getRepository(User);
  }
}

export default UpdateUserService;
