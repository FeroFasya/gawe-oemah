<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    default: null
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const activeImageIndex = ref(0)

// Reset image index when project changes
watch(() => props.project, () => {
  activeImageIndex.value = 0
})

// Lock body scroll when modal is open
watch(() => props.isOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const nextImage = () => {
  if (!props.project?.images?.length) return
  activeImageIndex.value = (activeImageIndex.value + 1) % props.project.images.length
}

const prevImage = () => {
  if (!props.project?.images?.length) return
  activeImageIndex.value = (activeImageIndex.value - 1 + props.project.images.length) % props.project.images.length
}

const handleKeydown = (e) => {
  if (!props.isOpen) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

const getWaLink = (title) => {
  const text = `Halo Gawe Oemah, saya tertarik konsultasi desain / bangun rumah seperti ${title}`
  return `https://wa.me/6282255156237?text=${encodeURIComponent(text)}`
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-sm overflow-y-auto"
      @click.self="emit('close')"
    >
      <div
        class="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        <!-- Tombol Tutup -->
        <button
          @click="emit('close')"
          class="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-ink/75 hover:bg-ink text-white transition-colors shadow-md"
          aria-label="Tutup modal"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <!-- Area Gambar / Slider dengan Ambient Blur Backdrop & Object-Contain -->
        <div class="relative w-full h-[280px] sm:h-[380px] md:h-[420px] bg-ink flex-shrink-0 overflow-hidden flex items-center justify-center">
          <!-- Ambient blurred backdrop image untuk mengisi sisa ruang secara estetik -->
          <img
            v-if="project.images?.length"
            :src="project.images[activeImageIndex]"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 pointer-events-none"
          />

          <!-- Foto utama: utuh 100% tanpa kepotong (object-contain) -->
          <img
            v-if="project.images?.length"
            :src="project.images[activeImageIndex]"
            :alt="`${project.title} - Foto ${activeImageIndex + 1}`"
            class="relative z-10 max-w-full max-h-full object-contain transition-all duration-300 drop-shadow-md"
          />

          <!-- Tombol Panah Prev / Next jika ada lebih dari 1 foto -->
          <div
            v-if="project.images?.length > 1"
            class="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none"
          >
            <button
              @click.stop="prevImage"
              class="pointer-events-auto p-2.5 rounded-full bg-ink/70 hover:bg-ink text-white transition-colors shadow-md"
              aria-label="Foto sebelumnya"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              @click.stop="nextImage"
              class="pointer-events-auto p-2.5 rounded-full bg-ink/70 hover:bg-ink text-white transition-colors shadow-md"
              aria-label="Foto berikutnya"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <!-- Indikator Jumlah Foto -->
          <div
            v-if="project.images?.length > 1"
            class="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-ink/80 text-white text-xs font-semibold backdrop-blur-sm"
          >
            {{ activeImageIndex + 1 }} / {{ project.images.length }}
          </div>
        </div>

        <!-- Thumbnail Strip jika lebih dari 1 foto -->
        <div
          v-if="project.images?.length > 1"
          class="flex gap-2 px-4 py-2.5 bg-mist border-b border-ink/10 overflow-x-auto flex-shrink-0"
        >
          <button
            v-for="(img, idx) in project.images"
            :key="idx"
            @click="activeImageIndex = idx"
            :class="[
              'relative h-12 w-16 sm:h-14 sm:w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all',
              activeImageIndex === idx ? 'border-gold scale-105 shadow' : 'border-transparent opacity-60 hover:opacity-100'
            ]"
          >
            <img :src="img" :alt="`Thumbnail ${idx + 1}`" class="w-full h-full object-cover" />
          </button>
        </div>

        <!-- Detail Konten Proyek (Lega & Jelas) -->
        <div class="p-5 sm:p-7 overflow-y-auto space-y-3.5">
          <!-- Tags / Lokasi & Tahun -->
          <div class="flex flex-wrap items-center gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2.5 py-1 rounded-md bg-mist text-ink/80 text-xs font-semibold"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Judul Proyek (Dela Gothic One) -->
          <h3 class="font-display font-bold text-2xl sm:text-3xl text-ink leading-tight">
            {{ project.title }}
          </h3>

          <!-- Subtitle Proyek (Work Sans SemiBold/Bold) -->
          <p v-if="project.subtitle" class="font-body font-bold text-brick text-base sm:text-lg tracking-tight">
            {{ project.subtitle }}
          </p>

          <!-- Deskripsi Singkat: Jelas, Berjarak & Nyaman Dibaca -->
          <p class="font-body text-ink/85 leading-relaxed text-sm sm:text-base font-normal">
            {{ project.description }}
          </p>

          <!-- CTA Tombol Konsultasi WA Khusus Proyek Ini -->
          <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-ink/10">
            <p class="text-xs text-slate2">Tertarik dengan konsep hunian seperti ini?</p>
            <a
              :href="getWaLink(project.title)"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-ink font-bold px-6 py-3 rounded-full transition shadow-md"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.969.589 1.942.88 2.792.88 3.182 0 5.768-2.587 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.502-4.478 9.97-9.97 9.97-1.748 0-3.385-.45-4.819-1.239l-4.711 1.233 1.258-4.595c-.885-1.488-1.4-3.23-1.4-5.369 0-5.502 4.478-9.97 9.97-9.97 5.492 0 9.972 4.468 9.972 9.97z"/>
              </svg>
              Konsultasi Proyek Ini
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
