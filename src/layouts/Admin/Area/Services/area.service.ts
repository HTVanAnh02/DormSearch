
import { useLoadingStore } from "@/store/loading";
import { areaApi } from "./area.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { IAreas } from "@/common/interface/interfaces";
import { ref } from "vue";
export const useArea = () => {
  const loading = useLoadingStore();
  const areas = ref <IAreas[]>([])
  const query = DEFAULT_COMMON_LIST_QUERY
  const fetchAreas = async () => {
    try {
      loading.setLoading(true)
      const res = await areaApi._getList<IAreas>(query);
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
  const searchAreas = async () => {
    try {
      console.log(FormData);

      loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải

      const res = await areaApi._getList<IAreas>(query);

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
    areas, 
    fetchAreas, 
    query, 
    searchAreas 
  };
};