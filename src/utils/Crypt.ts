import bcrypt from 'bcryptjs';

export default class Crypt {
  public static async encrypt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }

  public static async decrypt(password: string, hash: string): Promise<boolean> {
    const isPassword = bcrypt.compare(password, hash);

    return isPassword;
  }
}
