<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <LoadingIntro v-if="isLoading" @loaded="handleLoaded" />
    <div v-else class="main-content">
      <ScrollProgress />
      <ParallaxBackground />
      <Navigation :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <HobbiesSection />
      <PhotoGallery />
      <ResourcesSection />
      <GuestbookSection />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingIntro from './components/LoadingIntro.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import ParallaxBackground from './components/ParallaxBackground.vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import EducationSection from './components/EducationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import HobbiesSection from './components/HobbiesSection.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import ResourcesSection from './components/ResourcesSection.vue'
import GuestbookSection from './components/GuestbookSection.vue'
import Footer from './components/Footer.vue'

const isLoading = ref(true)
const isDarkMode = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'true'
  }
})

const handleLoaded = () => {
  isLoading.value = false
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value)
}
</script>

<style scoped>
#app {
  position: relative;
  min-height: 100vh;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.main-content {
  position: relative;
  z-index: 1;
}

.dark-mode {
  background-color: #1a1a1a;
  color: #f9f9f9;
}
</style>
