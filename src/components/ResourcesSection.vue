<template>
  <section id="resources" class="resources-section section">
    <div class="paper-texture"></div>
    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Resources</h2>
        <div class="title-underline"></div>
      </div>
      <div class="resources-grid">
        <a
          v-for="(resource, index) in resources"
          :key="index"
          :href="resource.url"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-card animate-on-scroll"
          :class="{ 'visible': isVisible }"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="resource-icon">{{ resource.icon }}</div>
          <h3 class="resource-title">{{ resource.title }}</h3>
          <p class="resource-description">{{ resource.description }}</p>
          <div class="resource-link">
            <span>Visit</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const resources = [
  {
    icon: '📚',
    title: 'My Blog',
    description: 'Articles about web development, design, and technology',
    url: 'https://example.com/blog'
  },
  {
    icon: '💻',
    title: 'GitHub Repos',
    description: 'Open source projects and code samples',
    url: 'https://github.com'
  },
  {
    icon: '📖',
    title: 'Learning Resources',
    description: 'Curated list of tutorials and courses',
    url: 'https://example.com/resources'
  },
  {
    icon: '🎨',
    title: 'Design Portfolio',
    description: 'UI/UX designs and creative work',
    url: 'https://example.com/design'
  },
  {
    icon: '🎥',
    title: 'YouTube Channel',
    description: 'Coding tutorials and tech reviews',
    url: 'https://youtube.com'
  },
  {
    icon: '📝',
    title: 'Medium Articles',
    description: 'Technical writing and thought pieces',
    url: 'https://medium.com'
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
})
</script>

<style scoped>
.resources-section {
  background: var(--soft-white);
}

.dark-mode .resources-section {
  background: var(--dark-bg);
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

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.resource-card {
  background: white;
  border-radius: 20px;
  padding: 35px;
  text-align: center;
  text-decoration: none;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.resource-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.dark-mode .resource-card {
  background: var(--dark-card);
}

.resource-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 89, 152, 0.1), transparent);
  transition: left 0.5s ease;
}

.resource-card:hover::before {
  left: 100%;
}

.resource-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(59, 89, 152, 0.2);
  border-color: var(--primary-blue);
}

.resource-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.resource-card:hover .resource-icon {
  transform: scale(1.2) rotate(10deg);
}

.resource-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--deep-charcoal);
  margin-bottom: 12px;
}

.dark-mode .resource-title {
  color: var(--soft-white);
}

.resource-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.dark-mode .resource-description {
  color: #aaa;
}

.resource-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.resource-card:hover .resource-link {
  gap: 15px;
  color: var(--warm-accent);
}

.resource-link svg {
  transition: transform 0.3s ease;
}

.resource-card:hover .resource-link svg {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .resources-grid {
    grid-template-columns: 1fr;
  }

  .resource-card {
    padding: 30px;
  }

  .resource-icon {
    font-size: 3rem;
  }

  .resource-title {
    font-size: 1.2rem;
  }
}
</style>
