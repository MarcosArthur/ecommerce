<template>
    <div class="container">
        <div class="card mb-1" >
            <div class="card-body">
                <h5 class="card-title">Pedido N° {{ order.id }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Total {{ $filters.currencyBRL(order.total) }}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Realizado {{ order.created_at }}</h6>
                
                <Item v-for="item in order.items" :key="item.id" :item="item"/>
            
            </div>
        </div>

       
    </div>
</template>

<script setup>

import Item from './Item.vue'

defineProps({
    order: {
        type: Object,
        required: true
    }
});


</script>