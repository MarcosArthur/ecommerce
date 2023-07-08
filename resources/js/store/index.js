import { createStore } from 'vuex'
import Catalog from '../services/Catalog'
import Auth from '../services/Auth'
import Orders from '../services/Order'
export default createStore({
    state: {
        catalog: [],
        card: [],
        userToken: [],
        user: [],
        orders: [],
        messages:  {
            type: '',
            data: []
        }
    },
    mutations: {
        SET_CATALOG(state, catalog) {
            state.catalog = catalog
        },
        SET_CARD(state, card) {
            card.product_id = card.id
            state.card.push(card)
        },
        CLEAR_CARD(state) {
            state.card = []
        },
        REMOVE_ITEM(state, item) {
            let index = state.card.findIndex(element => element.id == item)
            state.card.splice(index, 1)
        },
        SET_USER_TOKEN(state, data) {
            state.userToken = data
        },
        SET_USER(state, data) {
            state.user = data
        },
        SET_ORDERS(state, data) {
            state.orders = data
        },
        SET_MESSAGES(state, message) {
            state.messages.type = ( message.type ?? 'alert-danger' )
            state.messages.data = message.data
        },
        CLEAR_MESSAGES(state) {
            state.messages = []
        }

    },
    actions: {
        setToken(context, data) {
            context.commit('SET_USER_TOKEN', data)
        },
        fecthCatalog(context) {
            Catalog.fecthCatalog().then(response => {
                context.commit('SET_CATALOG', response.data)
            })
        },
        addItem(context, item) {
            context.commit('SET_CARD', item)
        },
        removeItem(context, id) {
            context.commit('REMOVE_ITEM', id)
        },
        fetchUser(context) {
            Auth.Me().then(response => {
                context.commit('SET_USER', response.data)
            })
        },
        clearCard(context) {
            context.commit('CLEAR_CARD')
        },
        fetchOrders(context) {
            Orders.GetOrders().then(response => {
                context.commit('SET_ORDERS', response.data)
            })
        },
        logout(context) {
            context.commit('SET_USER_TOKEN', [])
        },
        setMessagem(context, data) {
            context.commit('SET_MESSAGES', data)
        }
    },
    getters: {
        allCatalog(state) {
            return state.catalog
        },
        allCard(state) {
            return state.card
        },
        allOrders(state) {
            return state.orders
        },
        allMessagens(state) {
            return state.messages.data
        },
        typeMessage(state) {
            return state.messages.type
        },
        accessToken(state) {
            return state?.userToken?.access_token
        },
        getUser(state) {
            return state.user
        },
        getUserName(state) {
            return state.user?.name
        }

    }
})