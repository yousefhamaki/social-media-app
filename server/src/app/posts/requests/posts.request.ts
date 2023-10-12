class PostsRequest {
  create: { [key: string]: string } = {
    title: "required|string",
    content: "required|string",
  };
}

export default PostsRequest;
