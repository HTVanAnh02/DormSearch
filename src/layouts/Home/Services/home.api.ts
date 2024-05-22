import { ApiService } from '@/plugins/axios/api';
import axiosInstance from '@/plugins/axios';

class HomeApiService extends ApiService {
    ListHouseByHome(DEFAULT_COMMON_LIST_QUERY_BY_HOME:any):Promise<any> {
        return this._getListByHome<any>(DEFAULT_COMMON_LIST_QUERY_BY_HOME);
    }
    ItemById(id:any):Promise<any> {
        return this._ItemById(id);
    }
}
export const homeApi = new HomeApiService({ baseUrl: '/Home' }, axiosInstance);