<template>
  <section id="projects" class="projects-section section">
    <div class="paper-texture"></div>
    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Projects</h2>
        <div class="title-underline"></div>
      </div>
      <div class="projects-carousel-wrapper">
        <div class="projects-carousel" :style="{ animationPlayState: isPaused ? 'paused' : 'running' }">
          <div
            v-for="(project, index) in [...projects, ...projects]"
            :key="index"
            class="project-card glassmorphism"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="tech-stack">
                <span v-for="tech in project.tech" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div class="floating-decoration deco-1"></div>
            <div class="floating-decoration deco-2"></div>
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
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management.',
    tech: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Task Management App',
    description: 'Collaborative task tracking application with team features.',
    tech: ['React', 'Express', 'PostgreSQL']
  },
  {
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization with forecasting capabilities.',
    tech: ['Vue.js', 'API Integration', 'Charts.js']
  },
  {
    image: 'https://images.pexels.com/photos/374820/pexels-photo-374820.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for tracking social media engagement metrics.',
    tech: ['React', 'D3.js', 'Firebase']
  },
  {
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Portfolio Builder',
    description: 'Create stunning portfolios with drag-and-drop interface.',
    tech: ['Vue.js', 'Tailwind', 'Supabase']
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

  const section = document.getElementById('projects')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
.projects-section {
  background: linear-gradient(135deg, #e8eef5 0%, var(--soft-white) 100%);
  overflow: hidden;
}

.dark-mode .projects-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 3rem;
  color: var(--deep-charcoal);
  margin-bottom: 20px;
}

.dark-mode .section-title {
  color: var(--soft-white);
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-blue), var(--warm-accent));
  margin: 0 auto;
  border-radius: 2px;
}

.projects-carousel-wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
  padding: 20px 0;
}

.projects-carousel {
  display: flex;
  gap: 30px;
  animation: scroll 40s linear infinite;
  width: max-content;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.project-card {
  min-width: 380px;
  max-width: 380px;
  padding: 0;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-15px) scale(1.05);
  box-shadow: 0 20px 50px rgba(59, 89, 152, 0.3);
}

.project-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: 25px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.dark-mode .project-content {
  background: rgba(42, 42, 42, 0.9);
}

.project-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--deep-charcoal);
  margin-bottom: 12px;
}

.dark-mode .project-title {
  color: var(--soft-white);
}

.project-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.dark-mode .project-description {
  color: #aaa;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  padding: 6px 14px;
  background: var(--primary-blue);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--warm-accent);
  transform: scale(1.05);
}

.floating-decoration {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-blue), var(--warm-accent));
  opacity: 0.15;
  pointer-events: none;
}

.deco-1 {
  width: 80px;
  height: 80px;
  top: -20px;
  right: -20px;
}

.deco-2 {
  width: 60px;
  height: 60px;
  bottom: -15px;
  left: -15px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .project-card {
    min-width: 300px;
    max-width: 300px;
  }

  .project-image {
    height: 180px;
  }

  .project-content {
    padding: 20px;
  }

  .project-title {
    font-size: 1.2rem;
  }
}
</style>
