<template>
    <div id="app">
        <Header v-if="$isRouteAuth" />
        <router-view></router-view>
    </div>
</template>
<script setup>

import { computed } from 'vue'
import { useRouter } from 'vue-router'

import Header from './Views/Header.vue'

const router = useRouter()

const $isRouteAuth = computed(() => {
    return router.currentRoute.value.name != 'auth'
})

</script>