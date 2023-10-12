import PostsEntity from "../entities/posts.entity";
declare class PostDTO {
    id: string;
    title: string;
    content: string;
    status: string;
    images: object;
    constructor(data: PostsEntity);
}
export default PostDTO;
//# sourceMappingURL=post.dto.d.ts.map