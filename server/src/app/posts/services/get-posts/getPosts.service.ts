import { getRepository } from "typeorm";
import PostsEntity from "../../entities/posts.entity";
import dbFiles from "../../../../database/dbFiles.db";
import Config from "../../../../shared/services/config.service";

class GetPostsService extends dbFiles {
  private postsReposetory: any;
  private readonly config: Config;
  constructor() {
    super();
    this.config = new Config();
    this.run();
  }
  async use(page: number) {
    try {
      const skip = page * this.config.Perpage;

      const result = await this.getPagination(skip, this.config.Perpage);
      console.log(result);
      console.log(skip);
      return { ...result, page: page + 1 };
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async getPagination(
    skip: number,
    pageSize: number
  ): Promise<{ posts: PostsEntity[]; totalCount: number }> {
    try {
      const [posts, totalCount] = await this.postsReposetory
        .createQueryBuilder("posts")
        .orderBy("posts.created_at", "DESC") // Optional: Order the posts by a specific column
        .skip(skip)
        .take(pageSize)
        .getManyAndCount();

      console.log(posts);
      //   console.log(totalCount);

      return { posts: posts, totalCount: totalCount };
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  run() {
    this.initializeDatabase();
    this.postsReposetory = getRepository(PostsEntity);
  }
}

export default GetPostsService;
