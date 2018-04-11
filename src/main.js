// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
Vue.config.devtools = true
Vue.config.performance = true
import App from './App'
import router from './router'
import EventBus from './lib/eventBus.js'
import axios from 'axios'
const VueInputMask = require('vue-inputmask').default
import VeeValidate, { Validator } from 'vee-validate'
// importa validações customizadas
import { validatorCpf, validatorPis, validatorMatricula } from './lib/customValidator'
// import messages from VeeValidate in portuguese
import ptBR from 'vee-validate/dist/locale/pt_BR'
import Toasted from 'vue-toasted'
import Ripple from 'vue-ripple-directive'
import VueFormWizard from 'vue-form-wizard'
import vSelect from 'vue-select'
import Datepicker from 'vuejs-datepicker'
import Vue2Filters from 'vue2-filters'
import 'vue-loaders/dist/vue-loaders.css'
import * as VueLoaders from 'vue-loaders'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.use(VueLoaders)
Vue.use(Vue2Filters)

// <v-select v-model="selected" :options="['foo','bar']"></v-select> https://github.com/sagalbot/vue-select
Vue.component('v-select', vSelect)

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('pt_BR', ptBR)
// adiciona as validações customizadas ao Validator
Validator.extend('cpf', validatorCpf)
Validator.extend('pis', validatorPis)
Validator.extend('matricula', validatorMatricula)

// usage: v-ripple https://github.com/PygmySlowLoris/vue-ripple-directive
Vue.directive('ripple', Ripple)
// https://github.com/charliekassel/vuejs-datepicker
Vue.component('datepicker', Datepicker)
// https://github.com/cristijora/vue-form-wizard
Vue.use(VueFormWizard)
// usage: this.$toasted.error('erro danger') .show .success .info https://shakee93.github.io/vue-toasted/
Vue.use(Toasted, {
  theme: 'primary',
  position: 'top-right',
  duration: 2000,
  iconPack: 'fontawesome'
})
// usage: v-validate="'required|numeric'" data-vv-validate-on="blur" data-vv-delay='1000' etc http://vee-validate.logaretm.com/
Vue.use(VeeValidate)
// usage: v-mask="99999" on input https://github.com/scleriot/vue-inputmask
Vue.use(VueInputMask)

//  const eventBus = {}

// eventBus.install = (Vue) => {
Vue.prototype.$bus = EventBus
// }

// Vue.use(eventBus)
// axios config
export const HTTP = axios.create({
  baseURL: 'https://testetesteapi.herokuapp.com',
  headers: {
    'X-Token-Authorization': 'Bearer ' + localStorage.getItem('jwt')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
