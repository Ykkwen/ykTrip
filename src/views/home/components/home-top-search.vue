<template>
  <div class="search">
    <div class="dateInfo">
      <div class="item-start">
        <span class="name">住</span>
        <span class="data">{{startDateStr}}</span>
      </div>
      <div class="item-end">
        <span class="name">离</span>
        <span class="data">{{endDateStr}}</span>
      </div>
    </div>
    <div class="content">
      <van-field v-model="keyword" placeholder="关键字/民宿/位置" />
    </div>
    <div class="right">
      <van-icon name="search" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref,computed } from 'vue';
import useMainStore from '../../../stores/modules/main'
import {formatMonthDay,getDiffDays} from '@/utils/format_date.js';
const keyword = ref("")
const mainStore = useMainStore()
const {startDate,endDate} = storeToRefs(mainStore)
const startDateStr = computed(()=>formatMonthDay(startDate.value,"MM.DD"));
const endDateStr = computed(()=>formatMonthDay(endDate.value,"MM.DD"));
const stayCount = ref(getDiffDays(startDate.value, endDate.value));
</script>

<style lang="less" scoped>
.search{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  .dateInfo{
    display: flex;
    flex-direction: column;
  }
  .van-icon-search:before {
    content: "\e710";
    font-size: 26px;
  }
}
</style>