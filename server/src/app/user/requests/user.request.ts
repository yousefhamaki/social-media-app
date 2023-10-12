class userRequest {
  login: { [key: string]: string } = {
    email: "required",
    password: "required",
  };

  changePass: { [key: string]: string } = {
    email: "required|email|string",
    oldpassword: "required",
    newpassword: "required",
  };
  verify: { [key: string]: string } = {
    email: "required|string",
    code: "required|string",
  };
  add: { [key: string]: string } = {
    email: "required|email",
    password: "required|password",
    username: "required|min:4",
    role: "required",
  };
}

export default userRequest;
