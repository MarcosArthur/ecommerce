<template>
    <div id="app">
        <Header v-if="$isRouteAuth" />
        <Transition>
            <router-view></router-view>
        </Transition>
    </div>
</template>
<script setup>

import { computed } from "vue";
import { useRouter } from "vue-router";
import Header from "./Views/Header.vue";

const router = useRouter();

const $isRouteAuth = computed(() => {
    return router.currentRoute.value.name != "auth";
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
