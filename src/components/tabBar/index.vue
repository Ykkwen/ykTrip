<template>
  <div class="tabBar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabBarData" :key="index">
        <van-tabbar-item replace :to="item.path">
          <template #icon>
            <img v-if="currentIndex!==index" :src="getAssetsUrl(item.image)" alt="" />
            <img v-else :src="getAssetsUrl(item.activeImage)" alt="" />
          </template>
          <span class="text">{{item.title}}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabbar.js";
import {getAssetsUrl} from "@/utils/load_assets.js"
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const currentIndex = ref(0)
watch(route,(newValue)=>{
  const index = tabBarData.findIndex((item)=>{ return item.path === newValue.path})
  currentIndex.value = index
})

</script>

<style lang="less" scoped>

</style>