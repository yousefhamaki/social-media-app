import generatePasskey from "../../traits/passKey.trait";

class FileDTO {
  public readonly name: string;
  public readonly mimetype: string;
  public readonly buffer: string;
  public readonly size: number;
  public readonly user_id: string;
  public readonly id: string;

  constructor(data) {
    if (data.name) {
      this.name = data.name;
    } else {
      this.name = generatePasskey(20);
    }

    this.mimetype = data.mimetype;
    this.buffer = data.buffer.toString("base64") as string;
    this.size = data.size;
    this.user_id = data.user_id;
    this.id = data.id ? data.id : "";
  }
}

export default FileDTO;
