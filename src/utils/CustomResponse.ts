class CustomResponse<T> {
  public statusCode: number;
  public data: T;
  public message: string;
  public status: boolean;

  constructor(statusCode: number, data: T, message: string) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.status = true;
  }
}

export { CustomResponse };
