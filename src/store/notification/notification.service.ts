import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { defineStore } from "pinia";
import { notificationApi } from "./notification";
import { showErrors } from "@/common/helper/helpers";

const query = DEFAULT_COMMON_LIST_QUERY;

export const useNotifications = defineStore("notifications", {
  state: () => ({
    notifications: [],
  }),
  actions: {
    async createNoti(data: any) {
      console.log(data);
      const formData = new FormData();
      formData.append("houseId", data.houseId);
      formData.append("userId", data.userId);
      formData.append("message", data.message);
      return await notificationApi.sendNotification(data);
    },

    async fetchNotifications() {
      try {
        const res = await notificationApi.GetNotificationByUser(query);
        if (res.errors !== undefined) {
          showErrors(res.errors);
        }
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
    },
  },
});
