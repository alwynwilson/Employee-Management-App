import axios from 'axios'

const commonAPI = async (httpMethod,url,reqbody)=>{
    const reConfig = {
        method:httpMethod,
        url,
        data:reqbody
    }
    return await axios(reConfig).then(res=>{ 
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI