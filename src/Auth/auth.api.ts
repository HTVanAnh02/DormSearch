import type { IBodyLogin, IBodyRegister, IBodyResponse, ILoginResponse} from '@/common/interface/interfaces';
import axiosInstance from '@/plugins/axios';
import { ApiService } from '@/plugins/axios/api';

class AuthApiService extends ApiService {
  async login(body: IBodyLogin): Promise<IBodyResponse<ILoginResponse>> {
    return await this.client.post(`${this.baseUrl}/login`, body);
  }
  async register(body: IBodyRegister): Promise<IBodyResponse<ILoginResponse>> {
    return await this.client.post(`${this.baseUrl}/register`, body);
  }
  logout(): Promise<IBodyResponse<Record<string, unknown>>> {
    return this.client.post(`${this.baseUrl}/logout`);
  }
  _getOwnProfile<R>(): Promise<IBodyResponse<R>> {
    return this.client.get('/user/my-profile');
  }
  
}

export const authServiceApi = new AuthApiService({ baseUrl: '/Auth' }, axiosInstance);
