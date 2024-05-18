import { IBodyResponse, ItemsList } from "@/common/interface/interfaces";
import axiosInstance from "@/plugins/axios";
import { ApiService } from "@/plugins/axios/api";
class HouseApiService extends ApiService {
  createData(data: FormData): Promise<IBodyResponse<any>> {
    return this.client.post(`${this.baseUrl}`, data, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  }
  updateData(id: string, data: FormData,): Promise<IBodyResponse<any>> {
    return this.client.patch(`${this.baseUrl}/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  getData(id: string): Promise<IBodyResponse<any>> {
    return this.client.get(`${this.baseUrl}/${id}`);
  }
  deleteData(id: string, data: FormData): Promise<IBodyResponse<any>> {
    return this.client.delete(`${this.baseUrl}/${id}`);
  }
  itemsList(): Promise<ItemsList> {
    return this.client.get(`${this.baseUrl}/ItemsList`);
  }
  ItemById(id:any):Promise<any> {
    return this.client.get(`${this.baseUrl}/ItemById/${id}`,);
}
  RelatedJobs(DEFAULT_COMMON_LIST_QUERY_BY_HOME: any, id: string): Promise<any> {
    return this.client.get(`${this.baseUrl}/RelatedHouses/${id}`, {
      params: DEFAULT_COMMON_LIST_QUERY_BY_HOME
    }
    );
  }
}
export const houseApi = new HouseApiService(
  { baseUrl: "/houses" }, axiosInstance
);