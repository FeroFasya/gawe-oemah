<script setup>
import { projects } from '../data/projects.js'
</script>

<template>
  <section id="portofolio" class="bg-white py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-5">
      <div class="flex flex-wrap items-end justify-between gap-4 mb-10">
        <h2 class="font-display font-bold text-4xl md:text-5xl">Proyek terbaru</h2>
        <a
          href="https://www.instagram.com/gawe_oemah/"
          target="_blank"
          rel="noopener"
          class="text-sm font-bold underline decoration-gold decoration-2 underline-offset-4 hover:text-brick"
        >
          Lihat semua di Instagram
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" id="gallery">
        <figure
          v-for="item in projects"
          :key="item.id"
          :class="[
            'ph relative overflow-hidden',
            item.featured ? 'aspect-[3/4] md:row-span-2 md:aspect-auto group' : 'aspect-[4/5]'
          ]"
        >
          <!-- Placeholder icon di latar belakang -->
          <div class="absolute inset-0 flex items-center justify-center text-ink/30">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="m21 15-5-5L5 21"/>
            </svg>
          </div>

          <!-- Gambar proyek jika ada -->
          <img
            v-if="item.image"
            :src="item.image"
            :alt="`${item.title} ${item.location}`"
            class="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            @error="$event.target.style.display='none'"
          />

          <!-- Caption dengan style berbeda jika ada foto vs placeholder abu -->
          <figcaption
            v-if="item.image"
            class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-ink/80 to-transparent text-white font-display text-lg"
          >
            {{ item.title }}
          </figcaption>
          <figcaption
            v-else
            class="absolute bottom-0 inset-x-0 p-4 text-ink font-display text-lg"
          >
            {{ item.title }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
