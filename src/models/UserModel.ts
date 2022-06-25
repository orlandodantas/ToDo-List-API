import { PrismaClient } from '@prisma/client';
import { IUserModel, UserDTO } from './interfaces';

export default class UserModel implements IUserModel {
  private _connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this._connection = connection;
  }

  public async getById(id: string): Promise<UserDTO> {
    const userData = await this._connection.user.findUnique({ where: { id } });

    return userData as UserDTO;
  }

  public async create(user: UserDTO): Promise<UserDTO> {
    const userData = await this._connection.user.create({
      data: user,
    });

    return userData as UserDTO;
  }

  public async updateById(id: string, user: UserDTO): Promise<UserDTO> {
    const userData = await this._connection.user.update({
      where: { id },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    return userData as UserDTO;
  }

  public async delete(id: string): Promise<void> {
    await this._connection.user.delete({
      where: { id },
    });
  }
}
