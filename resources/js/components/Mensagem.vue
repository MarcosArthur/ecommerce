<template>
   
    <div class="alert alert-dismissible fade show mt-2" :class="type" role="alert" v-for="(mensagem,index) in data" :key="mensagem">
        {{ data[index] }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script>
export default {
    props: {
        data: [],
        type: ""
    }
}

</script>