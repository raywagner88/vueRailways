import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faTrain, faGrinBeamSweat, faSpinner, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faExclamationCircle, faTrain, faGrinBeamSweat, faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
