<template>
    <div class="d-flex justify-content-between align-items-center">
        <div> 
            {{ product.name }} - <strong> {{ $filters.currencyBRL(product.price) }}</strong>
            <p>{{ product.description }}</p>
        </div>

        <button class="btn btn-sm btn-primary" @click="addItem(product)">
            +
        </button>
    </div>
</template>

<script setup>
import { useCardStore } from '@/store/Card'

const store = useCardStore()

const props = defineProps({
    product: {
        type: Object
    }
})

function addItem(item) {
    store.addItem(item)
}
</script>

