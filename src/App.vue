<script setup>
    import TabBar from '@/components/tabBar/index.vue'
    import {useRoute} from 'vue-router'
    const route = useRoute()
</script>

<template>
    <div class="app">
        <router-view></router-view>
    </div>
    <TabBar v-if="!route.meta.hideTabBar"/>
</template>

<style scoped>

</style>
