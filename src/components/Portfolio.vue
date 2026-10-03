<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects.js'
import ProjectModal from './ProjectModal.vue'

const INITIAL_LIMIT = 6
const displayLimit = ref(INITIAL_LIMIT)
const selectedProject = ref(null)
const isModalOpen = ref(false)

const visibleProjects = computed(() => {
  return projects.slice(0, displayLimit.value)
})

const hasMoreProjects = computed(() => {
  return displayLimit.value < projects.length
})

const showAllProjects = () => {
  displayLimit.value = projects.length
}

const showLessProjects = () => {
  displayLimit.value = INITIAL_LIMIT
}

const openProject = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<template>
  <section id="portofolio" class="bg-white py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-5">
      <!-- Section Header -->
      <div class="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <p class="text-brick font-bold text-sm tracking-wider uppercase mb-2">Portofolio Pilihan</p>
          <h2 class="font-display font-bold text-4xl md:text-5xl text-ink">Karya & Proyek Kami</h2>
        </div>
        <a
          href="https://www.instagram.com/gawe_oemah/"
          target="_blank"
          rel="noopener"
          class="text-sm font-bold underline decoration-gold decoration-2 underline-offset-4 hover:text-brick transition-colors"
        >
          Lihat semua di Instagram →
        </a>
      </div>

      <!-- Grid Portofolio -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" id="gallery">
        <figure
          v-for="item in visibleProjects"
          :key="item.id"
          @click="openProject(item)"
          :class="[
            'ph relative overflow-hidden cursor-pointer group rounded-lg',
            item.featured ? 'aspect-[3/4] md:row-span-2 md:aspect-auto' : 'aspect-[4/5]'
          ]"
        >
          <!-- Placeholder Icon jika gambar loading/kosong -->
          <div class="absolute inset-0 flex items-center justify-center text-ink/20">
            <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="m21 15-5-5L5 21"/>
            </svg>
          </div>

          <!-- Gambar Cover Proyek (foto index 0) -->
          <img
            v-if="item.images && item.images.length"
            :src="item.images[0]"
            :alt="`${item.title} - ${item.subtitle || 'Bontang'}`"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            @error="$event.target.style.display='none'"
          />

          <!-- Gradient Overlay & Caption Info -->
          <figcaption
            class="absolute bottom-0 inset-x-0 p-3 sm:p-5 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent text-white transition-opacity"
          >
            <!-- Badge Jumlah Foto jika lebih dari 1 -->
            <div
              v-if="item.images && item.images.length > 1"
              class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm text-[10px] font-semibold text-white/90 mb-1.5"
            >
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="m21 15-5-5L5 21"/>
              </svg>
              {{ item.images.length }} foto
            </div>

            <!-- Judul Proyek (Dela Gothic One) -->
            <h3 class="font-display text-base sm:text-xl text-white group-hover:text-gold transition-colors leading-snug">
              {{ item.title }}
            </h3>

            <!-- Subtitle Singkat (Work Sans Bold) -->
            <p v-if="item.subtitle" class="font-body font-bold text-xs text-white/80 tracking-tight line-clamp-1 mt-0.5">
              {{ item.subtitle }}
            </p>
          </figcaption>

          <!-- Hover Indicator / Zoom Icon -->
          <div
            class="absolute top-3 right-3 p-2 rounded-full bg-ink/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
        </figure>
      </div>

      <!-- Tombol "Lihat Proyek Lainnya" (Progressive Disclosure) -->
      <div class="mt-12 text-center">
        <button
          v-if="hasMoreProjects"
          @click="showAllProjects"
          class="inline-flex items-center gap-2 bg-ink hover:bg-slate2 text-white font-bold px-8 py-3.5 rounded-full transition shadow-md hover:shadow-lg"
        >
          <span>Lihat Proyek Lainnya ({{ projects.length - INITIAL_LIMIT }} lagi)</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <button
          v-else-if="projects.length > INITIAL_LIMIT"
          @click="showLessProjects"
          class="inline-flex items-center gap-2 border border-ink/20 hover:border-ink text-ink font-bold px-6 py-3 rounded-full transition"
        >
          <span>Tampilkan Lebih Sedikit</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M5 15l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Modal Lightbox Pintar -->
    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>
