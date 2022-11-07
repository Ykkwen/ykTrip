<template>
  <div class="categories">
    <template v-for="(item) in categories" :key="item.id">
        <div class="item">
            <img :src="item.pictureUrl" alt="">
            <div>{{item.title}}</div>
        </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'
const HomeStore = useHomeStore()

const {categories} = storeToRefs(HomeStore)
</script>

<style lang="less" scoped>
.categories{
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    height: 80px;
    padding: 0 10px;
    margin-top: 15px;
    &::-webkit-scrollbar{
        display: none;
    }
    .item{
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 70px;

        img{
            width: 32px;
            height: 32px;
        }
    }
}
</style>