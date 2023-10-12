import dbFiles from "../../../../database/dbFiles.db";
declare class GetPostsService extends dbFiles {
    private postsReposetory;
    private readonly config;
    constructor();
    use(user_id: string, page: number): Promise<any[]>;
    getFromDb(user_id: string): Promise<any>;
    getPagination(user_id: string, skip: number, pageSize: number): Promise<any[]>;
    run(): void;
}
export default GetPostsService;
//# sourceMappingURL=getPosts.service.d.ts.map