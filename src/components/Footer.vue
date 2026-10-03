<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink text-white/70">
    <div class="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
      <p>© <span>{{ currentYear }}</span> Gawe Oemah. Design × Build.</p>
      <p>prototype by fero</p>
    </div>
  </footer>
</template>
