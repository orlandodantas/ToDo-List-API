export default interface IAuthService {
  authenticate(email: string, password: string): Promise<string>;
}
