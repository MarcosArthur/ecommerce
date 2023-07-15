<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-5" data-bs-theme="dark">

    <div class="container-fluid">
      <a class="navbar-brand" href="#">ECOMMERCE</a>

      <div class="d-flex" role="search" v-if="accessToken">
        <button class="btn btn-outline-success me-1"> Seja bem-vindo(a) {{ userName }}</button>
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
import { useAuthStore } from '@/store/Auth'
import { useRouter } from 'vue-router';
import Auth from '@/services/Auth.js'

const store = useAuthStore()
const router = useRouter()

onMounted(() => {
  if (accessToken.value) {
    store.fetchUser()
  }
})

function logout() {
  Auth.Logout()
    .then(response => {
      if ('success' in response.data) {
        router.push('/')
        store.setToken({})
      }
    })
}

const accessToken = computed(() => {
  return store.token?.access_token
})

const userName = computed(() => {
  return store.user?.name
})

</script>