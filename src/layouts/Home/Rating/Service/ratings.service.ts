import { DEFAULT_COMMON_LIST_QUERY_BY_HOME } from "@/common/contant/contants";
import { ratingApi } from "./ratings.api";
import { showErrors } from "@/common/helper/helpers";

export const useRating = () => {
  const query = DEFAULT_COMMON_LIST_QUERY_BY_HOME;
  const fetchRatingByUser = async () => {
    try {
      const res = await ratingApi.ItemsByUser(query);
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
  };
  const createRating = async (data: any) => {
    try {
      return await ratingApi.createData(data);
    } catch (error) {
      console.error("Error Create:", error);
    }
  };

  const updateRting=async(data:any,id:any)=>{
    try{
      return await ratingApi.updateData(data,id);
    }catch (error) {
      console.error("Error Update:", error);
    }
  };

  const deleteRating=async(id:any)=>{
    try{
      return await ratingApi.deleteData(id);
    }catch (error) {
      console.error("Error Delete:", error);
    }
  };

  const changeFeedback =async(data:any)=>{
    try{
      return await ratingApi.ChangeFeedback(data);
    }catch (error) {
      console.error("Error ChangeFeedback:");
    }
  };

  const changeStatus =async(data:any)=>{
    try{
      return await ratingApi.ChangeStatus(data);
    }catch (error){
      console.error("Error ChangeStatus");
    }
  };

  const searchByUser=async()=>{
    try {
      const res = await ratingApi.ItemsByUser(query);
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
  }
  const fetchRatingByUserSuitable=async()=>{
    try {
      const res = await ratingApi.ItemsByUserSuitable(query);
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
  };

  return {
    query,
    fetchRatingByUser,
    createRating,
    updateRting,
    deleteRating,
    changeFeedback,
    changeStatus,
    searchByUser,
    fetchRatingByUserSuitable
  };
};
