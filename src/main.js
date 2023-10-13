import { createApp } from 'vue'
import { plugin, defaulConfig } from '@formkit/vue'
import config from '../formkit.config'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(plugin, defaulConfig(config))

app.mount('#app')
