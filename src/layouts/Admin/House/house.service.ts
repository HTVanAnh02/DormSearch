
import { useLoadingStore } from "@/store/loading";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { ref } from "vue";
import { IHouse } from "./interfaces";
import { houseApi } from "./house.api";
export const useHouse = () => {
  const loading = useLoadingStore();
  const houses = ref <IHouse[]>([])
  const query = DEFAULT_COMMON_LIST_QUERY
  const fetchHouse = async () => {
    try {
      loading.setLoading(true)
      const res = await houseApi._getList<IHouse>(query);
      console.log(res);
      loading.setLoading(false)
      if (res.success)
        return {
          data: res.items,
          totalItems: res.totalItems
        }
      else {
        return {
          data: [],
          totalItems: 0
        }
      }
    } catch (error) {
      console.error('Error fetching house:', error);
    }
  };
  const searchHouse = async () => {
    try {
      console.log(FormData);

      loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải

      const res = await houseApi._getList<IHouse>(query);

      if (res.success) {
        const data = res.items;
        const totalItems = res.totalItems;
        return { data, totalItems };
      }
      return null;
    } catch (error) {
      console.error('Error fetching house:', error);
      return null;
    } finally {
      loading.setLoading(false); // Kết thúc hiển thị trạng thái tải
    }
  };
  const houseItem = async () => {
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
      console.error("Error Fetching:", error);
    }
  };
  return {
    houses, 
    fetchHouse, 
    query, 
    searchHouse,
    houseItem
  };
};