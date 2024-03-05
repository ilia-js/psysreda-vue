import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import '@/assets/scss/main.scss'
import '@/assets/scss/buttons.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import { router } from '@/router'
import { VApp, VTab, VTabs } from 'vuetify/vuetify'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
