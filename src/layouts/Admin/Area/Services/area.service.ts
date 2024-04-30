
import { useLoadingStore } from "@/store/loading";
import { areaApi } from "./area.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { IArea } from "@/common/interface/interfaces";
import { ref } from "vue";
export const useArea = () => {
  const loading = useLoadingStore();
  const citys = ref <IArea[]>([])
  const query = DEFAULT_COMMON_LIST_QUERY
  const fetchArea = async () => {
    try {
      loading.setLoading(true)
      const res = await areaApi._getList<IArea>(query);
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
      console.error('Error fetching ares:', error);
    }
  };
  const searchArea = async () => {
    try {
      console.log(FormData);

      loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải

      const res = await areaApi._getList<IArea>(query);

      if (res.success) {
        const data = res.items;
        const totalItems = res.totalItems;
        return { data, totalItems };
      }
      return null;
    } catch (error) {
      console.error('Error fetching ares:', error);
      return null;
    } finally {
      loading.setLoading(false); // Kết thúc hiển thị trạng thái tải
    }
  };
  return {
    citys, 
    fetchArea, 
    query, 
    searchArea 
  };
};
