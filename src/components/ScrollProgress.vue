<template>
  <div class="scroll-progress">
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
  scrollProgress.value = Math.min(scrollPercent, 100)
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-blue), var(--warm-accent));
  transition: width 0.1s ease;
  box-shadow: 0 0 10px rgba(59, 89, 152, 0.5);
}
</style>
