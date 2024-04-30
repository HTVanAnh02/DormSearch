import { IBodyResponse, ItemsList } from "@/common/interface/interfaces";
import localStorageAuthService from "@/common/storages/authStorage";
import axiosInstance,  from "@/plugins/axios";
import { ApiService } from "@/plugins/axios/api";
class HouseApiService extends ApiService {
  async createData(formData: FormData): Promise<IBodyResponse<any>> {
    return await this.client.post(`${this.baseUrl}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer '+localStorageAuthService.getAccessToken()
      },
    });
  }
  async updateData(
    id: string,
    formData: FormData
  ): Promise<IBodyResponse<any>> {
    return await this.client.put(`${this.baseUrl}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer '+localStorageAuthService.getAccessToken()
      },
      
    });
  }
  async getData(id: any): Promise<any> {
    return this.client.get(`${this.baseUrl}/${id}`);
  }
  async deleteData(id: any): Promise<any> {
   return this.client.delete(`${this.baseUrl}/${id}`);
  }
  async itemsList():Promise<ItemsList> {
    return this.client.get(`${this.baseUrl}/ItemsList`);
  }
}
export const houseServiceApi = new HouseApiService(
  { baseUrl: "/house" },axiosInstance
);

