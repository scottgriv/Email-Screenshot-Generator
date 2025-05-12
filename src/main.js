import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.devtools = false      // ← disable the badge/inspector
app.mount('#app')
