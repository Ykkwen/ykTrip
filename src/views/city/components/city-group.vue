<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData?.hotCities" :key="index">
          <div class="city" @click="cityClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>
      <template v-for="(group, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, index) in group.cities" :key="index">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useRouter} from 'vue-router'
import useCityStore from '@/stores/modules/city'

const router = useRouter()

//定义props
const props = defineProps({
  groupData: {
    type: Object,
    defalut: () => ({}),
  },
});

//动态加载索引
const indexList = computed(()=>{
    const list = props.groupData.cities.map((item)=>item.group)
    list.unshift("#")
    return list
})

const cityClick = (city)=>{
    //选中当前城市
    const cityStore = useCityStore()
    cityStore.currentCity = city
    //回退路由
    router.back()
}
</script>

<style lang="less" scoped>
.list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-right: 25px;
}
.city {
  width: 70px;
  height: 28px;
  margin: 5px;
  border-radius: 14px;
  color: #000;
  text-align: center;
  line-height: 28px;
  background-color: #fff4ec;
}
</style>