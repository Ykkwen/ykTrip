<template>
  <HomeNavBar />
  <HomeSearchBox :hotSuggests="hotSuggests"/>
  <HomeCategories />
  <HomeContent @getNewHouseList="getNewHouseList"/>
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategories from './components/home-categories.vue';
import HomeContent from './components/home-content.vue';

import useHomeStore from '@/stores/modules/home'
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
homeStore.fetchgetHotSuggestsData()
homeStore.fetchCategoriesData()

const getNewHouseList = (page)=>{
  homeStore.fetchHouseListData({page})
}
getNewHouseList(1)

</script>

<style lang="less" scoped>

</style>