import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useOtpStore = defineStore({
    id: 'Otp',
    state: () => ({
      token: '',
      otpData: ''

    }),
    getters: {
      email: (state) => state.otpData
    },
    actions: {
      setToken(value:string) {
        this.token = value;
      },
      setOtp(value:string) {
        this.otpData = value;
      },
    }
  })