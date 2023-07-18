<template>
    <div id="app">
        <Header v-if="$isRouteAuth" />
        <router-view v-slot="{ Component }">
            <transition name="links">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
<script setup>

import { computed } from "vue";
import { useRouter } from "vue-router";
import Header from "./components/Header.vue";

const router = useRouter();

const $isRouteAuth = computed(() => {
    return router.currentRoute.value.name != "auth";
});
</script>

<style>
.links-enter-active,
.links-leave-active {
    transition: opacity 0.5s ease;
}

.links-enter-from,
.links-leave-to {
    opacity: 0;
}

.router-link-exact-active.btn {
    background-color: #198754;
    color:white;
    cursor: pointer;
}
</style>