import type { IBodyLogin, IBodyResponse, ILoginResponse, IRegister } from '@/common/interface/interfaces';
import axiosInstance from '@/plugins/axios';
import { ApiService } from '@/plugins/axios/api';

class AuthApiService extends ApiService {
  async login(body: IBodyLogin): Promise<IBodyResponse<ILoginResponse>> {
    return await this.client.post(`${this.baseUrl}/Login`, body);
  }
  logout(): Promise<IBodyResponse<Record<string, unknown>>> {
    return this.client.post(`${this.baseUrl}/logout`);
  }
  _getOwnProfile<R>(): Promise<IBodyResponse<R>> {
    return this.client.get(`${this.baseUrl}/profile`);
  }
    async register(body: IRegister): Promise<IBodyResponse<ILoginResponse>> {
    return await this.client.post(`${this.baseUrl}/register`, body);
  }
}

export const authServiceApi = new AuthApiService({ baseUrl: '/Auth' }, axiosInstance);
