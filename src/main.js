import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { inject } from '@vercel/analytics'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})
inject()

createApp(App).use(vuetify).mount('#app')
