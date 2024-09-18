import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import { CustomError, message } from "@utils";
import { statusCode, types } from "@constants";
import { AuthService } from "@services";
import { log } from "console";

@controller("/auth")
export class AuthController {
  constructor(@inject(types.AuthService) private authService: AuthService) {}

  @httpPost("/register")
  async register(req: Request, res: Response) {
    try {
      log("Registering user");
    } catch (error: unknown) {
      throw new CustomError(statusCode.BAD_REQUEST, message.BAD_REQUEST);
    }
  }
}
