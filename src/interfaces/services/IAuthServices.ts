export interface IAuthService {
  register(data: any): Promise<string>;
}
