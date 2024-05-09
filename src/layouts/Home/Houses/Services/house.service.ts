import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { houseApi } from "./house.api";
import { showErrors } from "@/common/helper/helpers";

export const useHouse = () => {
  const query = DEFAULT_COMMON_LIST_QUERY;
  const fetchHouse = async () => {
    try {
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
    } 
  };
  const searchHouse = async () => {
    try {
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
    } 
  };
  const createHouse = async (data: any) => {
    try {
      return await houseApi.createData(data);
    } catch (error) {
      console.error("Error Create:", error);
    } 
  };

  const updateHouse=async(data:any,id:any)=>{
    try{
      return await houseApi.updateData(data,id);
    }catch (error) {
      console.error("Error Update:", error);
    }
  };

  const getHouse=async(id:any)=>{
    try{
      return await houseApi.getData(id);
    }catch (error) {
      console.error("Error GetDetail:", error);
    }
  };

  const deleteHouse=async(id:any)=>{
    try{
      return await houseApi.deleteData(id);
    }catch (error) {
      console.error("Error Delete:", error);
    }
  };

 
  return {
    query,
    createHouse,
    updateHouse,
    deleteHouse,
    fetchHouse,
    searchHouse,
    getHouse
  };
};