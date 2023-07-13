<template>
    <div class="container">
        <div class="card mb-1" v-for="order in orders" :key="order.id">
            <div class="card-body">
                <h5 class="card-title">Pedido N° {{ order.id }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Total {{ order.total }}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Feito {{ order.created_at }}</h6>
                <p class="card-text">Items do pedido</p>
                <div v-for="item in order.items" :key="item.id">
                    <p>
                        {{ item.quantity }} x
                        {{ item.product.name }}
                        <sup>Valor unitario {{ $filters.currencyBRL(item.price) }}</sup>
                        <br>
                        Valor total items: {{ $filters.currencyBRL(price(item.price, item.quantity)) }}
                    </p>
                </div>
            </div>
        </div>


        <Mensagem />

    </div>
</template>

<script setup>
import { computed, onBeforeMount, watch } from 'vue'
import { useOrdersStore } from "@/store/Orders"
import { useMessageStore } from "@/store/Message"

const store = useOrdersStore()
const messageStore = useMessageStore()

onBeforeMount(() => {
    store.fetchOrders()
})

const orders = computed(() => {
    return store.orders
})

watch(orders, (newValue) => {
    if (!newValue.length) {
        messageStore.setMessage({ data: ['Nenhum pedido encontrado'] })
    }
}, {immediate: true})

function price(price, quantity) {
    return (price * quantity)
}

</script>