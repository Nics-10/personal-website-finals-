<template>
  <section id="education" class="education-section section">
    <div class="paper-texture"></div>
    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Education</h2>
        <div class="title-underline"></div>
      </div>
      <div class="education-grid">
        <div
          v-for="(edu, index) in educationData"
          :key="index"
          class="education-card animate-on-scroll"
          :class="{ 'visible': isVisible }"
          :style="{ transitionDelay: `${index * 0.2}s` }"
        >
          <div class="card-header">
            <div class="school-logo">
              <img :src="edu.logo" :alt="edu.school" />
            </div>
          </div>
          <div class="card-body">
            <h3 class="degree">{{ edu.degree }}</h3>
            <p class="school">{{ edu.school }}</p>
            <p class="year">{{ edu.year }}</p>
            <p class="description">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const educationData = [
  {
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=100',
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    year: '2018 - 2022',
    description: 'Focused on software engineering, algorithms, and web development. Graduated with honors.'
  },
  {
    logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=100',
    degree: 'Master of Science in Software Engineering',
    school: 'Graduate School',
    year: '2022 - 2024',
    description: 'Advanced study in distributed systems, cloud architecture, and modern development practices.'
  },
  {
    logo: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=100',
    degree: 'Certification in Full-Stack Development',
    school: 'Online Academy',
    year: '2023',
    description: 'Comprehensive training in modern web technologies including React, Node.js, and cloud services.'
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

  const section = document.getElementById('education')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
.education-section {
  background: var(--soft-white);
}

.dark-mode .education-section {
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

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.education-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(50px) scale(0.9);
  border: 2px solid transparent;
}

.education-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.dark-mode .education-card {
  background: var(--dark-card);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
}

.education-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  border-color: var(--primary-blue);
}

.card-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.school-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--primary-blue);
  box-shadow: 0 4px 15px rgba(59, 89, 152, 0.3);
}

.school-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  text-align: center;
}

.degree {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--deep-charcoal);
  margin-bottom: 10px;
  line-height: 1.4;
}

.dark-mode .degree {
  color: var(--soft-white);
}

.school {
  font-size: 1.1rem;
  color: var(--primary-blue);
  font-weight: 500;
  margin-bottom: 5px;
}

.year {
  font-size: 0.95rem;
  color: var(--warm-accent);
  font-weight: 500;
  margin-bottom: 15px;
  font-style: italic;
}

.description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  text-align: center;
}

.dark-mode .description {
  color: #aaa;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }

  .education-card {
    padding: 25px;
  }

  .degree {
    font-size: 1.1rem;
  }
}
</style>
