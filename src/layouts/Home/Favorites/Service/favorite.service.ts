import { DEFAULT_COMMON_LIST_QUERY_BY_HOME } from "@/common/contant/contants";
import { favouriteApi } from "./favorite.api";

export const useFarourite = () => {
    const query = DEFAULT_COMMON_LIST_QUERY_BY_HOME;
    const createFarourite = async (data:any) => {
        try {
            return await favouriteApi.createData(data);
          } catch (error) {
            console.error("Error Create:", error);
          } 
    };
    return{
        createFarourite
    }
}