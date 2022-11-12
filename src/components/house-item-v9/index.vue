<template>
  <div class="item-v9">
    <div class="item">
          <img :src="item.data.image.url" alt="">
          <div class="pro-top">
            <p class="pro-label">优选PRO</p>
          </div>

          <div class="pro-bottom">
            <p class="pro-houseInfo">
              {{item.data.summaryText}}
            </p>
            <p class="pro-title">
              {{item.data.houseName}}
            </p>
            <p class="pro-star">
              <span class="star">
                <van-icon name="star" v-for="(i) in 5" />
              </span>
              <span class="price">¥{{item.data.productPrice}}</span>
            </p>
          </div>
        </div>
  </div>
</template>

<script setup>
    defineProps({
        item:{
            type:Object,
            default:()=>({})
        }
    })
</script>

<style lang="less" scoped>

.item {
    width: 167px;
    height: 223px;
    border-radius: 6px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      position: absolute;
      width: 167px;
      height: 223px;
      border-radius: 6px;
    }

    .pro-top {
      position: relative;
      z-index: 1;

      .pro-label {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: #fff;
        padding: 0 6px;
        color: #3f4953;
        font-size: 10px;
        border-radius: 7px;
      }
    }

    .pro-bottom {
      z-index: 1;
      background-image: linear-gradient(179deg, rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, .64));
      color: #fff;
      font-size: 10px;
      padding: 10px 10px 0;

      .pro-houseInfo {
        margin-bottom: 4px;
      }

      .pro-title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        margin-bottom: 6px;
        font-size: 14px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
      }

      .pro-star {
        display: flex;
        justify-content: space-between;

        .star {
          line-height: 20px;
        }

        .price {
          font-size: 18px;
          margin-bottom: 5px;
        }
      }
    }
  }
</style>