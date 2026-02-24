<template>
  <div class="loading-intro">
    <div class="paper-texture"></div>
    
    <div class="intro-content">
      <div class="journal-wrapper">
        <h1 class="name-animation">Hi! I'm Neicha</h1>
        
        <div class="scribble-underline"></div>

        <div class="doodles">
          <span class="doodle star star-1">✧</span>
          <span class="doodle star star-2">✦</span>
          <div class="doodle circle-scratch"></div>
          <div class="doodle arrow">→</div>
          <div class="doodle cross-hatch"></div>
        </div>
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
  }, 3500)
})
</script>

<style scoped>
/* Import a handwritten font for the journal vibe */
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Indie+Flower&display=swap');

.loading-intro {
  position: fixed;
  inset: 0;
  background-color: #fdfaf0; /* Crumpled paper off-white */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  animation: fadeOut 0.6s ease 3s forwards;
}

/* Paper Grain Texture */
.paper-texture {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  pointer-events: none;
  background-image: url("https://www.transparenttextures.com/patterns/p6.png");
}

.intro-content {
  position: relative;
  z-index: 2;
}

.journal-wrapper {
  position: relative;
  padding: 20px;
}

.name-animation {
  font-family: 'Gochi Hand', cursive;
  font-size: 5rem;
  color: #2c3e50; /* Ink blue/black */
  margin: 0;
  transform: rotate(-2deg);
  animation: inkFlow 0.8s ease-out forwards;
}

/* Scribble Underline Animation */
.scribble-underline {
  height: 6px;
  background: #3498db;
  width: 0;
  margin-top: -10px;
  border-radius: 40% 60% 30% 70%;
  transform: rotate(1deg);
  animation: drawLine 0.6s ease-out 0.8s forwards;
  opacity: 0.7;
}

/* Doodles */
.doodle {
  position: absolute;
  font-family: 'Indie Flower', crossorigin;
  opacity: 0;
}

.star {
  font-size: 2.5rem;
  color: #f39c12;
}

.star-1 {
  top: -40px;
  left: -30px;
  animation: scratchIn 0.4s ease-out 1.2s forwards;
}

.star-2 {
  bottom: -20px;
  right: -20px;
  animation: scratchIn 0.4s ease-out 1.4s forwards;
}

.circle-scratch {
  width: 80px;
  height: 80px;
  border: 3px solid #e74c3c;
  border-radius: 55% 45% 60% 40% / 45% 55% 40% 60%;
  top: -20px;
  right: -60px;
  transform: rotate(15deg);
  animation: scratchIn 0.5s ease-out 1.8s forwards;
}

.arrow {
  font-size: 3rem;
  color: #2c3e50;
  left: -80px;
  bottom: 0;
  transform: rotate(-15deg);
  animation: scratchIn 0.5s ease-out 2.1s forwards;
}

@keyframes inkFlow {
  0% { opacity: 0; transform: scale(0.9) rotate(-5deg); filter: blur(5px); }
  100% { opacity: 1; transform: scale(1) rotate(-2deg); filter: blur(0); }
}

@keyframes drawLine {
  from { width: 0; opacity: 0; }
  to { width: 110%; opacity: 0.7; }
}

@keyframes scratchIn {
  0% { 
    opacity: 0; 
    transform: scale(0) rotate(-20deg); 
  }
  70% { 
    transform: scale(1.2) rotate(10deg); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1) rotate(var(--rot, 0deg)); 
  }
}

@keyframes fadeOut {
  to { opacity: 0; visibility: hidden; }
}

@media (max-width: 768px) {
  .name-animation { font-size: 3rem; }
  .circle-scratch, .arrow { display: none; }
}
</style>