<template>
    <Order v-for="order in orders" :key="order.id" :order="order"/>
    <Mensagem />
</template>

<script setup>

import Order from "../components/Order.vue"
import { computed, onBeforeMount } from 'vue'
import { useOrdersStore } from "@/store/Orders"

const store = useOrdersStore()

onBeforeMount(() => {
    store.fetchOrders()
})

const orders = computed(() => {
    return store.orders
})

</script>