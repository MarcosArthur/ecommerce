import Http from './Http'

export default {
    Checkout (data) {
      return Http('order', '', 'post', data)
    },
    GetOrders() {
        return Http('order', '', 'get')
    }
  }