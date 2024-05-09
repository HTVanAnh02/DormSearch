import { ApiService } from "@/plugins/axios/api";
import axiosInstance from "@/plugins/axios";
import { ItemsList } from "@/common/interface/interfaces";

class FavouriteApiService extends ApiService {
  changeFavourite(data: any): Promise<any> {
    return this.client.post(`${this.baseUrl}/FavouriteJob`, data);
  }
  itemsList(): Promise<ItemsList> {
    return this.client.get(`${this.baseUrl}/Favourite_Jobs`);
  }
}
export const favouriteApi = new FavouriteApiService(
  { baseUrl: "/Favourite" },
  axiosInstance
);
