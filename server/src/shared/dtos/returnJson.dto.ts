class ReturnDTO {
  status: number;
  message: string;
  data: Object;

  constructor(status: number, message: string, data: Object) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export default ReturnDTO;
