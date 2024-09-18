import { Container } from "inversify";
import { types } from "@constants";

// Importing Services
import { AuthService } from "@services";
import { ErrorHandlerMiddleware } from "@middlewares";

// Importing Middleware

const container = new Container();

// Binding Services
container.bind<AuthService>(types.AuthService).to(AuthService);

// Binding Middleware
container
  .bind<ErrorHandlerMiddleware>(types.ErrorHandlerMiddleware)
  .to(ErrorHandlerMiddleware);

export { container };
