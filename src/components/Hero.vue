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
        <!-- Pill Badge Keren & Bersih -->
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-xs font-semibold mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span>Design × Build · Bontang, Kalimantan Timur</span>
        </div>

        <!-- Headline Utama (Spasi Leading Aman Tidak Tabrakan) -->
        <h1 class="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.18] text-white">
          Bangun Rumah<br class="hidden sm:inline" /> Jadi Mudah.
        </h1>

        <!-- Penjelasan Terpadu yang Elegan (Tidak Numpuk Berantakan) -->
        <div class="mt-6 space-y-2 max-w-lg">
          <p class="font-body font-bold text-base sm:text-lg text-gold/95 tracking-tight">
            Design, Build & Interior — Dari Ide Hingga Siap Dihuni.
          </p>
          <p class="text-white/80 text-sm sm:text-base leading-relaxed">
            Satu tim terintegrasi untuk mewujudkan ruang impian Anda tanpa repot mengatur banyak pihak dan vendor terpisah.
          </p>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <a href="https://wa.me/6282255156237?text=Halo%20Gawe%20Oemah,%20saya%20ingin%20konsultasi%20kebutuhan%20ruang%20hunian%20saya." class="inline-flex items-center gap-2 bg-gold text-ink font-bold px-6 py-3 rounded-full hover:bg-white transition shadow-md">
            <span>Konsultasikan Kebutuhan Ruang Anda</span>
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#portofolio" class="border border-white/40 backdrop-blur-sm px-6 py-3 rounded-full hover:border-gold hover:text-gold transition">Lihat Portofolio</a>
        </div>
      </div>
  </section>
</template>
