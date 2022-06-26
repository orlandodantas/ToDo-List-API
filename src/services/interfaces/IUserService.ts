import { UserDTO } from '../../models/interfaces';

export default interface IUserService {
  getById(id: string): Promise<UserDTO>;
  create(user: UserDTO): Promise<string>;
  // create(user: UserDTO): Promise<UserDTO>;
  // updateById(id: string, user: UserDTO): Promise<UserDTO>;
  // deleteById(id: string): Promise<void>;
}
