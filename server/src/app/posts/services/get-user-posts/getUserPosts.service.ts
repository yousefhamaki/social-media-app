import { getRepository } from "typeorm";
import dbFiles from "../../../../database/dbFiles.db";
import PostsEntity from "../../entities/posts.entity";
import Config from "../../../../shared/services/config.service";

class GetUserPostsService extends dbFiles {
  private postsReposetory;
  private readonly config: Config;
  constructor() {
    super();
    this.config = new Config();
    this.run();
  }

  async use(user_id: string, page: number) {
    try {
      const skip = page * this.config.Perpage;

      const getFromDB = await this.getPagination(
        user_id,
        skip,
        this.config.Perpage
      );

      return { ...getFromDB, page: page + 1 };
      // const designData =
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async getFromDb(user_id: string) {
    try {
      return await this.postsReposetory
        .createQueryBuilder("posts")
        .where("posts.user_id = :user_id", { user_id: user_id })
        .getMany();
    } catch (err) {
      throw new Error(`Can't get user posts`);
    }
  }

  async getPagination(
    user_id: string,
    skip: number,
    pageSize: number
  ): Promise<{ posts: PostsEntity[]; totalCount: number }> {
    try {
      const [posts, totalCount] = await this.postsReposetory
        .createQueryBuilder("posts")
        .where("posts.user_id = :user_id", { user_id: user_id })
        .orderBy("posts.created_at", "DESC") // Optional: Order the posts by a specific column
        .skip(skip)
        .take(pageSize)
        .getManyAndCount();

      return {
        posts: posts as PostsEntity[],
        totalCount: totalCount as number,
      };
    } catch (err) {}
  }

  run() {
    this.initializeDatabase();
    this.postsReposetory = getRepository(PostsEntity);
  }
}

export default GetUserPostsService;
