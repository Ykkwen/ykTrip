<template>
  <HomeNavBar />
  <div class="banner">
    <img src="@/assets/images/home/banner1.png" alt="">
  </div>
  <div class="location">
    <div class="city">北京</div>
    <div class="mycity">
      <span class="text">我的位置</span>
      <img src="@/assets/images/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue';
</script>

<style lang="less" scoped>
.banner{
  img{
    height: 130px;
    width: 100%;
  }
}
.location{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city{
    flex: 1;
  }

  .mycity{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 77px;
    .text{
      position: relative;
      top: 1px;
      font-size: 12px;
    }
    img{
      margin-left: 3px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>