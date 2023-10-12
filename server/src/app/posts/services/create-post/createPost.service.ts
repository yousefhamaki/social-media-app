import UploadFilesService from "../../../../shared/services/upload-files/uploadFiles.service";
import FileInterface from "../../../../shared/interface/File.interface";
import FileDTO from "../../../../shared/dtos/file.dto";
import ImagesDTO from "../../dtos/images.dto";
import PostDTO from "../../dtos/post.dto";
import dbFiles from "../../../../database/dbFiles.db";
import { getRepository } from "typeorm";
import PostsEntity from "../../entities/posts.entity";

class CreatePost extends dbFiles {
  private readonly uploadFileService: UploadFilesService;
  private postsReposetory: any;
  constructor() {
    super();
    this.uploadFileService = new UploadFilesService();
    this.run();
  }

  async use(
    title: string,
    content: string,
    files: FileInterface[],
    user_id: string
  ): Promise<PostDTO> {
    try {
      // upload post images and return images info
      const uploadFiles = await this.uploadFiles(files, user_id);
      let images = [];
      if (uploadFiles !== false) {
        images = uploadFiles;
      } else {
        images = [];
      }

      // set post info to upload
      const postData = await this.handlePostData(
        images,
        title,
        content,
        user_id
      );
      // add post info to db
      const uploadPost = await this.addPost(postData);

      return new PostDTO(uploadPost);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async addPost(postInfo: {
    title: string;
    content: string;
    user_id: string;
    images: string;
    status: string;
  }): Promise<PostsEntity> {
    try {
      const result = (await this.postsReposetory.save(postInfo)) as PostsEntity;

      return result;
    } catch (err) {
      // throw new Error(`Can't upload post info, please try again later.`);
      throw new Error((err as Error).message);
    }
  }

  async uploadFiles(
    files: FileInterface[],
    user_id: string
  ): Promise<false | FileDTO[]> {
    if (files.length === 0) {
      return false;
    }

    const uploadFiles = (await this.uploadFileService.use(
      files,
      user_id
    )) as FileDTO[];

    if (uploadFiles.length === 0) {
      return false;
    }

    return uploadFiles;
  }

  async handlePostData(
    files: FileDTO[],
    title: string,
    content: string,
    user_id: string
  ) {
    let images = [];

    for (const file of files) {
      await images.push({ ...new ImagesDTO(file) });
    }

    return {
      user_id: user_id,
      title: title,
      content: content,
      images: JSON.stringify(images),
      status: "active",
    };
  }

  run() {
    this.initializeDatabase();
    this.postsReposetory = getRepository(PostsEntity);
  }
}

export default CreatePost;
