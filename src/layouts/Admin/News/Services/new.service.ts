
import { useLoadingStore } from "@/store/loading";
import { newApi } from "./newapi";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { showErrors } from "@/common/helper/helpers";
const loading = useLoadingStore();
export const useJob = () => {
  const query = DEFAULT_COMMON_LIST_QUERY;
  const fetchJobs = async () => {
    try {
      loading.setLoading(true);
      const res = await newApi._getList<any>(query);
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
  const searchNew = async () => {
    try {
      loading.setLoading(true);

      const res = await newApi._getList<any>(query);
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
  const createNew = async (data: any) => {
    try {
      loading.setLoading(true);
      return await newApi.createData(data);
    } catch (error) {
      console.error("Error Create:", error);
    } finally {
      loading.setLoading(false);
    }
  };

  const updateNew=async(data:any,id:any)=>{
    try{
      loading.setLoading(true);
      return await newApi.updateData(data,id);
    }catch (error) {
      console.error("Error Update:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  const getData=async(id:any)=>{
    try{
      loading.setLoading(true);
      return await newApi.getData(id);
    }catch (error) {
      console.error("Error GetDetail:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  const deleteNew=async(id:any)=>{
    try{
      loading.setLoading(true);
      return await newApi.deleteData(id);
    }catch (error) {
      console.error("Error Delete:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  return {
    fetchJobs,
    createNew,
    updateNew,
    deleteNew,
    query,
    getData,
    searchNew
  };
};
