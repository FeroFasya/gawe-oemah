<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink text-white border-t border-white/10">
    <!-- Main Footer Content -->
    <div class="max-w-6xl mx-auto px-5 pt-16 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        <!-- Kolom 1: Profil Brand & Logo (5 cols di desktop) -->
        <div class="lg:col-span-5 space-y-5">
          <a href="#top" class="inline-block" aria-label="Kembali ke atas">
            <img
              src="/logo-horizontal.png"
              alt="Gawe Oemah — Design × Build"
              class="h-10 md:h-11 w-auto object-contain"
            />
          </a>
          <p class="text-white/70 text-sm leading-relaxed max-w-sm">
            Studio perancangan arsitektur, desain interior, dan kontraktor konstruksi terpadu di Bontang, Kalimantan Timur. Satu tim, dari gambar sampai serah terima kunci.
          </p>
          <div class="pt-2 flex items-center gap-3">
            <a
              href="https://www.instagram.com/gawe_oemah/"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-gold hover:text-ink text-xs font-semibold transition-colors"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@gawe_oemah</span>
            </a>
            <a
              href="https://wa.me/6282255156237"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold text-ink text-xs font-bold hover:bg-white transition-colors"
            >
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Kolom 2: Layanan Kami (3 cols) -->
        <div class="lg:col-span-3 space-y-4">
          <h4 class="font-display font-bold text-base text-gold tracking-wide uppercase">Layanan Kami</h4>
          <ul class="space-y-2.5 text-sm text-white/70">
            <li class="hover:text-white transition-colors">Desain Arsitektur & Fasad</li>
            <li class="hover:text-white transition-colors">Visualisasi 3D & Denah Ruang</li>
            <li class="hover:text-white transition-colors">Desain Interior & Custom Mebel</li>
            <li class="hover:text-white transition-colors">Konstruksi Bangun Baru</li>
            <li class="hover:text-white transition-colors">Renovasi & Rekondisi Rumah</li>
          </ul>
        </div>

        <!-- Kolom 3: Navigasi Cepat (2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <h4 class="font-display font-bold text-base text-gold tracking-wide uppercase">Navigasi</h4>
          <ul class="space-y-2.5 text-sm text-white/70">
            <li><a href="#layanan" class="hover:text-gold transition-colors">Layanan</a></li>
            <li><a href="#portofolio" class="hover:text-gold transition-colors">Portofolio</a></li>
            <li><a href="#alur" class="hover:text-gold transition-colors">Alur Kerja</a></li>
            <li><a href="#lokasi" class="hover:text-gold transition-colors">Lokasi Kantor</a></li>
            <li><a href="https://wa.me/6282255156237" class="hover:text-gold transition-colors">Konsultasi Gratis</a></li>
          </ul>
        </div>

        <!-- Kolom 4: Workshop & Alamat (2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <h4 class="font-display font-bold text-base text-gold tracking-wide uppercase">Lokasi</h4>
          <address class="not-italic text-sm text-white/70 space-y-2 leading-relaxed">
            <p>Jl. Brokoli 13 No. 129</p>
            <p>Bontang, Kalimantan Timur</p>
            <p class="pt-1">
              <a href="https://wa.me/6282255156237" class="text-gold font-bold hover:underline">
                +62 822-5515-6237
              </a>
            </p>
          </address>
        </div>
      </div>
    </div>

    <!-- Sub-Footer / Copyright & Credit -->
    <div class="border-t border-white/10 bg-black/40">
      <div class="max-w-6xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
        <p>© <span>{{ currentYear }}</span> Gawe Oemah. Design × Build. All rights reserved.</p>
        <p class="text-white/40 hover:text-white/70 transition-colors">
          Designed & Developed by <span class="text-gold/80 font-medium">Fero Fasya</span>
        </p>
      </div>
    </div>
  </footer>
</template>
