<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <template v-for="(item, index) in swiperData">
                <van-swipe-item class="item">
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <template v-for="(value, key, index) in swiperGroup" :key="index">
                        <span class="item" 
                            :class="{ active: swiperData[active]?.enumPictureCategory == key }">
                            {{ getName(value[0].title) }}
                            <span v-if="swiperData[active]?.enumPictureCategory == key">{{ getCategoryIndex(swiperData[active]) }}/{{value.length}}</span>
                        </span>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    swiperData: {
        type: Array,
        default: () => ([])
    }
})
const swiperData = props.swiperData
//对图片进行分类
const swiperGroup = {}
for (const item of swiperData) {
    if (item.enumPictureCategory in swiperGroup) {
        swiperGroup[item.enumPictureCategory].push(item)
    }
    else {
        swiperGroup[item.enumPictureCategory] = [item]
    }
}
const nameReg = /【(.*?)】/i
const getName = (name) => {
    // return name.replace("：","").replace("】","").replace("【","")
    const result = nameReg.exec(name)
    return result[1]
}

const getCategoryIndex = (item)=>{
    // console.log(item.enumPictureCategory)
    const valueArray = swiperGroup[item?.enumPictureCategory]
    const index = valueArray.findIndex(data => data===item)+1
    return index
}
</script>
<style lang="less">
.my-swipe {
    .item {
        img {
            width: 100%;
        }
    }

    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        color: #fff;

        .item {
            margin: 0 3px;

            &.active {
                background-color: #fff;
                color: #000;
                padding: 3px;
                border-radius: 10px;
            }
        }
    }
}
</style>