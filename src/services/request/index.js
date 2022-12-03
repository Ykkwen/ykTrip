import axios from 'axios'
import {BASE_URL,TIMEOUT} from './config'
import useMainStore from '../../stores/modules/main'

const mainStore = useMainStore()
class MyRequest {
    constructor(baseURL,timeout=10000){
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.request.use((config)=>{
            mainStore.isLoading=true
            return config
        },(error)=>{
            // mainStore.isLoading=false
            return error
        })
        this.instance.interceptors.response.use((config)=>{
            mainStore.isLoading=false
            return config
        },(error)=>{
            mainStore.isLoading=false
            return error
        })
    }
    request(config){
        return new Promise((resolve,reject)=>{
            this.instance.request(config).then((res)=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    get(config){
        return this.request({...config,method:"get"})
    }
    post(config){
        return this.request({...config,method:"post"})
    }
}

export default new MyRequest(BASE_URL,TIMEOUT)