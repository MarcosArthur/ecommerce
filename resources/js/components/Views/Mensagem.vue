<template>   
    <div class="alert alert-dismissible show fade mt-2" :class="typeMessage" role="alert" v-for="(mensagem,index) in data" :key="mensagem">
        {{ data[index] }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" @click="close()" aria-label="Close"></button>
    </div>
</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

function close() {
  store.commit('CLEAR_MESSAGES')
}

const data = computed(() => {
     return store.getters.allMessagens
})

const typeMessage = computed(() => {
    return store.getters.typeMessage
})


</script>