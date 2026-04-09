import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faDesktop, faBrain, faGears, faLock, faBolt, faArrowTrendUp, 
  faEnvelope, faCircleCheck, faFileLines, faBars, faXmark 
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faShopify, faSlack } from '@fortawesome/free-brands-svg-icons'

// GSAP Plugins registration
gsap.registerPlugin(ScrollTrigger)

// Initialize Lenis (Smooth Scroll)
const lenis = new Lenis({
  lerp: 0.1, // Smoothness intensity
  wheelMultiplier: 1.1,
  gestureOrientation: 'vertical',
  normalizeWheel: true,
  smoothWheel: true
})

// Connect Lenis to ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)

// Add Lenis to GSAP Ticker
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// Smooth anchor scrolling (Event Delegation for Vue/Dynamic content)
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]')
  if (anchor) {
    const target = anchor.getAttribute('href')
    if (target === '#') return
    
    e.preventDefault()
    lenis.scrollTo(target, { duration: 1.5, offset: -80 })
  }
})

// Add icons to library
library.add(
  faDesktop, faBrain, faGears, faLock, faBolt, faArrowTrendUp, 
  faEnvelope, faCircleCheck, faWhatsapp, faShopify, faSlack, faFileLines,
  faBars, faXmark
)

import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
