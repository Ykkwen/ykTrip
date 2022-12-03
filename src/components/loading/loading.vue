<template>
    <div class="loading" v-if="isLoading" @click="isLoading = false">
        <div class="bg">
            <img src="../../assets/images/home/full-screen-loading.gif" alt="">
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import useMainStore from '../../stores/modules/main';
const mainStore = useMainStore()
const {isLoading} = storeToRefs(mainStore)
</script>

<style scoped lang="less">
.loading {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);

    .bg {
        width: 106px;
        height: 106px;
        background: url(../..//assets/images/home/loading-bg.png) 0 5px / 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 70px;
            height: 70px;
        }
    }

}
</style>
