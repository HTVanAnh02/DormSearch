
import { useLoadingStore } from "@/store/loading";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { ref } from "vue";
import { IRoomstyles } from "./interface";
import { roomApi } from "./roomstyle.api";
export const useRoom = () => {
  const loading = useLoadingStore();
  const rooms = ref <IRoomstyles[]>([])
  const query = DEFAULT_COMMON_LIST_QUERY
  const fetchRooms = async () => {
    try {
      loading.setLoading(true)
      const res = await roomApi._getList<IRoomstyles>(query);
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
      console.error('Error fetching rooms:', error);
    }
  };
  const searchRooms = async () => {
    try {
      console.log(FormData);

      loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải

      const res = await roomApi._getList<IRoomstyles>(query);

      if (res.success) {
        const data = res.items;
        const totalItems = res.totalItems;
        return { data, totalItems };
      }
      return null;
    } catch (error) {
      console.error('Error fetching rooms:', error);
      return null;
    } finally {
      loading.setLoading(false); // Kết thúc hiển thị trạng thái tải
    }
  };
  const roomstylesItem = async () => {
    try {
      const res = await roomApi._getList<any>(query);
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
    rooms, 
    fetchRooms, 
    query, 
    searchRooms ,
    roomstylesItem
  };
};