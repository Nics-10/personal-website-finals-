<template>
  <div class="parallax-background">
    <div class="parallax-layer layer-1" :style="{ transform: `translateY(${offset * 0.5}px)` }">
      <div class="doodle-star" style="top: 15%; left: 8%;">✨</div>
      <div class="doodle-star" style="top: 45%; right: 12%;">✦</div>
      <div class="doodle-heart" style="top: 75%; left: 15%;">♥</div>
    </div>

    <div class="parallax-layer layer-2" :style="{ transform: `translateY(${offset * 0.3}px)` }">
      <div class="doodle-paperclip" style="top: 25%; right: 20%;">📎</div>
      <div class="doodle-squiggle" style="bottom: 40%; left: 10%;">〰️</div>
      <div class="doodle-paperclip" style="bottom: 15%; right: 25%;">📎</div>
    </div>

    <div class="parallax-layer layer-3" :style="{ transform: `translateY(${offset * 0.1}px)` }">
      <div class="doodle-circle" style="top: 50%; left: 50%;"></div>
      <div class="doodle-dots" style="top: 10%; right: 30%;">...</div>
      <div class="doodle-dots" style="bottom: 20%; left: 30%;">...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const offset = ref(0)

const handleScroll = () => {
  offset.value = window.pageYOffset
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.parallax-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1; /* Keep it behind everything */
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 200%;
  will-change: transform;
}

.doodle-star, .doodle-heart, .doodle-paperclip, .doodle-squiggle, .doodle-dots {
  position: absolute;
  font-family: 'Gochi Hand', cursive;
  color: #d35400; /* Matching your Guestbook Orange */
  opacity: 0.12;
  transition: color 0.3s, opacity 0.3s;
}

/* Dark Mode Overrides */
.dark-mode .doodle-star, 
.dark-mode .doodle-heart, 
.dark-mode .doodle-paperclip, 
.dark-mode .doodle-squiggle,
.dark-mode .doodle-dots {
  color: #e67e22;
  opacity: 0.08;
}

.doodle-star {
  font-size: 2.5rem;
  animation: float 6s ease-in-out infinite;
}

.doodle-heart {
  font-size: 2rem;
  transform: rotate(-15deg);
}

.doodle-paperclip {
  font-size: 1.8rem;
  transform: rotate(20deg);
}

.doodle-squiggle {
  font-size: 3rem;
  font-weight: bold;
}

.doodle-circle {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 2px dashed #d35400;
  border-radius: 50%;
  opacity: 0.05;
}

.dark-mode .doodle-circle {
  border-color: #e67e22;
  opacity: 0.03;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

@media (max-width: 768px) {
  .doodle-star { font-size: 1.5rem; }
  .doodle-circle { width: 80px; height: 80px; }
}
</style>