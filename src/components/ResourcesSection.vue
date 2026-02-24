<template>
  <section id="resources" class="resources-section">
    <div class="paper-texture"></div>
    
    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title handwritten">References & Credits</h2>
        <div class="title-scribble"></div>
      </div>

      <div class="resources-grid">
        <div
          v-for="(item, index) in credits"
          :key="index"
          class="resource-card scrap-piece"
          :class="{ 'visible': isVisible, [`tilt-${(index % 3) + 1}`]: true }"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div :class="index % 2 === 0 ? 'washi-tape-small' : 'pin-head-small'"></div>

          <div class="card-inner">
            <div class="resource-icon">{{ item.icon }}</div>
            <h3 class="resource-title">{{ item.title }}</h3>
            <p class="resource-description">{{ item.description }}</p>
          </div>

          <div class="credit-label">
            <span>Verified Credit</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const credits = [
  {
    icon: '🖋️',
    title: 'Typography',
    description: 'Gochi Hand & Architects Daughter for that personal diary feel.'
  },
  {
    icon: '🖼️',
    title: 'Visuals',
    description: 'Personal photos and curated aesthetics from Pinterest.'
  },
  {
    icon: '✨',
    title: 'Doodles',
    description: 'Unicode symbols and CSS-drawn scrapbook elements.'
  },
  {
    icon: '🛠️',
    title: 'Workspace',
    description: 'Built with Vue.js, VS Code, and a lot of caffeine.'
  },
  {
    icon: '🤖',
    title: 'AI Assistance',
    description: 'Formatting and structural optimization provided by Gemini to ensure a clean, modern viewer experience.'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )

  const section = document.getElementById('resources')
  if (section) {
    observer.observe(section)
  }
  
  // Fail-safe
  setTimeout(() => { isVisible.value = true }, 1000)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Architects_Daughter&display=swap');

.resources-section {
  background-color: #e9e4d9; /* Aged paper color */
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
}

.dark-mode .resources-section {
  background-color: #1a1a1a;
}

.handwritten {
  font-family: 'Gochi Hand', cursive;
  font-size: 3.5rem;
  color: #4a443f;
  text-align: center;
}

.dark-mode .handwritten { color: #d1ccc0; }

.title-scribble {
  width: 200px;
  height: 4px;
  background: #d35400;
  margin: -5px auto 60px;
  border-radius: 50%;
  opacity: 0.5;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
}

.scrap-piece {
  background: #fff;
  padding: 30px 20px;
  position: relative;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.02);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateY(20px);
  /* Torn paper effect using clip-path */
  clip-path: polygon(2% 2%, 98% 0%, 100% 98%, 1% 100%, 0% 50%);
}

.dark-mode .scrap-piece {
  background: #2d2d2d;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
}

.scrap-piece.visible {
  opacity: 1;
  transform: translateY(0);
}

.tilt-1 { transform: rotate(-1deg); }
.tilt-2 { transform: rotate(1.5deg); }
.tilt-3 { transform: rotate(-0.5deg); }

.scrap-piece:hover {
  transform: scale(1.05) rotate(0deg) !important;
  z-index: 5;
  box-shadow: 10px 10px 25px rgba(0,0,0,0.1);
}

.card-inner {
  text-align: center;
  font-family: 'Architects Daughter', cursive;
}

.resource-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.resource-title {
  font-size: 1.4rem;
  color: #d35400;
  margin-bottom: 10px;
  font-family: 'Gochi Hand', cursive;
}

.resource-description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
}

.dark-mode .resource-description { color: #bbb; }

.washi-tape-small {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 20px;
  background: rgba(211, 84, 0, 0.2);
  backdrop-filter: blur(1px);
}

.pin-head-small {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
  background: #e74c3c;
  border-radius: 50%;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.credit-label {
  margin-top: 20px;
  border-top: 1px dashed #ccc;
  padding-top: 10px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
}

@media (max-width: 768px) {
  .section-title { font-size: 2.5rem; }
  .resources-grid { grid-template-columns: 1fr; }
}
</style>