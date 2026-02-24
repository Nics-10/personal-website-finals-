<template>
  <div class="parallax-background">
    <div class="parallax-layer layer-1" :style="{ transform: `translateY(${offset * 0.5}px)` }">
      <div class="deco-star" style="top: 10%; left: 10%;">✦</div>
      <div class="deco-star" style="top: 30%; right: 15%;">★</div>
      <div class="deco-star" style="top: 70%; left: 20%;">✧</div>
    </div>
    <div class="parallax-layer layer-2" :style="{ transform: `translateY(${offset * 0.3}px)` }">
      <div class="deco-circle" style="top: 20%; right: 10%;"></div>
      <div class="deco-circle" style="bottom: 30%; left: 15%;"></div>
    </div>
    <div class="parallax-layer layer-3" :style="{ transform: `translateY(${offset * 0.2}px)` }">
      <div class="deco-line" style="top: 40%; left: 5%;"></div>
      <div class="deco-line" style="bottom: 20%; right: 8%;"></div>
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
  z-index: 0;
  overflow: hidden;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 200%;
  will-change: transform;
}

.deco-star {
  position: absolute;
  font-size: 2.5rem;
  color: var(--warm-accent);
  opacity: 0.15;
  animation: rotate 20s linear infinite;
}

.deco-circle {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 3px solid var(--primary-blue);
  border-radius: 50%;
  opacity: 0.1;
}

.deco-line {
  position: absolute;
  width: 120px;
  height: 3px;
  background: var(--warm-accent);
  opacity: 0.15;
  transform: rotate(-30deg);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .deco-star {
    font-size: 1.5rem;
  }

  .deco-circle {
    width: 50px;
    height: 50px;
  }

  .deco-line {
    width: 80px;
  }
}
</style>
