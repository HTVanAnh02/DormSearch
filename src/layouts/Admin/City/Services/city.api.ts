import { IBodyResponse, ItemsList } from "@/common/interface/interfaces";
import axiosInstance from "@/plugins/axios";
import { ApiService } from "@/plugins/axios/api";
class CityApiService extends ApiService {
  createData(data: FormData): Promise<IBodyResponse<any>> {
    return this.client.post(`${this.baseUrl}`, data);
  }
  updateData( id: string ,data: FormData,): Promise<IBodyResponse<any>> {
    return this.client.patch(`${this.baseUrl}/${id}`, data);
  }
  getData(id:string,data: FormData): Promise<IBodyResponse<any>> {
    return this.client.get(`${this.baseUrl}/${id}`);
  }
  deleteData(id:string,data: FormData): Promise<IBodyResponse<any>> {
   return this.client.delete(`${this.baseUrl}/${id}`);
  }
  itemsList():Promise<ItemsList> {
    return this.client.get(`${this.baseUrl}/ItemsList`);
  }
}
export const cityApi = new CityApiService(
  { baseUrl: "/city" },axiosInstance
);