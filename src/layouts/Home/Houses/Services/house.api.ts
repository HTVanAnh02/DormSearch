import { ApiService } from "@/plugins/axios/api";
import axiosInstance from "@/plugins/axios";

class HouseApiService extends ApiService {
  createData(data: any): Promise<any> {
    return this.client.post(`${this.baseUrl}`, data,{
        headers: { "Content-Type": "multipart/form-data" }
    });
  }
  updateData(data: any, id: any): Promise<any> {
    return this.client.patch(`${this.baseUrl}/${id}`, data,{
        headers: { "Content-Type": "multipart/form-data" },
    });
  }
  getData(id: any): Promise<any> {
    return this.client.get(`${this.baseUrl}/${id}`);
  }
  deleteData(id: any): Promise<any> {
   return this.client.delete(`${this.baseUrl}/${id}`);
  }
}
export const houseApi = new HouseApiService({ baseUrl: "/Fruit" }, axiosInstance);