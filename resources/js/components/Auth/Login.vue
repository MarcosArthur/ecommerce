<template>
  <section class="vh-100  bg-success">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong rounded-1">
            <div class="card-body p-5 text-center">
              <form @submit.prevent="login()">
                <h3 class="mb-5">Login</h3>

                <div class="form-outline mb-4 d-flex flex-column">
                  <label class="form-label align-self-start">Email</label>
                  <input type="email" v-model="state.form.email" required class="form-control form-control-lg" />

                </div>

                <div class="form-outline mb-4 d-flex flex-column">
                  <label class="form-label align-self-start">Senha</label>
                  <input type="password" v-model="state.form.password" required class="form-control form-control-lg" />

                </div>


                <input class="btn btn-success btn-lg btn-block" type="submit" value="Logar">

                <Mensagem />

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../store/Auth'
import { useMessageStore }from "../../store/Message"
import Auth from '../../services/Auth.js'


const router = useRouter()

const store = useAuthStore()
const messageStore = useMessageStore()
const state = reactive({
  form: {
    email: ref(''),
    password: ref('')
  }
})


function login() {
  Auth.Login(state.form)
    .then(response => {
      if (response && response.data) {
        let data = response.data.data
        store.setToken(data)
        router.push('/')
      } else {
        messageStore.setMessage({data: response?.response?.data?.errors})
      }
    }).catch(e => {
      messageStore.setMessage({data: e})
    })
}


</script>