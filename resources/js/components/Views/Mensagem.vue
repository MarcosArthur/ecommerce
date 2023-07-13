<template>   
    <div class="alert alert-dismissible show fade mt-2" :class="typeMessage" role="alert" v-for="(mensagem,index) in data" :key="mensagem">
        {{ data[index] }} 
        <button type="button" class="btn-close" data-bs-dismiss="alert" @click="close()" aria-label="Close"></button>
    </div>
</template>

<script setup>

import { computed, onUnmounted } from 'vue'
import {useMessageStore} from "../../store/Message"

const store = useMessageStore()

onUnmounted(() => {
    close()
})

function close() {
    store.setMessage({data: {}})
}

const data = computed(() => {
    return store.message.data
})

const typeMessage = computed(() => {
    return store.message.type
})


</script>