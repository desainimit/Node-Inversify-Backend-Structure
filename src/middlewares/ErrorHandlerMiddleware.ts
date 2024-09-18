import { injectable } from "inversify";
import { CustomError, CustomResponse, message } from "@/utils";
import { statusCode } from "@/constants";
import { Request, Response, NextFunction } from "express";

@injectable()
export class ErrorHandlerMiddleware {
  public handle(err: any, req: Request, res: Response, next: NextFunction) {
    res.setHeader("Content-Type", "application/json");

    if (err instanceof CustomError) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        errors: err.errors,
        data: err.data,
      });
    } else if (err instanceof Error) {
      res.status(statusCode.INTERNAL_STATUS).json({
        status: false,
        message: message.INTERNAL_STATUS,
      });
    } else {
      res.status(statusCode.BAD_REQUEST).json({
        status: false,
        message: message.BAD_REQUEST,
      });
    }
  }
}
