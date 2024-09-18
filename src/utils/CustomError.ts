import { statusCode } from "@constants";
class CustomError extends Error {
  public statusCode: number;
  public data: any;
  public status: boolean;
  public errors: any[];
  public stack: string | undefined;
  constructor(statusCode: number, message: string, errors: any[] = []) {
    super();
    this.statusCode = statusCode;
    this.data = null;
    this.status = false;
    this.message = message;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  static badRequest(message: string, errors: any[] = []) {
    return new CustomError(statusCode.BAD_REQUEST, message, errors);
  }
  static internal(message: string) {
    return new CustomError(statusCode.INTERNAL_STATUS, message);
  }
  static notFound(message: string) {
    return new CustomError(statusCode.NOT_FOUND, message);
  }
  static unauthorized(message: string) {
    return new CustomError(statusCode.UNAUTHORIZED_STATUS, message);
  }
  static forbidden(message: string) {
    return new CustomError(statusCode.FORBIDDEN_STATUS, message);
  }
  static conflict(message: string) {
    return new CustomError(statusCode.CONFLICT, message);
  }
}

export { CustomError };
