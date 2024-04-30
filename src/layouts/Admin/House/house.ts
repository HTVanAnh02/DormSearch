import {  ref } from "vue";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import {  useLoadingStore } from "@/store/loading";
import { IHouse } from "./interfaces";
import { houseApi } from "@/layouts/Admin/House/house.api";
export const useHouse = () => {
    const loading=useLoadingStore()
    const houses = ref<IHouse[]>([])
    const query=DEFAULT_COMMON_LIST_QUERY
    const fetchHouses = async () => {
      try {
        loading.setLoading(true)
        const res = await houseApi._getList<IHouse>(query);
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
        console.error('Error fetching houses:', error);
      }
    };
    const searchHouses = async () => {
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
        console.error('Error fetching houses:', error);
        return null;
      } finally {
        loading.setLoading(false); // Kết thúc hiển thị trạng thái tải
      }
    };
    
    
    return {
      houses, // Thay thế 'houses' bằng biến hoặc đối tượng chứa danh sách sản phẩm
      fetchHouses, // Thay thế 'fetchHouses' bằng hàm để lấy danh sách sản phẩm
      query, // Thay thế 'query' bằng biến hoặc đối tượng chứa thông tin truy vấn
      searchHouses // Thay thế 'searchHouses' bằng hàm để tìm kiếm sản phẩm
    };
};
