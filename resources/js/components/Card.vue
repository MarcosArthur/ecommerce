<template>
      <div class="col-3">
        <ul class="list-group">
          <ul class="list-group">
            <li class="list-group-item text-center" v-if="cardIsEmpty">Carrinho Vazio</li>

            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in card"
              :key="item.id">

              <p>{{ item.quantity }}x {{ item.name }} <sup><strong> {{ $filters.currencyBRL(item.price) }}</strong></sup></p>

              <button class="btn btn-sm btn-danger top-0 end-1" @click="remove(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3"
                  viewBox="0 0 16 16">
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>

            </li>

            <li class="list-group-item" v-if="!cardIsEmpty">Total: <span class="fs-4"> {{ $filters.currencyBRL(total) }}</span> </li>
          
            <a href="#" class="list-group-item list-group-item-action active" v-if="!cardIsEmpty"
              @click="checkout()">
              <div class="d-flex w-100 justify-content-between">
                Fechar Pedido
              </div>
            </a>



          </ul>
        </ul>

        <Mensagem />

      </div>

</template>

<script setup>

import { computed } from 'vue'
import { useCardStore } from '@/store/Card'
import { useMessageStore } from '@/store/Message'
import Order from '../services/Order.js'

const store = useCardStore()
const messageStore = useMessageStore()

function remove(id) {
  store.removeItem(id)
}

function checkout() {
  let form = {}
  form.total = this.total
  form.items = this.card

  Order.Checkout(form).then(response => {
    if ('success' in response.data) {
      messageStore.setMessagem({data: response.data.success, type: 'alert-success'})
      store.clearCard() 
    }
  })
}

const card = computed(() => {
  let card = store.card
  let newItems = []
  card.forEach(element => {
    let item = newItems.findIndex(e => e.id == element.id)
    if (item != -1) {
      newItems[item].quantity += 1
    } else {
      element.quantity = 1
      newItems.push(element)
    }
  })
  return newItems
})

const cardIsEmpty = computed(() => !card.value.length)

const total = computed(() => {
  return card.value
  .map(e => (Number(e.price) * e.quantity))
  .reduce((accumulator, newValue) => accumulator + newValue).toFixed(2)
})

</script>