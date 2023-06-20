import Http from './Http'

export default {
    Login (data) {
      return Http('auth', 'login', 'post', data)
    },

    Logout() {
      return Http('auth', 'logout', 'get')
    },
    Me() {
      return Http('auth', 'me', 'get')
    }
  }