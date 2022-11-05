<template>
  <div class="banner">
    <img src="@/assets/images/home/banner1.png" alt="">
  </div>
  <div class="location">
    <div class="city" @click="cityClick">{{currentCity.cityName}}</div>
    <div class="mycity" @click="myCityClick">
      <span class="text">我的位置</span>
      <img src="@/assets/images/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {useRouter} from 'vue-router'
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';

const router = useRouter()
const cityClick = ()=>{
    router.push('/city')
}

const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)

const myCityClick = ()=>{
    navigator.geolocation.getCurrentPosition((res)=>{
        console.log("获取位置成功",res);
        axios.get("api/reverse_geocoding/v3/",{
            params:{
                output:"json",
                location:res.coords.latitude+','+res.coords.longitude,
                coordtype:"wgs84ll",
                ak:"isRdorT6RbCeFYKncS1BSx06E9fxudeD"
            }
        }).then((res)=>{
            console.log(res.data.result.addressComponent.city)
        })
    },err=>{
        console.log("获取位置失败",err);
    })
}



</script>

<style lang="less" scoped>
.banner{
  img{
    height: 130px;
    width: 100%;
  }
}
.location{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city{
    flex: 1;
    font-size: 15px;
    color: #333;
  }

  .mycity{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 77px;
    .text{
      position: relative;
      top: 1px;
      font-size: 12px;
    }
    img{
      margin-left: 3px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>