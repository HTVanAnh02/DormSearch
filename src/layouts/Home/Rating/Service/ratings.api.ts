import { DEFAULT_COMMON_LIST_QUERY } from '@/common/contant/contants';
import { DEFAULT_COMMON_LIST_QUERY_BY_HOME } from '@/common/contant/contants';

import { ApiService } from "@/plugins/axios/api";
import axiosInstance from "@/plugins/axios";

class RatingApiService extends ApiService {
  createData(data: any): Promise<any> {
    return this.client.post(`${this.baseUrl}`, data);
  }
  updateData(data: any, id: any): Promise<any> {
    return this.client.patch(`${this.baseUrl}/${id}`, data);
  }
  deleteData(id: any): Promise<any> {
    return this.client.delete(`${this.baseUrl}/${id}`);
  }
  ItemsByUser(DEFAULT_COMMON_LIST_QUERY:any):Promise<any> {
    return this.client.get(`${this.baseUrl}/ItemsByUser`,{
      params: DEFAULT_COMMON_LIST_QUERY
      });
  }
  ItemsByUserSuitable(DEFAULT_COMMON_LIST_QUERY_BY_HOME:any):Promise<any> {
    return this.client.get(`${this.baseUrl}/ItemsByUserSuitable`,{
      params: DEFAULT_COMMON_LIST_QUERY_BY_HOME
      });
  }
  ChangeStatus(data:any):Promise<any> 
  {
    return this.client.patch(`${this.baseUrl}/ChangeStatus`, data);
  }
  ChangeFeedback(data:any):Promise<any> 
  {
    return this.client.patch(`${this.baseUrl}/ChangeFeedback`, data);
  }
}
export const ratingApi = new RatingApiService(
  { baseUrl: "/Recruitment" },
  axiosInstance
);
