import {defineStore} from 'pinia'
import {getHotSuggests,getCategories,getHouselist} from '@/services'

const useHomeStore = defineStore("home",{
    state:()=>({
        hotSuggests:[],
        categories:[],
        houseList:[],
        currentPage:1,
    }),
    actions:{
        async fetchgetHotSuggestsData(){
            const res = await getHotSuggests()
            this.hotSuggests=res.data
        },
        async fetchCategoriesData(){
            const res = await getCategories()
            this.categories=res.data
        },
        async fetchHouseListData(){
            const res = await getHouselist({page:this.currentPage++})
            this.houseList.push(...res.data)
        }
    }
})

export default useHomeStore