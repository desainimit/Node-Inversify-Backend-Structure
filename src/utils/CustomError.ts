import { STATUSCODE } from "@constants";
class CustomError extends Error {
  public STATUSCODE: number;
  public data: any;
  public status: boolean;
  public errors: any[];
  public stack: string | undefined;
  constructor(STATUSCODE: number, message: string, errors: any[] = []) {
    super();
    this.STATUSCODE = STATUSCODE;
    this.data = null;
    this.status = false;
    this.message = message;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  static badRequest(message: string, errors: any[] = []) {
    return new CustomError(STATUSCODE.BAD_REQUEST, message, errors);
  }
  static internal(message: string) {
    return new CustomError(STATUSCODE.INTERNAL_STATUS, message);
  }
  static notFound(message: string) {
    return new CustomError(STATUSCODE.NOT_FOUND, message);
  }
  static unauthorized(message: string) {
    return new CustomError(STATUSCODE.UNAUTHORIZED_STATUS, message);
  }
  static forbidden(message: string) {
    return new CustomError(STATUSCODE.FORBIDDEN_STATUS, message);
  }
  static conflict(message: string) {
    return new CustomError(STATUSCODE.CONFLICT, message);
  }
}

export { CustomError };
