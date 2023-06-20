import Http from './Http'

export default {
    fecthCatalog () {
      return Http('catalog', '', 'get')
    }
  }