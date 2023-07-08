<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-5" data-bs-theme="dark">

    <div class="container-fluid">
      <a class="navbar-brand" href="#">ECOMMERCE</a>

      <div class="d-flex" role="search" v-if="$AccessToken">
        <button class="btn btn-outline-success me-1"> Seja bem-vindo(a) {{ $UserName }}</button>
        <router-link to="/Orders" class="btn btn-outline-success me-1">Pedidos</router-link>
        <button class="btn btn-outline-success" type="submit" @click="logout()">Sair</button>
      </div>

      <div v-else>
        <router-link to="/Auth" class="btn btn-outline-success me-1">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import Auth from '@/services/Auth.js'

const store = useStore()
const router = useRouter()

onMounted(() => {
  if ($AccessToken) store.dispatch('fetchUser')
})

function logout() {
  Auth.Logout()
    .then(response => {
      if ('success' in response.data) {
        router.push('/')
        store.dispatch('logout')
      }
    })
}

const $AccessToken = computed(() => {
  return store.getters.accessToken
})

const $UserName = computed(() => {
  return store.getters.getUserName
})

</script>