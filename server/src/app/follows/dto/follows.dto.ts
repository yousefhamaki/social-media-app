class FollowsDTO {
  id: string;
  from: string;
  to: string;
  status: string;
  created_at: string;
  updated_at: string;

  constructor(data) {
    this.id = data.id;
    this.from = data.from;
    this.to = data.to;
    this.status = data.status;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

export default FollowsDTO;
