import FileDTO from "../../../shared/dtos/file.dto";
import File from "../../../shared/enitities/file.entity";

class ImagesDTO {
  id: string;
  type: string;

  constructor(data: FileDTO) {
    this.id = data.id;
    this.type = data.mimetype;
  }
}

export default ImagesDTO;
