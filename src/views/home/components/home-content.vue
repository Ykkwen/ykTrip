<template>
  <div class="content">
    <h2 class="title">热门推荐</h2>
    <div class="list">
      <template v-for="(item) in houseList" :key="item.houseId">
        <houseItemV9 v-if="item.discoveryContentType === 9" :item="item" @click.native="houseItemClick(item.data.houseId)"/>
        <houseItemV3 v-else-if="item.discoveryContentType === 3" :item = "item" @click.native="houseItemClick(item.data.houseId)"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '../../../stores/modules/home';
import houseItemV9 from '../../../components/house-item-v9/index.vue';
import houseItemV3 from '../../../components/house-item-v3/index.vue';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)
const router = useRouter()
const houseItemClick = (houseId)=>{
    router.push(`/houseInfo/${houseId}`)
}
</script>

<style lang="less" scoped>
.title {
  margin-left: 12px;
}
.content{
  height:100px;
}
.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>