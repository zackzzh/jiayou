import state from './state'

import {
  getters
} from './getters'
import {
  mutations
} from './mutations'
Vue.use(Vuex)

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
