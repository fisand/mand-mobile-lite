import Vue from 'vue'
import App from './app.vue'

import "@unocss/reset/tailwind.css"
import "uno.css"
import '../components/_style/mixin/theme.basic.styl'
import '../components/_style/mixin/theme.components.styl'
import '../components/_style/mixin/theme.variable.styl'

new Vue({
  render: h => h(App)
}).$mount('#app')
