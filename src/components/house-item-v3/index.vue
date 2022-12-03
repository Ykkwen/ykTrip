<template>
    <div class="item-v3">
        <div class="item">
            <img :src="item.data.image.url" alt="">
            <div class="pro-top">
                <p class="pro-label">优选PRO</p>
            </div>

            <div class="pro-bottom">
                <p class="pro-location">
                    <van-icon name="location" /> {{ item.data.location }}
                </p>
                <p class="pro-title">
                    {{ item.data.houseName }}
                </p>
                <p class="pro-summaryText">
                <div class="summaryText">
                    {{ item.data.summaryText }}
                </div>
                <div class="price">
                    ¥{{ item.data.productPrice }}
                    <div class="priceTipBadge" v-if="item.data.priceTipBadge">
                        <van-icon name="volume" /> {{ item.data.priceTipBadge.text }}
                    </div>
                </div>

                </p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
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
        background-color: white;
        color: #333333;
        font-size: 10px;
        padding: 10px 10px 0;

        .pro-location {
            color: #666666;
            margin-bottom: 3px;
        }

        .pro-title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            margin-bottom: 2px;
            font-size: 14px;
            overflow: hidden;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
        }

        .pro-summaryText {
            color: #666666;
        }

        .price {
            font-size: 14px;
            margin-top: 5px;
            margin-bottom: 5px;
            color: var(--primary-color);
        }

        .priceTipBadge {
            border-radius: 8px;
            background-image: linear-gradient(#FF6666, #FF9F9F);
            color: #fff;
            display: inline-block;
            font-size: 10px;
            padding: 1px 8px;
            margin-left: 5px;
        }
    }

}
</style>