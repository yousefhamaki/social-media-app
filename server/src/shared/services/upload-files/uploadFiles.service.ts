import { getRepository } from "typeorm";
import FileDTO from "../../dtos/file.dto";
import FileInterface from "../../interface/File.interface";
import dbFiles from "../../../database/dbFiles.db";
import File from "../../enitities/file.entity";

class UploadFilesService extends dbFiles {
  private fileReposetory: any;
  constructor() {
    super();
    this.run();
  }

  async use(files: FileInterface[], user_id: string): Promise<FileDTO[]> {
    try {
      //check filter files and return available files only
      const filterFiles = await this.fetchFiles(files);
      const uploaded: FileDTO[] = [];
      //if filter files return empty return emprty and not continue the function
      if (filterFiles.length === 0) {
        return filterFiles;
      }

      // add uploaded data to upload to send to another fuction to use this info
      for (const file of filterFiles) {
        const upload = (await new FileDTO(
          await this.uploadFiles(file, user_id)
        )) as File;
        uploaded[uploaded.length] = { ...upload };
      }

      return await uploaded;
    } catch (err) {
      throw new Error(`Can't upload file, Please try again`);
    }
  }

  // this function upload file and return file info
  async uploadFiles(data: FileDTO, user_id: string): Promise<File> {
    try {
      let file = new File();

      file.mimetype = data.mimetype;
      file.user_id = user_id;
      file.buffer = data.buffer;
      file.size = data.size;
      file.name = data.name;

      return (await this.fileReposetory.save(file)) as File;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  acceptImagesOnly(dataType: string): boolean {
    const type = dataType.split("/")[0];

    if (type === "image" || type === "video") {
      return true;
    }

    return false;
  }

  //this handle files to chack if file has permissions to upload or not
  async fetchFiles(files: FileInterface[]): Promise<FileDTO[]> {
    const result: FileDTO[] = [];

    await files.forEach(async (file) => {
      if (this.acceptImagesOnly(file.mimetype as string)) {
        result.push(await new FileDTO(file));
      }
    });

    return result;
  }

  async run() {
    this.initializeDatabase();
    // this.connection = await createConnection(ormconfig);
    this.fileReposetory = await getRepository(File);
  }
}

export default UploadFilesService;
