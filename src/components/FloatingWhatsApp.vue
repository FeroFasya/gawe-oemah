<script setup>
const waText = encodeURIComponent('Halo Gawe Oemah, saya ingin konsultasi seputar desain atau bangun rumah di Bontang.')
const waUrl = `https://wa.me/6282255156237?text=${waText}`
</script>

<template>
  <aside
    class="fixed bottom-6 right-6 z-40 flex items-center group pointer-events-none"
    aria-label="Kontak WhatsApp Cepat"
  >
    <!-- Label Tooltip di samping kiri tombol -->
    <a
      :href="waUrl"
      target="_blank"
      rel="noopener"
      class="pointer-events-auto flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white pl-4 pr-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="Konsultasi cepat lewat WhatsApp"
    >
      <span class="text-xs font-bold tracking-wide hidden sm:inline-block">
        Konsultasi Gratis
      </span>
      <div class="relative flex items-center justify-center">
        <!-- Efek Denyut Ping Halus -->
        <span class="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping"></span>
        <!-- Icon WhatsApp Asli -->
        <svg
          class="relative w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.969.589 1.942.88 2.792.88 3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.502-4.478 9.97-9.97 9.97-1.748 0-3.385-.45-4.819-1.239l-4.711 1.233 1.258-4.595c-.885-1.488-1.4-3.23-1.4-5.369 0-5.502 4.478-9.97 9.97-9.97 5.492 0 9.972 4.468 9.972 9.97z"/>
        </svg>
      </div>
    </a>
  </aside>
</template>
