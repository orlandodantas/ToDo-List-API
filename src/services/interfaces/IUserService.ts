import { UserDTO } from '../../models/interfaces';

export default interface IUserService {
  getById(id: string): Promise<UserDTO>;
  getByEmail(email: string): Promise<UserDTO>;
  create(user: UserDTO): Promise<string>;
}
