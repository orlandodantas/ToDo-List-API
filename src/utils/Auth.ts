import 'dotenv/config';
import * as JWT from 'jsonwebtoken';
import Payload from './interfaces';

export default class Auth {
  public static async encrypt(payload: Payload): Promise<string> {
    const header: JWT.SignOptions = {
      expiresIn: '3h',
      algorithm: 'HS256',
    };

    const { JWT_SECRET } = process.env;

    return JWT.sign(payload, JWT_SECRET as string, header);
  }

  public static async decrypt(token: string): Promise<Payload> {
    const { JWT_SECRET } = process.env;

    return JWT.verify(token, JWT_SECRET as string) as Payload;
  }
}
