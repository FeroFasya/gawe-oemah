<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-ink/95 backdrop-blur text-white">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
      <a href="#top" class="flex items-center" aria-label="Gawe Oemah">
        <img
          src="/logo-horizontal.png"
          alt="Gawe Oemah — Jasa Bangun & Renovasi Rumah"
          class="h-9 md:h-10 w-auto object-contain"
        />
      </a>
      <nav class="hidden md:flex items-center gap-8 text-sm">
        <a href="#layanan" class="hover:text-gold transition-colors">Layanan</a>
        <a href="#portofolio" class="hover:text-gold transition-colors">Portofolio</a>
        <a href="#alur" class="hover:text-gold transition-colors">Alur kerja</a>
        <a href="#lokasi" class="hover:text-gold transition-colors">Lokasi</a>
        <a href="https://wa.me/6282255156237" class="bg-gold text-ink font-bold px-4 py-2 rounded-full hover:bg-white transition">Konsultasi gratis</a>
      </nav>
      <button
        @click="toggleMenu"
        class="md:hidden p-2"
        aria-label="Buka menu"
        :aria-expanded="isMenuOpen"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 7h18M3 12h18M3 17h18"/>
        </svg>
      </button>
    </div>
    <div
      v-show="isMenuOpen"
      class="md:hidden border-t border-white/10 px-5 pb-5 text-base"
    >
      <a href="#layanan" @click="closeMenu" class="block py-3">Layanan</a>
      <a href="#portofolio" @click="closeMenu" class="block py-3">Portofolio</a>
      <a href="#alur" @click="closeMenu" class="block py-3">Alur kerja</a>
      <a href="#lokasi" @click="closeMenu" class="block py-3">Lokasi</a>
      <a href="https://wa.me/6282255156237" @click="closeMenu" class="block mt-2 text-center bg-gold text-ink font-bold py-3 rounded-full">Konsultasi gratis</a>
    </div>
  </header>
</template>
