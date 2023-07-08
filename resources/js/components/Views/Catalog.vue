<template>
    <div class="col-8">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(catalog, index) in $AllCatalog" :key="catalog.id">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#${catalog.id}`"
            aria-expanded="false" :aria-controls="`#${catalog.id}`">
            {{ catalog.name }}
          </button>
        </h2>
        <div :id="catalog.id" class="accordion-collapse collapse" :class="{ show: index == 0 }"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <Product v-for="product in catalog.product" :product="product" :key="product.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Product from './Product.vue'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
    store.dispatch('fecthCatalog')
})

const $AllCatalog = computed(() => {
    return store.getters.allCatalog
})

</script>