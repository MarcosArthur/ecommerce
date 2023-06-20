<template>
  <Header />
  <div class="container">
    <div class="row">
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
                <div v-for="product in catalog.product" :key="product.id"
                  class="d-flex justify-content-between align-items-center">
                  <div>
                    {{ product.name }} - <strong> R$ {{ product.price }}</strong>
                    <p>{{ product.description }}</p>
                  </div>

                  <button class="btn btn-sm btn-primary" @click="addItem(product)">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <ul class="list-group">
          <ul class="list-group">
            <li class="list-group-item text-center" v-if="!$AllCard.length">Carrinho Vazio</li>

            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in $AllCard"
              :key="item.id">

              <p>{{ item.quantity }}x {{ item.name }} <sup><strong>R$ {{ item.price }}</strong></sup></p>

              <button class="btn btn-sm btn-danger top-0 end-1" @click="remove(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3"
                  viewBox="0 0 16 16">
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>

            </li>

            <li class="list-group-item" v-if="$AllCard.length">Total: <span class="fs-4"> R$ {{ $sumCard }}</span> </li>

            <a href="#" class="list-group-item list-group-item-action active" v-if="$sumCard != 0 && $AccessToken"  @click="fechar()">
              <div class="d-flex w-100 justify-content-between">
                Fechar Pedido
              </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action active" v-else-if="$sumCard != 0">
              <div class="d-flex w-100 justify-content-between">
                <router-link to="/Auth" class="text-bg-primary text-decoration-none ">Fechar Pedido </router-link>
              </div>
            </a>

          </ul>
        </ul>
        

        <div v-if="success">
          <Mensagem :data="success" :type="'alert-success'"/>
        </div>

        <div v-if="$AllErros">
          <Mensagem :data="$AllErros" :type="'alert-danger'"/>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Order from '../services/Order'
import Mensagem from './Mensagem.vue'
export default {
  components: {
    Header,
    Mensagem
  },
  data() {
    return {
      success: {}
    }
  },
  mounted() {
    this.$store.dispatch('fecthCatalog')
  },
  methods: {
    fechar() {
      let form = {}
      form.total = this.$sumCard
      form.items = this.$AllCard

      Order.Checkout(form).then(response => {
        if ('success' in response.data) {
          this.success = response.data.success
          this.$store.dispatch('clearCard')  
        }
       
      })
    },
    addItem(item) {
      this.$store.dispatch('addItem', item)
    },
    remove(id) {
      this.$store.dispatch('removeItem', id)
    }
  },
  computed: {
    $AllCatalog() {
      return this.$store.getters.allCatalog
    },
    $AllCard() {
      let card = this.$store.getters.allCard
      let newItems = []
      card.forEach(element => {
        let existe = newItems.findIndex(e => e.id == element.id)

        if (existe != -1) {
          newItems[existe].quantity += 1
        } else {
          element.quantity = 1
          newItems.push(element)
        }
      })

      return newItems
    },
    $sumCard() {
      let value = 0

      this.$AllCard.forEach(e => {
        value += (parseFloat(e.price) * e.quantity)
      })

      return value.toFixed(2)
    },
    $AccessToken() {
      return this.$store.getters.accessToken
    },
    $AllErros() {
      return this.$store.getters.allErrors

    }
  }

}
</script>