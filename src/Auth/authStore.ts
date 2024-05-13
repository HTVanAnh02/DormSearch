import localStorageAuthService from '@/common/storages/authStorage';
import { defineStore } from 'pinia';
import { computed } from 'vue';
import dayjs from '@/plugins/dayjs';
import { logout } from '@/plugins/axios/utils';
import { showErrorNotification, showErrors, showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
import { authServiceApi } from '@/Auth/auth.api';
import { IBodyLogin, IBodyRegister } from '@/common/interface/interfaces';
import { useLoadingStore } from '@/store/loading';

export const AuthStore = defineStore('authStore', () => {

  // async function logoutAction() {
  //   await authServiceApi.logout();
  //   logout();
  // }
  const loading = useLoadingStore();
  async function login(header: IBodyLogin) {
    const res = await authServiceApi.login(header);
    if (res.success) {
        const { data } = res;
        localStorageAuthService.setAccessToken(data.accessToken);
        localStorageAuthService.setAccessTokenExpiredAt(data.accessTokenExpiration);
        localStorageAuthService.setRefreshToken(data.refreshToken);
        localStorageAuthService.setUserRole(data.role);
        localStorageAuthService.setRefresh_TokenExpiredAt(data.refreshTokenExpiration);
        //return true;
    }

    //return false;
    return res;
}
const loginbyEmail =async(body: IBodyLogin)=>{
  loading.setLoading(true);
  const res = await authServiceApi.login(body);
  if (res.success) {
    const { data } = res;
      showSuccessNotification(res.message);
      localStorageAuthService.setAccessToken(data.accessToken);
      localStorageAuthService.setAccessTokenExpiredAt(data.accessTokenExpiration);
      localStorageAuthService.setRefreshToken(data.refreshToken);
      localStorageAuthService.setUserRole(data.role);
      localStorageAuthService.setRefresh_TokenExpiredAt(data.refreshTokenExpiration);
      loading.setLoading(false);
  } else {
      if (res.errors !== undefined) {
          showErrors(res.errors);
          loading.setLoading(false);
      }
  }
  return res;
}
  async function register(body: IBodyRegister) {
    const res = await authServiceApi.register(body)
    if (!res.success) {
      showWarningsNotification(res.message)
      return false
    }
    return true
  }
  const logout=async()=>{
    loading.setLoading(true);
    const res=await authServiceApi.logout();
    if(res.success) {
        showErrorNotification(res.message);
        localStorageAuthService.resetAll()
        // localStorageAuthService.setUserRole('');
    }
    loading.setLoading(false);
    return res.success;
};
  const isAuthenticated = computed(() => {
    
    const token = localStorageAuthService.getAccessToken();
    const expiredAt = localStorageAuthService.getAccessTokenExpiredAt();
    return Boolean(token && expiredAt && !dayjs(dayjs(expiredAt)).isBefore());
  });
  const hasToken = computed(() => {
    return !!localStorageAuthService.getAccessToken();
  });
  const _getOwnProfile=async()=>{
    return await authServiceApi._getOwnProfile();
  }
  return {
    login,
    logout,
    hasToken,
    isAuthenticated,
    register,
    loginbyEmail,
    _getOwnProfile
  };
});
