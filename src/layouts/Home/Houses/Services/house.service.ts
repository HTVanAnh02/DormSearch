import { useLoadingStore } from "@/store/loading";
import { houseServiceApi } from "./house.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { IHouse } from "@/common/interface/interfaces";
import { ref } from "vue";
export const useHouse = () => {
  const loading = useLoadingStore();
  const houses = ref<IHouse[]>([])
  const query=DEFAULT_COMMON_LIST_QUERY
  const fetchHouse = async () => {
    try {
      loading.setLoading(true)
      const res = await houseServiceApi._getList<IHouse>(query);
      console.log(res);
      loading.setLoading(false)
      if(res.success)
        return {
          data:res.items,
          totalItems:res.totalItems
        }
    else{
      return {
        data:[],
        totalItems:0
      }
    }     
  } catch (error) {
      console.error('Error fetching Houses:', error);
    }
  };
  const searchHouse = async () => {
    try {
      console.log(FormData);
      
      loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải
  
      const res = await houseServiceApi._getList<IHouse>(query);
      
      if (res.success) {
        const data = res.items;
        const totalItems = res.totalItems;
        return { data, totalItems };
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching Houses:', error);
      return null;
    } finally {
      loading.setLoading(false); // Kết thúc hiển thị trạng thái tải
    }
  };
  const createHouse = async (data: any) => {
    try {
      loading.setLoading(true);
      return await houseServiceApi.createData(data);
    } catch (error) {
      console.error("Error Create:", error);
    } finally {
      loading.setLoading(false);
    }
  };

  const updateHouse=async(data:any,id:any)=>{
    try{
      loading.setLoading(true);
      return await houseServiceApi.updateData(data,id);
    }catch (error) {
      console.error("Error Update:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  const getData=async(id:any)=>{
    try{
      loading.setLoading(true);
      return await houseServiceApi.getData(id);
    }catch (error) {
      console.error("Error GetDetail:", error);
    }finally {
      loading.setLoading(false);
    }
  };

  const deleteHouse=async(id:any)=>{
    try{
      loading.setLoading(true);
      return await houseServiceApi.deleteData(id);
    }catch (error) {
      console.error("Error Delete:", error);
    }finally {
      loading.setLoading(false);
    }
  };
  
  
  return {
    fetchHouse,
    houses,
    createHouse,
    updateHouse,
    deleteHouse,
    query,
    getData,
    searchHouse,
  };
};
