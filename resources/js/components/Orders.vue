<template>
    <Header />
    <div class="container">
        <div class="card mb-1" v-for="order in $AllOrders" :key="order.id">
            <div class="card-body">
                <h5 class="card-title">Pedido N° {{ order.id }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Total {{ order.total }}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Feito {{ order.created_at }}</h6>
                <p class="card-text">Items do pedido</p>
                <div v-for="item in order.items" :key="item.id">
                    <p>
                        {{ item.quantity }}x
                        {{ item.product.name }}
                        <sup>Valor unitario R$ {{ item.price }}</sup>
                        <br>
                        Valor total items: R$ {{ item.price * item.quantity }}
                    </p>
                </div>
            </div>
        </div>

        <div v-if="!$AllOrders.length">
            <div class="alert alert-dark" role="alert">
                Nenhum pedido realizado.
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header.vue'
export default {
    components: {
        Header
    },
    mounted() {
        this.$store.dispatch('fetchOrders')
    },
    computed: {
        $AllOrders() {
            return this.$store.getters.allOrders
        }
    }
}

</script>