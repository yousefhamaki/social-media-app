import { Request, Response, NextFunction } from "express";
import QueryCheck from "../traits/checkQuery.trait";
import Validator, { ErrorMessages } from "validatorjs";
import validReturn from "../traits/valiedReturn.trait";

class ParamsCheck {
  private readonly checkQuery = new QueryCheck();
  /**
   * @author y.hamaki
   * @type middleware
   * @param required @type {{ [key: string]: string }} the needs params and rules to pass this functions
   * @returns Response<JsonReturn> | void
   */
  use(required: { [key: string]: string }) {
    return (req: Request, res: Response, next: NextFunction) => {
      /* request query handler */
      let data = req.method === "GET" ? req.params : req.body;

      if (req.method === "DELETE") {
        data = req.params;
      }
      const requestInfo: string[] = this.checkQuery.check(data, required);
      if (requestInfo.length > 0) {
        return res.status(412).json(validReturn(requestInfo));
      } else {
        next();
      }
    };
  }

  async validation(
    body: {
      [key: string]: string | qs.ParsedQs | string[] | qs.ParsedQs[];
    },
    rules: { [key: string]: string },
    customMessages: ErrorMessages,
    next: NextFunction
  ) {
    const validation = new Validator(body, rules, customMessages);
    if (validation.passes()) {
      return next();
    } else {
      return validation.errors;
    }
  }
}

const checkQuery = new QueryCheck();

export const CheckQuery = (required: { [key: string]: string }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    /* request query handler */
    let data = req.method === "GET" ? req.params : req.body;

    if (req.method === "DELETE") {
      data = req.params;
    }
    const requestInfo: string[] = checkQuery.check(data, required);
    if (requestInfo.length > 0) {
      return res.status(412).json(validReturn(requestInfo));
    } else {
      return next();
    }
  };
};

export default ParamsCheck;
