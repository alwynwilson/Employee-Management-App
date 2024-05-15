import commonAPI from "./CommonAPI";
import SERVER_URL from "./Server_Url";

export const addDetailsAPI = async (name)=>{
    return await commonAPI("POST",`${SERVER_URL}/Employee`,name)
}

export const getDetailsAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/Employee`,"")
}

export const removeDetailsAPI = async (details)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/Employee/${details}`,{})
}