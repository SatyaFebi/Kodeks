import { createApp } from 'vue'
import { createPinia } from 'pinia'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDesktop, faBrain, faGears, faLock, faBolt, faArrowTrendUp, faEnvelope, faCircleCheck, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faShopify, faSlack } from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
  faDesktop, faBrain, faGears, faLock, faBolt, faArrowTrendUp, 
  faEnvelope, faCircleCheck, faWhatsapp, faShopify, faSlack, faFileLines
)

import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
