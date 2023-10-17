import FileInterface from "../../../../shared/interface/File.interface";
import FileDTO from "../../../../shared/dtos/file.dto";
import PostDTO from "../../dtos/post.dto";
import dbFiles from "../../../../database/dbFiles.db";
import PostsEntity from "../../entities/posts.entity";
declare class CreatePost extends dbFiles {
    private readonly uploadFileService;
    private postsReposetory;
    constructor();
    use(title: string, content: string, files: FileInterface[], user_id: string): Promise<PostDTO>;
    addPost(postInfo: {
        title: string;
        content: string;
        user_id: string;
        images: string;
        status: string;
    }): Promise<PostsEntity>;
    uploadFiles(files: FileInterface[], user_id: string): Promise<false | FileDTO[]>;
    handlePostData(files: FileDTO[], title: string, content: string, user_id: string): Promise<{
        user_id: string;
        title: string;
        content: string;
        images: string;
        status: string;
    }>;
    run(): void;
}
export default CreatePost;
//# sourceMappingURL=createPost.service.d.ts.map