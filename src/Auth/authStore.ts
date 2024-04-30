import localStorageAuthService from '@/common/storages/authStorage';
import { defineStore } from 'pinia';
import { computed } from 'vue';
import dayjs from '@/plugins/dayjs';
import { logout } from '@/plugins/axios/utils';
import { showWarningsNotification } from '@/common/helper/helpers';
import { authServiceApi } from '@/Auth/auth.api';
import { IBodyLogin, IRegister } from '@/common/interface/interfaces';

export const AuthStore = defineStore('authStore', () => {

  async function logoutAction() {
    await authServiceApi.logout();
    logout();
  }
  async function login(header: IBodyLogin) {
    const res = await authServiceApi.login(header);
    if (res.success) {
        const { data } = res;
        // localStorageAuthService.setAccessToken(data.accessToken.token);
        // localStorageAuthService.setAccessTokenExpiredAt(data.accessToken.expiresIn);
        // localStorageAuthService.setRefreshToken(data.refreshToken.token);
        // localStorageAuthService.setRefresh_TokenExpiredAt(data.refreshToken.expiresIn);
        localStorageAuthService.setAccessToken(data.accessToken);
        localStorageAuthService.setAccessTokenExpiredAt(data.accessTokenExpiration);
        localStorageAuthService.setRefreshToken(data.refreshToken);
        localStorageAuthService.setUserRole(data.role);
        localStorageAuthService.setRefresh_TokenExpiredAt(data.refreshTokenExpiration);
        return true;
    }

    return false;
}
  async function register(body: IRegister) {
    const res = await authServiceApi.register(body)
    if (!res.success) {
      showWarningsNotification(res.message)
      return false
    }
    return true
  }

  const isAuthenticated = computed(() => {
    const token = localStorageAuthService.getAccessToken();
    const expiredAt = localStorageAuthService.getAccessTokenExpiredAt();
    return Boolean(token && expiredAt && !dayjs(dayjs(expiredAt)).isBefore());
  });
  const hasToken = computed(() => {
    return !!localStorageAuthService.getAccessToken();
  });
  return {
    login,
    logoutAction,
    hasToken,
    isAuthenticated,
    register
  };
});
