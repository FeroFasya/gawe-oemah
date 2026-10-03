<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Stats from './components/Stats.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Workflow from './components/Workflow.vue'
import ContactLocation from './components/ContactLocation.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-mist text-ink antialiased min-h-screen">
    <Navbar />
    <main id="top">
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Workflow />
      <ContactLocation />
    </main>
    <Footer />
  </div>
</template>
