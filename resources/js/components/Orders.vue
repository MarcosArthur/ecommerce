<template>
    <div class="container">
        <div class="card mb-1" v-for="order in orders" :key="order.id">
            <div class="card-body">
                <h5 class="card-title">Pedido N° {{ order.id }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Total {{ $filters.currencyBRL(order.total) }}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Realizado {{ order.created_at }}</h6>
                <p class="card-text" v-if="order.items">Items do pedido</p>
                <div v-for="item in order.items" :key="item.id">
                    <p>
                        {{ item.quantity }} x
                        {{ item.product.name }}
                        <sup>Valor unitário {{ $filters.currencyBRL(item.price) }}</sup>
                        <br>
                        Total: {{ $filters.currencyBRL(price(item.price, item.quantity)) }}
                    </p>
                </div>
            </div>
        </div>

        <Mensagem />

    </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useOrdersStore } from "@/store/Orders"

const store = useOrdersStore()

onBeforeMount(() => {
    store.fetchOrders()
})

const orders = computed(() => {
    return store.orders
})

function price(price, quantity) {
    return (price * quantity)
}

</script>