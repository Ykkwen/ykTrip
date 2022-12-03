<template>
    <div class="detail" ref="detailRef">
        <tabControlVue ref="tabControlRef" :titles="names" v-if="showTabControl" @tap-click="tapClick"/>
        <van-nav-bar title="详情页" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div class="main" v-if="mainPart" v-memo="[mainPart]">
            <DetailSwiper name="展示" :ref="getSectionRef" :swiperData="mainPart.topModule.housePicture.housePics"/>
            <infoVue name="描述" :ref="getSectionRef" :top-info="mainPart.topModule"/>
            <facilityVue name="设施" :ref="getSectionRef"/>
            <facilityVue name="设施2" :ref="getSectionRef"/>
            <facilityVue name="设施3" :ref="getSectionRef"/>
            <mapVue name="地图" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
        </div>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getHouseInfo } from '@/services';
import { computed, ref, watch } from 'vue';
import DetailSwiper from './components/swiper.vue';
import infoVue from './components/info.vue';
import facilityVue from './components/facility.vue';
import mapVue from './components/map.vue';
import tabControlVue from '../../components/tab-control/tab-control.vue';
import useScroll from '@/hooks/useScroll.js'

const route = useRoute()
const router = useRouter()
const detailInfo = ref({})
const mainPart = computed(()=>{return detailInfo.value?.mainPart})

const currentHouseId = route.params.id
const onClickLeft = () => {
    router.back()
}
getHouseInfo(currentHouseId).then(res => {
    detailInfo.value = res.data
})

const detailRef = ref()
const {scrollTop,isReachBottom} = useScroll(detailRef)

const showTabControl = computed(()=>{
    return scrollTop.value>300
})

// const infoRef = ref()
const sectionEls = ref({})
const names = computed(()=>{
    return Object.keys(sectionEls.value)
})
const getSectionRef = (value)=>{
    if(!value) return //当页面销毁时也会触发ref的这个函数,添加判断即可
    const name = value.$el.getAttribute("name")
    sectionEls.value[name] = value.$el
    // console.log(value.$el)
}

let isClick = false
let currentDistance = -1
const tapClick = (index)=>{
    isClick = true
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    let distance = el.offsetTop-44
    currentDistance = distance
    detailRef.value.scrollTo({
        top:distance,
        behavior:"smooth"
    })
}
//监听滚动,使tabcontrol的currentIndex随滚动位置变化

//!!!引发问题: 当点击tabcontrol的索引时,跳转到对应的组件时,也会监听滚动,导致上方索引跳转不流畅
const tabControlRef = ref()
watch(scrollTop,(newValue)=>{
    if(currentDistance === newValue) isClick = false
    if(isClick) return //解决点击跳转时监听的问题
    const offsetTopArray = Object.values(sectionEls.value).map(el => el.offsetTop)
    let index = offsetTopArray.length-1
    for(let i in offsetTopArray){
        if(newValue+44<offsetTopArray[i]){
            index = i-1
            break
        }
    }
    if(isReachBottom.value){
        index = offsetTopArray.length-1
    }
    tabControlRef?.value?.changeCurrentIndex(index)
})
</script>
<style lang="less" scoped>
.detail{
    height: 100vh;
    overflow-y: auto;
}
</style>