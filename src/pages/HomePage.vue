<template>
  <div class="homepage pt-20 overflow-x-hidden bg-slate-950 text-slate-200">
    <!-- Navbar -->
    <nav class="navbar fixed top-0 left-0 right-0 h-20 bg-slate-950/70 backdrop-blur-2xl border-b border-white/10 z-[1000] flex items-center">
      <div class="container mx-auto px-6 flex justify-between items-center w-full">
        <div class="logo text-2xl font-bold tracking-wider text-white">KODEKS<span class="text-sky-400">.</span></div>
        <div class="nav-links flex gap-8 items-center">
          <a href="#services" class="text-slate-400 text-sm font-medium hover:text-white transition-colors">Layanan</a>
          <a href="#process" class="text-slate-400 text-sm font-medium hover:text-white transition-colors">Proses</a>
          <a href="#portfolio" class="text-slate-400 text-sm font-medium hover:text-white transition-colors">Kasus</a>
          <a href="#" class="bg-linear-to-br from-sky-400 to-indigo-400 text-white text-[0.85rem] font-semibold py-2.5 px-6 rounded-full shadow-lg shadow-sky-500/20 hover:scale-105 transition-transform">Kontak</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero py-32 relative">
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div class="hero-text text-left">
          <div class="badge inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 text-[0.7rem] font-bold tracking-wider uppercase rounded-full border border-sky-500/20 mb-8">
            Web Apps · AI · Workflow Automation
          </div>
          <h1 class="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white tracking-tight">
            Bangun <span class="gradient-text text-transparent bg-clip-text bg-linear-to-br from-sky-400 to-indigo-400">Sistem Internal</span> & Otomasi AI yang Berfokus pada Hasil
          </h1>
          <p class="text-xl text-slate-400 mb-12 max-w-[540px] leading-relaxed">
            Kodeks membangun aplikasi web kustom untuk sistem internal Anda, lengkap dengan kecerdasan buatan dan otomasi workflow untuk efisiensi bisnis tanpa batas.
          </p>
          <div class="hero-btns flex flex-wrap gap-6">
            <a href="#" class="bg-linear-to-br from-sky-400 to-indigo-400 text-white font-bold py-4 px-10 rounded-full shadow-xl shadow-sky-500/30 hover:scale-105 transition-transform">
              Konsultasi Gratis
            </a>
            <a href="#process" class="bg-white/5 border border-white/10 text-white font-bold py-4 px-10 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-sky-400/50 transition-all border-solid">
              Lihat Portfolio Sistem
            </a>
          </div>
        </div>
        <div class="hero-visual w-full max-w-[500px] lg:ml-auto">
          <div class="visual-container bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 aspect-square w-full flex items-center justify-center hover:border-sky-500/40 transition-all duration-500 group shadow-2xl relative z-10 opacity-0 scale-90">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="main-hub w-full h-full opacity-100">
              <!-- Grid background -->
              <path d="M50 50 L350 50 L350 350 L50 350 Z" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
              <path d="M50 150 L350 150 M50 250 L350 250 M150 50 L150 350 M250 50 L250 350" stroke="rgba(255,255,255,0.03)" stroke-width="0.5" />
              
              <!-- System Frame -->
              <rect x="60" y="80" width="280" height="240" rx="16" class="system-frame" stroke="url(#paint0_linear)" stroke-width="2" />
              <line x1="60" y1="120" x2="340" y2="120" stroke="url(#paint0_linear)" stroke-width="1.5" />
              <circle cx="85" cy="100" r="5" fill="#f43f5e" />
              <circle cx="105" cy="100" r="5" fill="#fbbf24" />
              <circle cx="125" cy="100" r="5" fill="#10b981" />

              <!-- Central AI Core -->
              <g class="ai-core">
                <circle cx="200" cy="220" r="60" class="core-ring" stroke="url(#paint1_linear)" stroke-width="2" stroke-dasharray="10 5" />
                <path d="M200 180 L235 200 L235 240 L200 260 L165 240 L165 200 Z" class="diamond-core" fill="url(#paint2_linear)" />
                <circle cx="200" cy="220" r="10" fill="white" filter="url(#glow)" />
              </g>

              <!-- Connected Nodes -->
              <circle cx="110" cy="170" r="15" class="node" fill="rgba(255,255,255,0.1)" />
              <circle cx="290" cy="170" r="15" class="node" fill="rgba(255,255,255,0.1)" />
              <circle cx="110" cy="270" r="15" class="node" fill="rgba(255,255,255,0.1)" />
              <circle cx="290" cy="270" r="15" class="node" fill="rgba(255,255,255,0.1)" />

              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="paint0_linear" x1="60" y1="80" x2="340" y2="320" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#38bdf8" />
                  <stop offset="1" stop-color="#818cf8" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="140" y1="160" x2="260" y2="280" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#818cf8" />
                  <stop offset="1" stop-color="#38bdf8" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="165" y1="180" x2="235" y2="260" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#38bdf8" />
                  <stop offset="1" stop-color="#818cf8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </header>

    <!-- Problem-Solution Section -->
    <section id="process" class="py-32 bg-slate-950/50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">Sistem yang <span class="gradient-text text-transparent bg-clip-text bg-linear-to-br from-sky-400 to-indigo-400">Terfragmentasi</span> Adalah Kerugian</h2>
        <p class="text-slate-400 mb-20 max-w-2xl mx-auto text-lg leading-relaxed">Kodeks menyatukan data, proses, dan teknologi ke dalam satu platform yang cerdas and otomatis.</p>
        
        <div class="problem-grid grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div class="problem-card bg-slate-900/60 backdrop-blur-2xl border border-white/5 rounded-4xl p-12 text-left hover:border-sky-500/30 transition-all group opacity-100">
            <div class="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-2xl">
              <font-awesome-icon :icon="['fas', 'lock']" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">Sistem Terisolasi</h3>
            <p class="text-slate-400 leading-relaxed">Data tersebar di berbagai spreadsheet dan tool yang tidak saling bicara (Siloed Data).</p>
          </div>
          <div class="problem-card bg-slate-900/60 backdrop-blur-2xl border border-white/5 rounded-4xl p-12 text-left hover:border-sky-500/30 transition-all group opacity-100">
            <div class="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-2xl">
              <font-awesome-icon :icon="['fas', 'bolt']" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">Inefisiensi Alur Kerja</h3>
            <p class="text-slate-400 leading-relaxed">Banyak proses manual yang rawan kesalahan (human-error) dan memakan biaya operasional tinggi.</p>
          </div>
          <div class="problem-card bg-slate-900/60 backdrop-blur-2xl border border-white/5 rounded-4xl p-12 text-left hover:border-sky-500/30 transition-all group opacity-100">
            <div class="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-2xl">
              <font-awesome-icon :icon="['fas', 'arrow-trend-up']" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-white">Sulitnya Skalabilitas</h3>
            <p class="text-slate-400 leading-relaxed">Kesulitan mengelola ribuan transaksi atau permintaan karena platform lama tidak memadai.</p>
          </div>
        </div>

        <div class="flow-diagram bg-slate-900/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div class="flow-step flex-1 text-center group cursor-default opacity-100">
            <div class="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-lg font-bold text-white group-hover:border-sky-400/50 transition-colors">1</div>
            <h4 class="text-white text-lg font-semibold">Bangun Sistem</h4>
          </div>
          <div class="flow-arrow text-3xl text-sky-400/30 hidden md:block select-none">+</div>
          <div class="flow-step flex-1 text-center group cursor-default opacity-100">
            <div class="w-16 h-16 rounded-full bg-linear-to-br from-sky-400 to-indigo-400 shadow-[0_0_30px_rgba(56,189,248,0.4)] flex items-center justify-center mx-auto mb-6 text-xl font-bold text-white scale-110">2</div>
            <h4 class="text-white text-xl font-bold">Integrasi AI</h4>
          </div>
          <div class="flow-arrow text-3xl text-sky-400/30 hidden md:block select-none">+</div>
          <div class="flow-step flex-1 text-center group cursor-default opacity-100">
            <div class="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-lg font-bold text-white group-hover:border-sky-400/50 transition-colors">3</div>
            <h4 class="text-white text-lg font-semibold">Otomasi Penuh</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-32 bg-slate-950">
      <div class="container mx-auto px-6">
        <h2 class="text-center text-4xl lg:text-5xl font-bold mb-20 text-white tracking-tight">Solusi <span class="gradient-text text-transparent bg-clip-text bg-linear-to-br from-sky-400 to-indigo-400">End-to-End</span> Kami</h2>
        
        <div class="service-grid grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div class="service-item bg-slate-900/60 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-12 flex flex-col hover:border-sky-500/30 transition-all relative overflow-hidden group opacity-100">
            <div class="text-4xl mb-8 text-sky-400">
              <font-awesome-icon :icon="['fas', 'desktop']" />
            </div>
            <h3 class="text-2xl font-bold mb-6 text-white group-hover:text-sky-400 transition-colors">Custom Internal Systems</h3>
            <p class="text-slate-400 mb-10 leading-relaxed text-lg">Aplikasi web modern yang dirancang khusus untuk operasional Anda—mulai dari Portal, CRM, hingga Dashbord Admin kustom.</p>
            <ul class="space-y-4 mt-auto">
              <li class="flex items-center gap-4 text-slate-300">
                <font-awesome-icon :icon="['fas', 'circle-check']" class="text-sky-400 text-xs" /> Enterprise Web Apps
              </li>
              <li class="flex items-center gap-4 text-slate-300">
                <font-awesome-icon :icon="['fas', 'circle-check']" class="text-sky-400 text-xs" /> Sistem Inventaris/Monitoring
              </li>
              <li class="flex items-center gap-4 text-slate-300">
                <font-awesome-icon :icon="['fas', 'circle-check']" class="text-sky-400 text-xs" /> Portal Klien & Dashboard
              </li>
            </ul>
          </div>
          <div class="service-item bg-slate-950 border-2 border-sky-500/50 shadow-[0_0_50px_-12px_rgba(56,189,248,0.3)] rounded-[2.5rem] p-12 flex flex-col relative overflow-hidden group transform hover:scale-[1.02] transition-all opacity-100">
            <div class="absolute top-0 right-0 bg-sky-500/20 text-sky-400 text-[0.65rem] font-black px-6 py-2 rounded-bl-3xl tracking-widest uppercase">Paling Dicari</div>
            <div class="text-4xl mb-8 text-indigo-400">
              <font-awesome-icon :icon="['fas', 'brain']" />
            </div>
            <h3 class="text-2xl font-bold mb-6 text-white">Intelligent AI Solutions</h3>
            <p class="text-slate-400 mb-10 leading-relaxed text-lg">Memberikan otak pada sistem Anda. Integrasi model AI canggih untuk analisis data yang lebih akurat dan responsif.</p>
            <ul class="space-y-4 mt-auto">
              <li class="flex items-center gap-4 text-slate-300">
                <font-awesome-icon :icon="['fas', 'circle-check']" class="text-sky-400 text-xs" /> Custom LLM & Chatbot
              </li>
              <li class="flex items-center gap-4 text-slate-300">
                <font-awesome-icon :icon="['fas', 'circle-check']" class="text-sky-400 text-xs" /> Forecasting & Prediksi
              </li>
              <li class="flex items-center gap-4 text-slate-300">
                <font-awesome-icon :icon="['fas', 'circle-check']" class="text-sky-400 text-xs" /> Analisis Sentimen & Data
              </li>
            </ul>
          </div>
          <div class="service-item bg-slate-900/60 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-12 flex flex-col hover:border-sky-500/30 transition-all group opacity-100">
            <div class="text-4xl mb-8 text-emerald-400">
              <font-awesome-icon :icon="['fas', 'gears']" />
            </div>
            <h3 class="text-2xl font-bold mb-6 text-white group-hover:text-sky-400 transition-colors">Workflow Automation</h3>
            <p class="text-slate-400 mb-10 leading-relaxed text-lg">Menghapus pekerjaan repetitif dengan menghubungkan setiap sistem melalui otomasi tanpa hambatan.</p>
            <ul class="space-y-4 mt-auto">
              <li class="flex items-center gap-4 text-slate-300">
                <font-awesome-icon :icon="['fas', 'circle-check']" class="text-sky-400 text-xs" /> Integrasi API & Platform
              </li>
              <li class="flex items-center gap-4 text-slate-300">
                <font-awesome-icon :icon="['fas', 'circle-check']" class="text-sky-400 text-xs" /> Automated Reporting
              </li>
              <li class="flex items-center gap-4 text-slate-300">
                <font-awesome-icon :icon="['fas', 'circle-check']" class="text-sky-400 text-xs" /> Otomasi Database Sync
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Markers -->
    <section id="portfolio" class="py-32 bg-slate-950">
      <div class="container mx-auto px-6">
        <div class="integration-logos text-center mb-32">
          <p class="text-[0.7rem] uppercase tracking-[4px] font-bold text-slate-500 mb-16">KODEKS TERINTEGRASI DENGAN EKOSISTEM FAVORIT ANDA</p>
          <div class="logo-grid flex flex-wrap justify-center gap-16 md:gap-24 opacity-100">
            <div class="integ-icon text-5xl text-slate-500 hover:text-sky-400 transition-all transform hover:-translate-y-2 cursor-pointer" title="WhatsApp">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </div>
            <div class="integ-icon text-5xl text-slate-500 hover:text-sky-400 transition-all transform hover:-translate-y-2 cursor-pointer" title="Gmail">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </div>
            <div class="integ-icon text-5xl text-slate-500 hover:text-sky-400 transition-all transform hover:-translate-y-2 cursor-pointer" title="Shopify">
              <font-awesome-icon :icon="['fab', 'shopify']" />
            </div>
            <div class="integ-icon text-5xl text-slate-500 hover:text-sky-400 transition-all transform hover:-translate-y-2 cursor-pointer" title="Notion">
              <font-awesome-icon :icon="['fas', 'file-lines']" />
            </div>
            <div class="integ-icon text-5xl text-slate-500 hover:text-sky-400 transition-all transform hover:-translate-y-2 cursor-pointer" title="Slack">
              <font-awesome-icon :icon="['fab', 'slack']" />
            </div>
          </div>
        </div>

        <div class="case-study bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[3rem] p-16 md:p-24 hover:border-sky-500/30 transition-all group overflow-hidden relative opacity-100">
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all"></div>
          <div class="case-content relative z-10">
            <div class="badge inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 text-[0.65rem] font-bold tracking-widest uppercase rounded-full border border-sky-500/20 mb-10">Case Study</div>
            <h3 class="text-4xl lg:text-5xl font-bold mb-10 text-white tracking-tight leading-tight">Otomasi Support 24/7 untuk E-commerce Fashion</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div class="space-y-4">
                <span class="text-sky-400 font-bold uppercase tracking-widest text-xs">Problem</span>
                <p class="text-slate-300 text-xl leading-relaxed">Tim support kewalahan dengan 500+ chat/hari. Response time rata-rata mencapai 4 jam, menyebabkan drop-off customer yang tinggi.</p>
              </div>
              <div class="space-y-4">
                <span class="text-sky-400 font-bold uppercase tracking-widest text-xs">Solution</span>
                <p class="text-slate-300 text-xl leading-relaxed">Implementasi Custom AI Chatbot yang terintegrasi penuh dengan database stok & Shopify API untuk otomasi jawaban secara real-time.</p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-20 p-12 bg-white/5 rounded-3xl border border-white/10">
              <div class="result-box">
                <span class="block text-6xl font-black text-sky-400 mb-4 tracking-tighter">92%</span>
                <span class="text-slate-500 font-bold uppercase tracking-widest text-xs">Otomasi Chat Berhasil</span>
              </div>
              <div class="result-box">
                <span class="block text-6xl font-black text-white mb-4 tracking-tighter"><30s</span>
                <span class="text-slate-500 font-bold uppercase tracking-widest text-xs">Kecepatan Respon AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-20 border-t border-white/5 bg-slate-950">
      <div class="container mx-auto px-6 flex flex-col items-center gap-8">
        <div class="logo text-3xl font-bold tracking-wider text-white">KODEKS<span class="text-sky-400">.</span></div>
        <p class="text-slate-500 text-sm italic max-w-sm text-center font-medium">© 2026 Kodeks AI & Automation. Ready to solve your business complexities with modern intelligence.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // 1. Hero Entrance - Immediate & Snappy
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.8 } })
  
  tl.from('.navbar', { y: -50, opacity: 0 })
    .from('.hero-text .badge', { y: 20, opacity: 0 }, '-=0.6')
    .from('.hero-text h1', { y: 30, opacity: 0 }, '-=0.6')
    .from('.hero-text p', { y: 20, opacity: 0 }, '-=0.6')
    .from('.hero-btns', { y: 20, opacity: 0 }, '-=0.6')
    
  // 2. Hero Hub - fromTo is much more robust
  gsap.fromTo('.visual-container', 
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.2)', delay: 0.1, clearProps: 'opacity,scale' }
  )
  
  gsap.from('.system-frame', { scaleX: 0, opacity: 0, transformOrigin: 'left', duration: 0.8, delay: 0.3 })
  gsap.from('.ai-core', { scale: 0, opacity: 0, transformOrigin: 'center', duration: 0.8, ease: 'back.out(2)', delay: 0.5 })
  gsap.from('.node', { scale: 0, opacity: 0, stagger: 0.05, duration: 0.4, delay: 0.7 })

  // Hub internal loop
  gsap.to('.core-ring', { rotation: 360, transformOrigin: 'center', duration: 30, repeat: -1, ease: 'none' })
  gsap.to('.diamond-core', { y: -8, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })

  // 3. Reveal Logic - Fast trigger (Trigger as soon as it enters screen)
  const revealOnScroll = (selector, trigger) => {
    gsap.fromTo(selector, 
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: trigger || selector,
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all'
      }
    )
  }

  revealOnScroll('.problem-card', '.problem-grid')
  revealOnScroll('.service-item', '.service-grid')
  revealOnScroll('.integ-icon', '.logo-grid')
  revealOnScroll('.case-study', '.case-study')
  
  // Specific for flow steps
  gsap.fromTo('.flow-step', 
    { scale: 0.98, opacity: 0 },
    {
      scrollTrigger: {
        trigger: '.flow-diagram',
        start: 'top 100%'
      },
      scale: 1,
      opacity: 1,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power2.out',
      clearProps: 'all'
    }
  )

  // Mandatory Refresh
  setTimeout(() => { ScrollTrigger.refresh() }, 100)
})
</script>

<style scoped>
.system-frame {
  transition: filter 0.3s;
}

.main-hub:hover .system-frame {
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.4));
}
</style>