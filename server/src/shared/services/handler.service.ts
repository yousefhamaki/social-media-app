import { NextFunction, Request, Response } from "express";
import JsonReurn from "../../interface/JsonReturn.interface";

class Handler {
  ErrorResponse(_req: Request, res: Response) {
    res.status(404).json({
      status: "error",
      message: "ohh you are lost, read the documentation to find your way",
    });
  }

  async Homeresponse(_: Request, res: Response): Promise<Response<JsonReurn>> {
    return res.status(200).json({
      status: "success",
      message:
        "Welcome to social media api, Read Documentation to know more about using this api.",
    });
  }

  HandleError(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    const internalServerError = new Error("Internal Server Error");
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      data: {
        message: err.message,
      },
    });
  }
}

export default Handler;
