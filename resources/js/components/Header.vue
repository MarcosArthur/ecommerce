<template>
  <nav class="navbar bg-primary navbar-expand-lg bg-body-tertiary mb-5">

    <div class="container-fluid">
    <a class="navbar-brand" href="#">ECOMMERCE</a>
  
      <div class="d-flex" role="search" v-if="$AccessToken">
        <button class="btn btn-outline-success me-1"> Seja bem-vindo(a) {{ $UserName  }}</button>
          <router-link to="/Orders" class="btn btn-outline-success me-1">Pedidos</router-link>
          <button class="btn btn-outline-success" type="submit" @click="logout()">Sair</button>
      </div>

      <div v-else>
        <router-link to="/Auth" class="btn btn-outline-success me-1">Login</router-link>
      </div>
  </div>
  </nav>
</template>

<script>
import Auth from '../services/Auth.js'
export default {
  mounted() {
    if (this.$AccessToken) {
      this.$store.dispatch('fetchUser')
    }
  },
  methods: {
    logout() {
      Auth.Logout()
        .then(response => {
          if ('success' in response.data) {
         
            this.$router.push('/')
            this.$store.dispatch('logout')
          }
        })
    }
  },
  computed: {
    $AccessToken() {
      return this.$store.getters.accessToken
    },
    $UserName() {
      return this.$store.getters.getUserName
    }
  }
}

</script>