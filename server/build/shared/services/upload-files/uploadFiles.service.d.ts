import FileDTO from "../../dtos/file.dto";
import FileInterface from "../../interface/File.interface";
declare class UploadFilesService {
    constructor();
    use(files: FileInterface[]): Promise<FileDTO[]>;
    acceptImagesOnly(dataType: string): boolean;
    fetchFiles(files: FileInterface[]): Promise<FileDTO[]>;
}
export default UploadFilesService;
//# sourceMappingURL=uploadFiles.service.d.ts.map