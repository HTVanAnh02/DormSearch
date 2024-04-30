import { defineStore } from "pinia"

export const commonTitleCity = defineStore({
    id: 'common',
    state: () => ({
        titlecity: "Danh sách thành phố"
    }),
    actions: {
      setTitleCity(value:string) {
        this.titlecity = value
      }
    }
})
