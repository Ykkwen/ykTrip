<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        shape="round"
        show-action
        @cancel="onCancel"
        placeholder="输入城市/地区/位置"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allcities" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
      <div class="content">
        <template v-for="(value,key,index) in allcities" :key="index">
          <div>
            <CityGroup v-show="tabActive===key" :groupData="value"/>
          </div>
        </template>
        <!-- <CityGroup :groupData="currentGroup"/>
         -->
      </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

import CityGroup from './components/city-group.vue'

const router = useRouter();

//搜索框功能
const searchValue = ref("");
const onCancel = () => {
  router.back();
};

const tabActive = ref();

//城市展示功能
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allcities } = storeToRefs(cityStore);
const currentGroup = computed(()=>allcities.value[tabActive.value]) 



</script>

<style lang="less" scoped>
.city{
  //方案一:设置top
  // .top{
  //   position: fixed;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  // }
  // .content{
  //   margin-top: 100px;
  // }

  //方案二:布局滚动
  .top{
    position: relative;
    z-index: 9;
  }
  .content{
    height: calc(100vh - 100px);
    overflow-y: auto;
  }
}
</style>