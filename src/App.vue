<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <IntroLoading v-if="isLoading" @loaded="handleLoaded" />
    
    <div v-else class="main-content">
      <ScrollProgress />
      <ParallaxBackground />
      <Navigation :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      
      <Home /> 
      
      <AboutMe />
      
      <School />
      
      <Work />
      
      <Passion />
      
      <PhotoGallery />
      
      <ResourcesSection />
      
      <GuestbookSection />
      
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Updated Imports to match your file directory
import IntroLoading from './components/IntroLoading.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import ParallaxBackground from './components/ParallaxBackground.vue'
import Navigation from './components/Navigation.vue'
import Home from './components/Home.vue'
import AboutMe from './components/AboutMe.vue'
import School from './components/School.vue'
import Work from './components/Work.vue'
import Passion from './components/Passion.vue'
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
  /* Smooth transition for theme switching */
  transition: background-color 0.5s ease, color 0.5s ease;
  font-family: 'Inter', sans-serif; /* Default base font */
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