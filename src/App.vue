<script setup>
    import TabBar from '@/components/tabBar/index.vue'
    import {useRoute} from 'vue-router'
    import Loading from './components/loading/loading.vue';
    const route = useRoute()
</script>

<template>
    <div class="app">
        <!-- 推荐写法 -->
        <!-- 动态组件 -->
        <router-view v-slot="props">
            <keep-alive>
                <component :is="props.Component"></component>
            </keep-alive>
        </router-view>
    </div>
    <TabBar v-if="!route.meta.hideTabBar"/>
    <Loading/>
</template>

<style scoped>

</style>
