<template>
  <div class="content">
    <h2 class="title">热门推荐</h2>
    <div class="list">
      <template v-for="(item) in houseList" :key="item.houseId">
        <houseItemV9 v-if="item.discoveryContentType === 9" :item="item" />
        <houseItemV3 v-else-if="item.discoveryContentType === 3" :item = "item"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, defineEmits, watch } from 'vue';
import useHomeStore from '../../../stores/modules/home';
import houseItemV9 from '../../../components/house-item-v9/index.vue';
import houseItemV3 from '../../../components/house-item-v3/index.vue';
import useScroll from '../../../hooks/useScroll';

const homeStore = useHomeStore()
const { houseList,currentPage } = storeToRefs(homeStore)

const emit = defineEmits(['getNewHouseList'])

const {isReachBottom} = useScroll()

watch(isReachBottom,(newvalue)=>{
  if(newvalue){
    homeStore.fetchHouseListData().then(()=>{
      isReachBottom.value = false
    })
  }
})
</script>

<style lang="less" scoped>
.title {
  margin-left: 12px;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>