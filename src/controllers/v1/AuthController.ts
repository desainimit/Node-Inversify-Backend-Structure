import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import { CustomError } from "@utils";
import { STATUSCODE, TYPES, MESSAGE } from "@constants";
import { AuthService } from "@services";
import { log } from "console";

@controller("/auth")
export class AuthController {
  constructor(@inject(TYPES.AuthService) private authService: AuthService) {}

  @httpPost("/register")
  async register(req: Request, res: Response) {
    try {
      log("Registering user");
    } catch (error: unknown) {
      throw new CustomError(STATUSCODE.BAD_REQUEST, MESSAGE.BAD_REQUEST);
    }
  }
}
