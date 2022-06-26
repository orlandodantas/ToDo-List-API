export type UserDTO = {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export default interface IUserModel {
  getById(id: string): Promise<UserDTO>;
  getByEmail(email: string): Promise<UserDTO>;
  create(user: UserDTO): Promise<UserDTO>;
  updateById(id: string, user: UserDTO): Promise<UserDTO>;
  deleteById(id: string): Promise<void>;
}
