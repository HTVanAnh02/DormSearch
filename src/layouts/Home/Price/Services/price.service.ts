import { useLoadingStore } from "@/store/loading";
import { ref } from "vue";
import { IPrice } from "./interface";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { priceApi } from "./price.api";
export const usePrice = () => {
  const loading = useLoadingStore();
  const prices = ref <IPrice[]>([])
  const query = DEFAULT_COMMON_LIST_QUERY
  const fetchPrice = async () => {
    try {
      loading.setLoading(true)
      const res = await priceApi._getList<IPrice>(query);
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
      console.error('Error fetching area:', error);
    }
  };
  const searchPrice = async () => {
    try {
      console.log(FormData);

      loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải

      const res = await priceApi._getList<IPrice>(query);

      if (res.success) {
        const data = res.items;
        const totalItems = res.totalItems;
        return { data, totalItems };
      }
      return null;
    } catch (error) {
      console.error('Error fetching area:', error);
      return null;
    } finally {
      loading.setLoading(false); // Kết thúc hiển thị trạng thái tải
    }
  };
  return {
    prices, 
    fetchPrice, 
    query, 
    searchPrice 
  };
};