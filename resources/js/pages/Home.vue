<template>
  <div class="container">
    <div class="row">
      <Catalog />
      <Card />
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import Catalog from '../components/Catalog.vue'
import Card from '../components/Card.vue'
import Slide from '../components/Slide.vue'

onMounted(() => {
  document.title = "Home"
})


</script>