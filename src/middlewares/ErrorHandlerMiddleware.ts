import { injectable } from "inversify";
import { CustomError } from "@/utils";
import { STATUSCODE, MESSAGE } from "@/constants";
import { Request, Response, NextFunction } from "express";

@injectable()
export class ErrorHandlerMiddleware {
  public handle(err: any, req: Request, res: Response, next: NextFunction) {
    res.setHeader("Content-Type", "application/json");

    if (err instanceof CustomError) {
      res.status(err.STATUSCODE).json({
        status: err.status,
        message: err.message,
        errors: err.errors,
        data: err.data,
      });
    } else if (err instanceof Error) {
      res.status(STATUSCODE.INTERNAL_STATUS).json({
        status: false,
        message: MESSAGE.INTERNAL_STATUS,
      });
    } else {
      res.status(STATUSCODE.BAD_REQUEST).json({
        status: false,
        message: MESSAGE.BAD_REQUEST,
      });
    }
  }
}
