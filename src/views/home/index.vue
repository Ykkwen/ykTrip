<template>
  <div class="home" ref="HomeRef">
    <HomeNavBar />
    <HomeSearchBox />
    <HomeCategories />
    <HomeTopSearch v-if="showTopSearch" />
    <HomeContent />
  </div>

</template>

<script>
export default { name: "home" }
</script>
<script setup>
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategories from './components/home-categories.vue';
import HomeContent from './components/home-content.vue';
import HomeTopSearch from './components/home-top-search.vue';


import useHomeStore from '@/stores/modules/home'
import { ref, watch, computed, onActivated } from 'vue';
import { storeToRefs } from 'pinia';
import useScroll from '@/hooks/useScroll';

const homeStore = useHomeStore()
homeStore.fetchgetHotSuggestsData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

const { isReachBottom, scrollTop } = useScroll()

watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})

const showTopSearch = computed(() => {
  return scrollTop.value >= 400
})
const HomeRef =ref()

onActivated(()=>{
  HomeRef.value?.scrollTo({
    top:scrollTop.value
  })
  console.log(HomeRef.value);
})
</script>

<style lang="less" scoped>

</style>