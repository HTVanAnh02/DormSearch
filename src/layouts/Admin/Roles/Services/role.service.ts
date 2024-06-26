
import { useLoadingStore } from "@/store/loading";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { ref } from "vue";
import { IRole } from "./interface";
import { roleApi } from "./role.api";
export const useRole = () => {
  const loading = useLoadingStore();
  const roles = ref <IRole[]>([])
  const query = DEFAULT_COMMON_LIST_QUERY
  const fetchRole = async () => {
    try {
      loading.setLoading(true)
      const res = await roleApi._getList<IRole>(query);
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
  const searchRoles = async () => {
    try {
      console.log(FormData);

      loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải

      const res = await roleApi._getList<IRole>(query);

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
    roles, 
    fetchRole, 
    query, 
    searchRoles 
  };
};