<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroRef = ref(null)
const heroBgRef = ref(null)

let handleScroll = null

onMounted(() => {
  if (heroBgRef.value && heroRef.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false
    const update = () => {
      const y = window.scrollY
      if (heroRef.value && y < heroRef.value.offsetHeight) {
        heroBgRef.value.style.transform = `translate3d(0, ${y * 0.25}px, 0)`
      }
      ticking = false
    }

    handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  if (handleScroll) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <section id="hero" ref="heroRef" class="relative bg-ink text-white overflow-hidden min-h-[100svh] flex items-end">
    <!-- Layer gambar: lebih tinggi dari section supaya ada ruang geser parallax -->
    <div ref="heroBgRef" class="absolute inset-x-0 -top-[12%] h-[124%] ph-dark will-change-transform" aria-hidden="true">
      <div class="absolute inset-0 flex items-center justify-center text-white/20">
        <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="m21 15-5-5L5 21"/>
        </svg>
      </div>
      <img
        src="/hero.png"
        alt="Rumah hasil karya Gawe Oemah di Bontang"
        class="absolute inset-0 w-full h-full object-cover"
        @error="$event.target.style.display='none'"
      />
    </div>

    <!-- Overlay: gelap di kiri-bawah tempat teks, foto tetap terlihat di kanan-atas -->
    <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent"></div>

    <div class="relative w-full max-w-6xl mx-auto px-5 pt-28 pb-14 md:pb-24">
      <div class="max-w-2xl rise">
        <p class="text-gold text-sm font-medium mb-5">Design × Build · Bontang, Kalimantan Timur</p>
        <h1 class="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">Rumah impian, sesuai budget Anda.</h1>
        <p class="mt-6 text-white/80 max-w-md leading-relaxed">Kami merancang dan membangun rumah dari satu tim yang sama, jadi desain di gambar sama dengan hasil di lapangan.</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="https://wa.me/6282255156237" class="bg-gold text-ink font-bold px-6 py-3 rounded-full hover:bg-white transition">Konsultasi gratis</a>
          <a href="#portofolio" class="border border-white/40 backdrop-blur-sm px-6 py-3 rounded-full hover:border-gold hover:text-gold transition">Lihat proyek</a>
        </div>
      </div>
    </div>
  </section>
</template>
