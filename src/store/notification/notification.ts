import { ItemsList } from "@/common/interface/interfaces";
import axiosInstance, { ApiService } from "@/plugins/axios";


class NotificationApiService extends ApiService {
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
  itemsList(): Promise<ItemsList> {
    return this.client.get(`${this.baseUrl}/ItemsList`);
  }
  GetNotificationByUser(DEFAULT_COMMON_LIST_QUERY: any): Promise<any> {
    return this.client.get(`${this.baseUrl}/GetNotificationByUser`, {
      params: DEFAULT_COMMON_LIST_QUERY,
    });
  }
  sendNotification(data: any): Promise<any> {
    return this.client.post(`${this.baseUrl}/send`, data);
  }
}
export const notificationApi = new NotificationApiService(
  { baseUrl: "/Notification" },
  axiosInstance
);
