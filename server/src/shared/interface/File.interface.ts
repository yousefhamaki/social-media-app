interface FileInterface {
  name: string;
  mimetype: string;
  buffer: string | Buffer;
  size: number;
}

export default FileInterface;
