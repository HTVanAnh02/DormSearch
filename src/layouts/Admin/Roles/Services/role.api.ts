import { ApiService } from "@/plugins/axios/api";
import axiosInstance from "@/plugins/axios";

class RoleApiService extends ApiService {
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
export const roleApi = new RoleApiService({ baseUrl: "/Role" }, axiosInstance);
