<template>
  <HomeNavBar />
  <HomeTopSearch />
  <HomeSearchBox :hotSuggests="hotSuggests"/>
  <HomeCategories />
  <HomeContent />
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategories from './components/home-categories.vue';
import HomeContent from './components/home-content.vue';
import HomeTopSearch from './components/home-top-search.vue';


import useHomeStore from '@/stores/modules/home'
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
homeStore.fetchgetHotSuggestsData()
homeStore.fetchCategoriesData()

</script>

<style lang="less" scoped>

</style>