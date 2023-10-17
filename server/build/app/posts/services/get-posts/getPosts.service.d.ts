import PostsEntity from "../../entities/posts.entity";
import dbFiles from "../../../../database/dbFiles.db";
declare class GetPostsService extends dbFiles {
    private postsReposetory;
    private readonly config;
    constructor();
    use(page: number): Promise<{
        page: number;
        posts: PostsEntity[];
        totalCount: number;
    }>;
    getPagination(skip: number, pageSize: number): Promise<{
        posts: PostsEntity[];
        totalCount: number;
    }>;
    run(): void;
}
export default GetPostsService;
//# sourceMappingURL=getPosts.service.d.ts.map