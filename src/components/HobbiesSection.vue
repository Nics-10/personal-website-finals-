<template>
  <section id="hobbies" class="hobbies-section section">
    <div class="paper-texture"></div>
    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Hobbies & Interests</h2>
        <div class="title-underline"></div>
      </div>
      <div class="hobbies-grid">
        <div
          v-for="(hobby, index) in hobbies"
          :key="index"
          class="hobby-item animate-on-scroll"
          :class="{ 'visible': isVisible }"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="hobby-icon">{{ hobby.icon }}</div>
          <h3 class="hobby-title">{{ hobby.title }}</h3>
          <p class="hobby-description">{{ hobby.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const hobbies = [
  {
    icon: '💻',
    title: 'Coding',
    description: 'Building side projects and exploring new technologies'
  },
  {
    icon: '📚',
    title: 'Reading',
    description: 'Tech blogs, sci-fi novels, and programming books'
  },
  {
    icon: '🎮',
    title: 'Gaming',
    description: 'Strategy games and puzzle solving'
  },
  {
    icon: '📷',
    title: 'Photography',
    description: 'Capturing moments and beautiful landscapes'
  },
  {
    icon: '✈️',
    title: 'Travel',
    description: 'Exploring new places and cultures'
  },
  {
    icon: '🎵',
    title: 'Music',
    description: 'Listening to various genres and attending concerts'
  },
  {
    icon: '🎨',
    title: 'Design',
    description: 'UI/UX design and digital art'
  },
  {
    icon: '🏃',
    title: 'Fitness',
    description: 'Running, yoga, and staying active'
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

  const section = document.getElementById('hobbies')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
.hobbies-section {
  background: var(--soft-white);
}

.dark-mode .hobbies-section {
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

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.hobby-item {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.4s ease;
  opacity: 0;
  transform: scale(0.8) rotate(-5deg);
  cursor: pointer;
  border: 2px solid transparent;
}

.hobby-item.visible {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.dark-mode .hobby-item {
  background: var(--dark-card);
}

.hobby-item:hover {
  transform: translateY(-10px) rotate(3deg);
  box-shadow: 0 15px 40px rgba(59, 89, 152, 0.2);
  border-color: var(--primary-blue);
}

.hobby-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  animation: bounce 2s ease-in-out infinite;
}

.hobby-item:hover .hobby-icon {
  animation: spin 0.6s ease-in-out;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

.hobby-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--deep-charcoal);
  margin-bottom: 10px;
}

.dark-mode .hobby-title {
  color: var(--soft-white);
}

.hobby-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.dark-mode .hobby-description {
  color: #aaa;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .hobbies-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .hobby-item {
    padding: 30px 20px;
  }

  .hobby-icon {
    font-size: 3rem;
  }

  .hobby-title {
    font-size: 1.2rem;
  }
}
</style>
