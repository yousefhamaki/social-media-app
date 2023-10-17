import dbFiles from "../../../../database/dbFiles.db";
import PostsEntity from "../../entities/posts.entity";
declare class GetUserPostsService extends dbFiles {
    private postsReposetory;
    private readonly config;
    constructor();
    use(user_id: string, page: number): Promise<{
        page: number;
        posts: PostsEntity[];
        totalCount: number;
    }>;
    getFromDb(user_id: string): Promise<any>;
    getPagination(user_id: string, skip: number, pageSize: number): Promise<{
        posts: PostsEntity[];
        totalCount: number;
    }>;
    run(): void;
}
export default GetUserPostsService;
//# sourceMappingURL=getUserPosts.service.d.ts.map