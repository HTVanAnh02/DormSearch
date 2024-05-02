import { useLoadingStore } from "@/store/loading";
import { roleApi } from "./role.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { showErrors } from "@/common/helper/helpers";
const loading = useLoadingStore();
export const useRole = () => {
  const query = DEFAULT_COMMON_LIST_QUERY;
  const fetchRoles = async () => {
    try {
      loading.setLoading(true);
      const res = await roleApi._getList<any>(query);
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
      console.error("Error Fetching Roles:", error);
    } finally {
      loading.setLoading(false);
    }
  };
  const searchRoles = async () => {
    try {
      loading.setLoading(true);

      const res = await roleApi._getList<any>(query);
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
      console.error("Error Search Roles:", error);
    } finally {
      loading.setLoading(false);
    }
  };
  const createRole = async (data: any) => {
    try {
      loading.setLoading(true);
      return await roleApi.createData(data);
    } catch (error) {
      console.error("Error Create Role:", error);
    } finally {
      loading.setLoading(false);
    }
  };

  const updateRole=async(data:any,id:any)=>{
    try{
      loading.setLoading(true);
      return await roleApi.updateData(data,id);
    }catch (error) {
      console.error("Error Update Role:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  const getData=async(id:any)=>{
    try{
      loading.setLoading(true);
      return await roleApi.getData(id);
    }catch (error) {
      console.error("Error GetDetail Role:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  const deleteRole=async(id:any)=>{
    try{
      loading.setLoading(true);
      return await roleApi.deleteData(id);
    }catch (error) {
      console.error("Error Delete Role:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  return {
    fetchRoles,
    query,
    searchRoles,
    createRole,
    getData,
    updateRole,
    deleteRole
  };
};
