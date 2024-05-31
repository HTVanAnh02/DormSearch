import { DEFAULT_COMMON_LIST_QUERY_BY_HOME } from "@/common/contant/contants";
import { favoriteApi } from "./favorite.api";

export const useFavorites = () => {
    const query = DEFAULT_COMMON_LIST_QUERY_BY_HOME;
    const fetchfavorites = async () => {
      try {
        return await favoriteApi.itemsList();
      } catch (error) {
        console.error("Error Fetching:", error);
      } 
    };
    const changefavorites = async (data:any) => {
        try {
            return await favoriteApi.changeFavourite(data);
          } catch (error) {
            console.error("Error Create:", error);
          } 
    };
    return{
        changefavorites,
        fetchfavorites
    }
}