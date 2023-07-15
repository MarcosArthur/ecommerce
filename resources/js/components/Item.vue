<template>
    <div v-if="item">
        <p class="card-text">Items do pedido</p>
        {{ item.quantity }} x
        {{ item.product.name }}
        <sup>Valor unitário {{ $filters.currencyBRL(item.price) }}</sup>
        <br>
        Total: {{ $filters.currencyBRL(price(item.price, item.quantity)) }}
    </div>
</template>

<script setup>

defineProps({
    item: {
        type: Object,
        required: true,
        default: false
    }
})

function price(price, quantity) {
    return (price * quantity)
}

</script>