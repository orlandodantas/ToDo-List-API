import 'dotenv/config';
import JWT from 'jsonwebtoken';
import Payload from './interfaces';

export default class JWTAuthenticate {
  public static encrypt(payload: Payload): string {
    const header: JWT.SignOptions = {
      expiresIn: '3h',
      algorithm: 'HS256',
    };

    const { JWT_SECRET } = process.env;

    return JWT.sign(payload, JWT_SECRET as string, header);
  }

  public static decrypt(token: string): Payload {
    const { JWT_SECRET } = process.env;

    return JWT.verify(token, JWT_SECRET as string) as Payload;
  }
}
