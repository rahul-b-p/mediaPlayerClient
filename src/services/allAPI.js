import { commonApi } from "./commonApi"
import { serverURL } from "./serverUrl"


// api call for add video
export const addvideoApi = async (reqBody)=>{
    return await commonApi('POST',`${serverURL}/videos`,reqBody)
}

// api call for get video
export const getVideoApi = async ()=>{
    return await commonApi('GET',`${serverURL}/videos`,"")
}

// api to delete video
export const deleteVideoApi = async (id)=>{
    return await commonApi('DELETE',`${serverURL}/videos/${id}`,{})
}

// api to add in watch history
export const addToWatchHistoryApi = async (reqBody)=>{
    return await commonApi('POST',`${serverURL}/history`,reqBody)
}

// api to get history data in watch history
export const getInWatchHistoryApi = async ()=>{
    return await commonApi('GET',`${serverURL}/history`,"")
}

// detelte history data
export const deleteWatchHistoryApi = async (id)=>{
    return await commonApi('DELETE',`${serverURL}/history/${id}`,{})
}

// api to add category
export const addCategoryApi=async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/categories`,reqBody)
}

// api to get all category from server
export const getAllCategoryApi=async()=>{
    return await commonApi('GET',`${serverURL}/categories`,"")
}

// api to delete category 
export const deleteCategoryApi=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/categories/${id}`,{})
} 

// api to get video on category
export const AvideoApi= async(id)=>{
    return await commonApi('GET',`${serverURL}/videos/${id}`,"")
}

// api to update category
export const updateCategoryApi=async(id,reqbody)=>{
    return await commonApi('PUT',`${serverURL}/categories/${id}`,reqbody)
} 