
import { DEFAULT_COMMON_LIST_QUERY_BY_HOME } from "@/common/contant/contants";
import { homeApi } from "./home.api";
import { showErrors } from "@/common/helper/helpers";
import { IHouse } from "@/common/interface/interfaces";
import { ref } from "vue";
export const useHome = () => {
  const houses = ref <IHouse[]>([])
  const query_by_home = DEFAULT_COMMON_LIST_QUERY_BY_HOME;
  const fetchHome = async () => {
    try {
      const res = await homeApi.ListHouseByHome(query_by_home);
      if (res.errors !== undefined) {
        showErrors(res.errors);
    }
      if (res.success) {
        return {
          items: res.items,
          totalItems: res.totalItems,
        };
      }
      return {
        items: [],
        totalItems: 0,
      };
    } catch (error) {
      console.error("Error Fetching:", error);
    } 
  };
  const searchHome = async () => {
    try {

      const res = await homeApi.ListHouseByHome(query_by_home);
      if (res.success) {
        return {
          items: res.items,
          totalItems: res.totalItems,
        };
      }
      return {
        items: [],
        totalItems: 0,
      };
    } catch (error) {
      console.error("Error Search:", error);
    } 
  };
  const getById=async(id:any)=>{
    try{
      
      const res:any=await homeApi.ItemById(id);
      if (res.errors !== undefined) {
        showErrors(res.errors);
    }

    
      return res.data;
    }catch (error) {
      console.error("Error GetDetail:", error);
    }
  };
  return {
    houses,
    query_by_home,
    fetchHome,
    searchHome,
    getById,
  };
};
