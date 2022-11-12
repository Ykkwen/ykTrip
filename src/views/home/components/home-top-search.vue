<template>
  <div class="search">
    <div class="dateInfo">
      <span>住</span>
    </div>
    <van-field v-model="keyword" placeholder="" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const keyword = ref("")

</script>

<style lang="less" scoped>

</style>