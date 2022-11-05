<template>
  <div class="city">
    <van-search 
      v-model="searchValue"
      shape="round" 
      show-action
      @cancel="onCancel"
      placeholder="输入城市/地区/位置" />
  </div>
  <van-tabs v-model:active="tabActive" color="#ff9854">
    <template v-for="(value,key,index) in allcities" :key="index">
      <van-tab :title="value.title"></van-tab>
    </template>
</van-tabs>
</template>

<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router'
import useCityStore from '@/stores/modules/city'
import {storeToRefs} from 'pinia'

const router = useRouter()

//搜索框功能
const searchValue = ref('')
const onCancel = ()=>{
  router.back()
}

const tabActive = ref()

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const {allcities} = storeToRefs(cityStore)
</script>

<style lang="less" scoped>

</style>