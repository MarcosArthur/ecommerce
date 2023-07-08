import axios from 'axios'
import store from '../store'
import router from '../routes'
axios.interceptors.request.use(
  config => {
    const token = store.getters.accessToken
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)


axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    
    if (error.response?.status == 401 && router.currentRoute.value.name != 'auth') {
      router.push('/')
      store.commit('SET_USER_TOKEN', [])
    
    } 
    
    if (error.response?.status == 422) {
      store.commit('SET_MESSAGES', error.response.data.errors)
    }

    return Promise.reject(error)
  }
)


export default async (base, path, httpMethod = 'get', data = {}, headers = {}) => {

    let url = `/api/${base}/${path}`

    const request  = await axios({
      url: url,
      method: httpMethod,
      data: data,
      headers: headers
    }).then((response) => {
      return response
    }).catch(error => {
      return error
    })

    return request
  }