import axios from "axios"

export const commonApi= async (httpRequest,url,reqBody) => {

    let reqConfig ={
        method:httpRequest,
        url,
        data:reqBody,
        headers:{"Content-Type":"application/json"}
    }

    return await axios(reqConfig).then((request)=>{
        return request
    }).catch((err)=>{
        return err
    })
}