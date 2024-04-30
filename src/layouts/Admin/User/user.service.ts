import { ref } from "vue";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import {  useLoadingStore } from "@/store/loading";
import { IBodyResponse, IUser } from "@/common/interface/interfaces";
import { userServiceApi } from "./user.api";
export const useUser=()=>{
    const loading=useLoadingStore()
    const users = ref<IUser[]>([])
    const query=DEFAULT_COMMON_LIST_QUERY
    const fetchUsers = async () => {
      try {
        loading.setLoading(true)
        const res = await userServiceApi._getList<any>(query);
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
        console.error('Error fetching users:', error);
      }
    };
      const searchUsers = async () => {
        try {
          console.log(FormData);
          
          loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải
      
          const res = await userServiceApi._getList<IUser>(query);
          
          if (res.success) {
            const data = res.items;
            const totalItems = res.totalItems;
            return { data, totalItems };
          }
          
          return null;
        } catch (error) {
          console.error('Error fetching users:', error);
          return null;
        } finally {
          loading.setLoading(false); // Kết thúc hiển thị trạng thái tải
        }
      };
      const getProfile = async () => {
        try {
          loading.setLoading(true); // Bắt đầu hiển thị trạng thái tải
          
          const res: IBodyResponse<any> = await userServiceApi._getProfile(); // Gọi API để lấy thông tin người dùng
          
          if (res.success) {
            const userProfile = res.data; // Dữ liệu người dùng trả về từ API
            return userProfile;
          }
      
          return null;
        } catch (error) {
          console.error('Error fetching user profile:', error);
          return null;
        } finally {
          loading.setLoading(false); // Kết thúc hiển thị trạng thái tải
        }
      };
    
      return {
        users, // Thay thế 'users' bằng biến hoặc đối tượng chứa danh sách người dùng
        fetchUsers, // Thay thế 'fetchUsers' bằng hàm để lấy danh sách người dùng
        query, // Thay thế 'query' bằng biến hoặc đối tượng chứa thông tin truy vấn
        searchUsers, // Thay thế 'searchUsers' bằng hàm để tìm kiếm người dùng
        getProfile // Phương thức để lấy thông tin người dùng
      };
}