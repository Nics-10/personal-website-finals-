<template>
  <section id="projects" class="projects-section">
    <div class="paper-texture"></div>
    <div class="notebook-lines"></div>

    <div class="container project-container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title handwritten">My Works & Creations</h2>
        <div class="title-scribble"></div>
      </div>

      <div class="projects-carousel-wrapper">
        <div class="projects-carousel" :style="{ animationPlayState: isPaused ? 'paused' : 'running' }">
          <div
            v-for="(project, index) in [...projects, ...projects]"
            :key="index"
            class="project-card scrap-paper"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
          >
            <div class="washi-tape"></div>

            <div class="project-image-wrapper">
              <img :src="project.image" :alt="project.title" class="project-img" />
              <div class="photo-overlay"></div>
            </div>

            <div class="project-content">
              <h3 class="project-name">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              
              <div class="tech-scrapbook">
                <span v-for="tech in project.tech" :key="tech" class="tech-label">
                  #{{ tech }}
                </span>
              </div>
            </div>
            
            <div class="corner-fold"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const isPaused = ref(false)

const projects = [
  {
    image: 'https://i.pinimg.com/736x/98/1c/9b/981c9b8b6e92fd491e0ab62f5dcae4fc.jpg',
    title: 'KusinaTips',
    description: 'A Taglish Filipino recipe app designed to reduce food waste by suggesting local dishes.',
    tech: ['OutSystems', 'Sustainability', 'Filipino UX']
  },
  {
    image: 'https://i.pinimg.com/736x/7d/75/20/7d7520062c4911d9c91779cffdd6354f.jpg',
    title: 'Budge-IT',
    description: 'An expense tracker helping students visualize spending habits and financial awareness.',
    tech: ['FinTech', 'DataViz', 'Analytics']
  },
  {
    image: 'https://i.pinimg.com/736x/6e/ac/a7/6eaca7673c5d0514ce7e1b50e905ffe2.jpg',
    title: 'Mindle',
    description: 'A mental health intervention tool providing digital support for students facing anxiety.',
    tech: ['MentalHealth', 'Wellness', 'Impact']
  },
  {
    image: 'https://i.pinimg.com/736x/11/49/36/114936d2c0da76416766cb9b8a0be57b.jpg',
    title: 'HappyPaws',
    description: 'A hybrid-database clinic system solving scheduling conflicts and pet medical records.',
    tech: ['Vue.js', 'MySQL', 'MongoDB']
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) isVisible.value = true })
  }, { threshold: 0.1 })
  const section = document.getElementById('projects')
  if (section) observer.observe(section)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Architects_Daughter&display=swap');

.projects-section {
  --journal-paper: #fff;
  --journal-ink: #333;
  --tape-color: rgba(211, 84, 0, 0.3); /* Biscoff orange tape */
  
  background-color: #f0ede5;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.dark-mode .projects-section {
  --journal-paper: #2d2d2d;
  --journal-ink: #e0e0e0;
  --tape-color: rgba(255, 255, 255, 0.1);
  background-color: #1a1a1a;
}

.handwritten {
  font-family: 'Gochi Hand', cursive;
  font-size: 3.5rem;
  color: var(--journal-ink);
  text-align: center;
}

.title-scribble {
  width: 200px;
  height: 8px;
  background: #d35400;
  margin: -10px auto 50px;
  border-radius: 50%;
  opacity: 0.5;
}

.projects-carousel-wrapper {
  overflow: hidden;
  padding: 40px 0;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.projects-carousel {
  display: flex;
  gap: 50px;
  animation: scroll 40s linear infinite;
  width: max-content;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.project-card {
  background: var(--journal-paper);
  min-width: 350px;
  max-width: 350px;
  padding: 15px;
  position: relative;
  box-shadow: 8px 8px 0px rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0,0,0,0.05);
  transform: rotate(calc(var(--index, 0) * 1deg));
}

.project-card:nth-child(even) { transform: rotate(-1.5deg); }
.project-card:nth-child(odd) { transform: rotate(1.5deg); }

.project-card:hover {
  transform: translateY(-10px) rotate(0deg) scale(1.03) !important;
  z-index: 10;
  box-shadow: 15px 20px 30px rgba(0,0,0,0.1);
}

/* Washi Tape Decoration */
.washi-tape {
  position: absolute;
  top: -15px;
  left: 20%;
  width: 80px;
  height: 25px;
  background: var(--tape-color);
  backdrop-filter: blur(1px);
  z-index: 5;
  transform: rotate(-5deg);
}

.project-image-wrapper {
  width: 100%;
  height: 200px;
  background: #eee;
  overflow: hidden;
  position: relative;
  border: 8px solid white; /* Polaroid frame effect */
  box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
}

.dark-mode .project-image-wrapper { border-color: #3d3d3d; }

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(20%);
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.1);
  filter: sepia(0%);
}

.project-content {
  padding: 20px 10px;
  font-family: 'Architects Daughter', cursive;
}

.project-name {
  font-size: 1.5rem;
  color: var(--journal-ink);
  margin-bottom: 10px;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--journal-ink);
  line-height: 1.5;
  margin-bottom: 20px;
  opacity: 0.8;
}

/* Tech Tags as Hand-written notes */
.tech-scrapbook {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-label {
  font-family: 'Gochi Hand', cursive;
  font-size: 1rem;
  color: #d35400;
  background: rgba(255, 234, 167, 0.3);
  padding: 2px 8px;
  border-radius: 5px;
}

.dark-mode .tech-label { color: #ff7e2e; background: rgba(255,255,255,0.05); }

.corner-fold {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 20px 20px;
  border-color: transparent transparent rgba(0,0,0,0.1) transparent;
}

@media (max-width: 768px) {
  .project-card { min-width: 280px; }
  .handwritten { font-size: 2.5rem; }
}
</style>