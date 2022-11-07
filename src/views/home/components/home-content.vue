<template>
  <div class="content">
    <h2 class="title">热门推荐</h2>
    <div class="list">
      <template v-for="(item) in houseList" :key="item.houseId">
        <div class="item">
          {{item.houseId}}
          <img :src="item.data.image.url" alt="">
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref,defineEmits } from 'vue';
import useHomeStore from '../../../stores/modules/home';

const homeStore = useHomeStore()
const {houseList} = storeToRefs(homeStore)

const emit = defineEmits(['getNewHouseList'])
const currentPage = ref(1)

const getNewHouseData = ()=>{
  const scrollTop = document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  if(scrollTop+clientHeight>=scrollHeight-1){
    console.log("到达底部")
    currentPage.value++
    emit('getNewHouseList',currentPage.value)
  }
}
window.addEventListener("scroll",getNewHouseData)

</script>

<style lang="less" scoped>
.title{
  margin-left: 12px;
}
.list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  .item{
    width: 167px;
    height: 223px;
    border-radius: 6px;
    margin-top: 8px;
    img{
      width: 167px;
      height: 223px;
      border-radius: 6px;
    }
}
}

</style>