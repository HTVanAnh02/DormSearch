import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useChatStore = defineStore({
    id: 'isUserId',
    state: () => ({
      userId: ''
    }),
    actions: {
      setUserId(value:string) {
        this.userId = value;
      }
    }
  })
  