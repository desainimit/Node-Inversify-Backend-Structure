import { Container } from "inversify";
import { TYPES } from "@constants";

// Importing Services
import { AuthService } from "@services";
import { ErrorHandlerMiddleware } from "@middlewares";

// Importing Middleware

const container = new Container();

// Binding Services
container.bind<AuthService>(TYPES.AuthService).to(AuthService);

// Binding Middleware
container
  .bind<ErrorHandlerMiddleware>(TYPES.ErrorHandlerMiddleware)
  .to(ErrorHandlerMiddleware);

export { container };
