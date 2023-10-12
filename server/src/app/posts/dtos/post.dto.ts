import PostsEntity from "../entities/posts.entity";

class PostDTO {
  id: string;
  user_id: string;
  title: string;
  content: string;
  status: string;
  images: object;
  created_at: string;
  updated_at: string;

  constructor(data: any) {
    this.id = data.id;
    this.user_id = data.user_id;
    this.title = data.title;
    this.content = data.content;
    this.status = data.status;
    this.images = JSON.parse(data.images);

    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

export default PostDTO;
