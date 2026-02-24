<template>
  <div class="loading-intro">
    <div class="paper-texture"></div>
    <div class="intro-content">
      <h1 class="name-animation">Your Name</h1>
      <div class="doodles">
        <div class="doodle star star-1">✦</div>
        <div class="doodle star star-2">★</div>
        <div class="doodle star star-3">✧</div>
        <div class="doodle line line-1"></div>
        <div class="doodle line line-2"></div>
        <div class="doodle circle circle-1"></div>
        <div class="doodle squiggle"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineEmits } from 'vue'

const emit = defineEmits(['loaded'])

onMounted(() => {
  setTimeout(() => {
    emit('loaded')
  }, 3000)
})
</script>

<style scoped>
.loading-intro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, var(--soft-white) 0%, #e8e8e8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 0.5s ease 2.5s forwards;
}

.intro-content {
  position: relative;
  z-index: 2;
}

.name-animation {
  font-size: 4rem;
  font-weight: bold;
  color: var(--primary-blue);
  animation: nameReveal 1s ease-out forwards;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

@keyframes nameReveal {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-5deg);
  }
  50% {
    transform: scale(1.1) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.doodles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.doodle {
  position: absolute;
  animation-fill-mode: forwards;
}

.star {
  font-size: 2rem;
  color: var(--warm-accent);
  animation: starPop 0.6s ease-out forwards;
}

.star-1 {
  top: -50px;
  left: -80px;
  animation-delay: 0.5s;
}

.star-2 {
  top: -30px;
  right: -100px;
  animation-delay: 0.7s;
}

.star-3 {
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0.9s;
}

@keyframes starPop {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(1.3) rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
}

.line {
  width: 100px;
  height: 3px;
  background: var(--primary-blue);
  animation: lineSlide 0.8s ease-out forwards;
}

.line-1 {
  top: 20%;
  left: -150px;
  animation-delay: 1s;
  transform: rotate(-20deg);
}

.line-2 {
  bottom: 30%;
  right: -150px;
  animation-delay: 1.2s;
  transform: rotate(20deg);
}

@keyframes lineSlide {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 1;
    width: 100px;
  }
}

.circle {
  width: 60px;
  height: 60px;
  border: 4px solid var(--warm-accent);
  border-radius: 50%;
  animation: circleDraw 1s ease-out forwards;
}

.circle-1 {
  top: 60%;
  left: -100px;
  animation-delay: 1.4s;
}

@keyframes circleDraw {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  100% {
    opacity: 0.6;
    transform: scale(1) rotate(360deg);
  }
}

.squiggle {
  width: 80px;
  height: 80px;
  border: 3px solid var(--primary-blue);
  border-radius: 50% 40% 60% 50%;
  animation: squiggleWiggle 1s ease-out forwards;
  bottom: 20%;
  right: -120px;
  animation-delay: 1.6s;
}

@keyframes squiggleWiggle {
  0% {
    opacity: 0;
    transform: rotate(0deg) scale(0);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    opacity: 0.5;
    transform: rotate(360deg) scale(1);
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

@media (max-width: 768px) {
  .name-animation {
    font-size: 2.5rem;
  }

  .star {
    font-size: 1.5rem;
  }

  .line {
    width: 60px;
  }

  .circle {
    width: 40px;
    height: 40px;
  }

  .star-1, .star-2, .star-3,
  .line-1, .line-2,
  .circle-1, .squiggle {
    display: none;
  }
}
</style>
