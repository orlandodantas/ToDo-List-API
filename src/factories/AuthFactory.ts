import { AuthController } from '../controllers';
import connection, { UserModel } from '../models';
import UserService, { AuthService } from '../services';

export default class AuthFactory {
  public static create() {
    const userModel = new UserModel(connection);
    const userService = new UserService(userModel);
    const authService = new AuthService(userService);
    const authController = new AuthController(authService);

    return authController;
  }
}
