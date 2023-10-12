import FileInterface from "../../../../shared/interface/File.interface";
import FileDTO from "../../../../shared/dtos/file.dto";
declare class CreatePost {
    private readonly uploadFileService;
    constructor();
    use(title: string, content: string, files: FileInterface[]): Promise<false | FileDTO[]>;
    uploadFiles(files: FileInterface[]): Promise<false | FileDTO[]>;
}
export default CreatePost;
//# sourceMappingURL=createPost.service.d.ts.map