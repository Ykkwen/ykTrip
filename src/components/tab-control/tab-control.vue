<template>
    <div class="tab-control">
        <template v-for="(item, index) in titles" :key="index">
            <div class="item" :class="{ active: index === currentIndex }" @click="clickItem(index)">
                {{ item }}
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    titles: {
        type: Array,
        default: () => []
    }
})
const emit = defineEmits(['tapClick'])

const currentIndex = ref(0)
const clickItem = (index) => {
    currentIndex.value = index
    console.log(currentIndex.value)
    emit('tapClick',index)
}
const changeCurrentIndex = (index)=>{
    currentIndex.value = index
}
defineExpose({
    currentIndex,
    changeCurrentIndex
})
</script>

<style lang="less" scoped>
.tab-control {
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #fff;
    .item {
        flex: 1;
    }

    .active {
        color: var(--primary-color);
        font-weight: 700;
        border-bottom: 3px solid var(--primary-color);
    }
}
</style>