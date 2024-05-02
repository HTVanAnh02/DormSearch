import type {
  IBodyResponse,
} from "@/common/interface/interfaces";
import axiosInstance from "@/plugins/axios";
import { ApiService } from "@/plugins/axios/api";

class UserApiService extends ApiService {
  async createUser(formData: FormData): Promise<IBodyResponse<any>> {
    return await this.client.post(`${this.baseUrl}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  async updateUser(
    id: string,
    formData: FormData
  ): Promise<IBodyResponse<any>> {
    return await this.client.patch(`${this.baseUrl}/${id}`, formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
export const userServiceApi = new UserApiService(
  { baseUrl: "/user" },
  axiosInstance
);
