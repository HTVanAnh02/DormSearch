import { ApiService } from '@/plugins/axios/api';
import axiosInstance from '@/plugins/axios';
class FavouriteApiService extends ApiService {
    ListJobsByHome(DEFAULT_COMMON_LIST_QUERY:any):Promise<any> {
        return this._getListByHome<any>(DEFAULT_COMMON_LIST_QUERY);
    }
    createData(data: any): Promise<any> {
        return this.client.post(`${this.baseUrl}`, data);
      }
      updateData(data: any, id: any): Promise<any> {
        return this.client.patch(`${this.baseUrl}/${id}`, data);
      }
      getData(id: any): Promise<any> {
        return this.client.get(`${this.baseUrl}/${id}`);
      }
      deleteData(id: any): Promise<any> {
       return this.client.delete(`${this.baseUrl}/${id}`);
      }
}
export const favouriteApi = new FavouriteApiService({ baseUrl: '/Favoufite' }, axiosInstance);