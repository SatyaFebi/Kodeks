<template>
  <nav class="navbar fixed top-0 left-0 right-0 h-20 bg-slate-950/70 backdrop-blur-2xl border-b border-white/10 z-50 flex items-center">
    <div class="container mx-auto px-6 flex justify-between items-center w-full relative">
      <!-- Logo -->
      <div class="logo text-2xl font-bold tracking-wider text-white z-50">
        <router-link to="/">KODEKS<span class="text-sky-400">.</span></router-link>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex gap-8 items-center">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" 
           class="text-slate-400 text-sm font-medium hover:text-white transition-colors">
          {{ link.name }}
        </a>
        <a href="#" class="bg-linear-to-br from-sky-400 to-indigo-400 text-white text-[0.85rem] font-semibold py-2.5 px-6 rounded-full shadow-lg shadow-sky-500/20 hover:scale-105 transition-transform">
          Contact
        </a>
      </div>

      <!-- Hamburger Button -->
      <button @click="isMenuOpen = !isMenuOpen" 
              class="md:hidden text-white text-2xl z-50 focus:outline-none transition-transform active:scale-95">
        <font-awesome-icon :icon="['fas', isMenuOpen ? 'xmark' : 'bars']" />
      </button>

      <!-- Mobile Menu Overlay -->
      <Transition name="mobile-menu">
        <div v-if="isMenuOpen" 
             class="fixed inset-0 bg-slate-950/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" 
             @click="isMenuOpen = false"
             class="text-slate-300 text-2xl font-bold hover:text-sky-400 transition-colors">
            {{ link.name }}
          </a>
          <a href="#" @click="isMenuOpen = false"
             class="mt-4 bg-linear-to-br from-sky-400 to-indigo-400 text-white text-lg font-bold py-4 px-12 rounded-full shadow-xl shadow-sky-500/20">
            Contact
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Portfolio', href: '#portfolio' }
]
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>