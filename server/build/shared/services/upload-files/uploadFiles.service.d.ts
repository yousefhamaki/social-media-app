import FileDTO from "../../dtos/file.dto";
import FileInterface from "../../interface/File.interface";
import dbFiles from "../../../database/dbFiles.db";
import File from "../../enitities/file.entity";
declare class UploadFilesService extends dbFiles {
    private fileReposetory;
    constructor();
    use(files: FileInterface[], user_id: string): Promise<FileDTO[]>;
    uploadFiles(data: FileDTO, user_id: string): Promise<File>;
    acceptImagesOnly(dataType: string): boolean;
    fetchFiles(files: FileInterface[]): Promise<FileDTO[]>;
    run(): Promise<void>;
}
export default UploadFilesService;
//# sourceMappingURL=uploadFiles.service.d.ts.map