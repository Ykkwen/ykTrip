import {defineStore} from 'pinia'
import {getCityAll} from '@/services'


const useCityStore = defineStore("city",{
    state:()=>({
        allcities:{}
    }),
    actions:{
        async fetchAllCitiesData(){
            const res = await getCityAll()
            this.allcities = res.data
        }
    }
})

export default useCityStore