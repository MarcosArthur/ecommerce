<template>
    <div class="container">
        <div class="card mb-1" v-for="order in AllOrders" :key="order.id">
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
import { useStore } from 'vuex'

const store = useStore()

onBeforeMount(() => {
    store.dispatch('fetchOrders')
})

const AllOrders = computed(() => {
    return store.getters.allOrders
})

watch(AllOrders, (newValue) => {
    if (!newValue.length) {
        store.dispatch('setMessagem', { data: ['Nenhum pedido encontrado'] })
    }
}, {immediate: true})

function price(price, quantity) {
    return (price * quantity)
}

</script>