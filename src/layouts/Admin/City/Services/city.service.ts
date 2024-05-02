
import { useLoadingStore } from "@/store/loading";
import { cityApi } from "./city.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { ICitys } from "@/common/interface/interfaces";
import { ref } from "vue";
export const useCity = () => {
  const loading = useLoadingStore();
  const citys = ref <ICitys[]>([])
  const query = DEFAULT_COMMON_LIST_QUERY
  const fetchCitys = async () => {
    try {
      loading.setLoading(true)
      const res = await cityApi._getList<ICitys>(query);
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
      console.error('Error fetching city:', error);
    }
  };
  const searchCitys = async () => {
    try {
      console.log(FormData);

      loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải

      const res = await cityApi._getList<ICitys>(query);

      if (res.success) {
        const data = res.items;
        const totalItems = res.totalItems;
        return { data, totalItems };
      }
      return null;
    } catch (error) {
      console.error('Error fetching city:', error);
      return null;
    } finally {
      loading.setLoading(false); // Kết thúc hiển thị trạng thái tải
    }
  };
  return {
    citys, 
    fetchCitys, 
    query, 
    searchCitys 
  };
};