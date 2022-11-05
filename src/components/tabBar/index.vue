<template>
  <div class="tabBar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabBarData" :key="index">
        <van-tabbar-item :to="item.path">
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
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const currentIndex = ref(0)
const itemClick = (index,item)=>{
  currentIndex.value=index
  router.push(item.path)
}
</script>

<style lang="less" scoped>
// .tabBar {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 50px;
//   display: flex;
//   border-top: 1px solid #aaa;

//   // .tabBar-item {
//   //   flex: 1;
//   //   display: flex;
//   //   flex-direction: column;
//   //   justify-content: center;
//   //   align-items: center;

//   //   &.active{
//   //     color: var(--primary-color);
//   //   }

//   //   .text {
//   //     font-size: 12px;
//   //   }
//   //   img {
//   //     width: 36px;
//   //   }
//   // }
// }
</style>