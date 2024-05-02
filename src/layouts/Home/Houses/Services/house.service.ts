
import { useLoadingStore } from "@/store/loading";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { showErrors } from "@/common/helper/helpers";
import { houseApi } from "./house.api";
const loading = useLoadingStore();
export const useHouse = () => {
  const query = DEFAULT_COMMON_LIST_QUERY;
  const fetchHouses = async () => {
    try {
      loading.setLoading(true);
      const res = await houseApi._getList<any>(query);
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
    } finally {
      loading.setLoading(false);
    }
  };
  const searchHouses = async () => {
    try {
      loading.setLoading(true);

      const res = await houseApi._getList<any>(query);
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
    } finally {
      loading.setLoading(false);
    }
  };
  const createHouse = async (data: any) => {
    try {
      loading.setLoading(true);
      return await houseApi.createData(data);
    } catch (error) {
      console.error("Error Create:", error);
    } finally {
      loading.setLoading(false);
    }
  };

  const updateHouse=async(data:any,id:any)=>{
    try{
      loading.setLoading(true);
      return await houseApi.updateData(data,id);
    }catch (error) {
      console.error("Error Update:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  const getData=async(id:any)=>{
    try{
      loading.setLoading(true);
      return await houseApi.getData(id);
    }catch (error) {
      console.error("Error GetDetail:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  const deleteHouse=async(id:any)=>{
    try{
      loading.setLoading(true);
      return await houseApi.deleteData(id);
    }catch (error) {
      console.error("Error Delete:", error);
    }finally {
      loading.setLoading(false);
    }
  };
  return {
    fetchHouses,
    createHouse,
    updateHouse,
    deleteHouse,
    query,
    getData,
    searchHouses,
  };
};
