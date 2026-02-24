<template>
  <section id="about" class="about-section section">
    <div class="paper-texture"></div>
    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title">About Me</h2>
        <div class="title-underline"></div>
      </div>
      <div class="about-content animate-on-scroll" :class="{ 'visible': isVisible }">
        <div class="about-text">
          <p class="intro-text">
            Hello! I'm a passionate developer and designer with a love for creating
            beautiful and functional digital experiences. My journey in technology
            began several years ago, and I've been constantly learning and growing ever since.
          </p>
          <p>
            I specialize in full-stack web development, with expertise in modern
            frameworks and technologies. I believe in writing clean, maintainable code
            and creating user-friendly interfaces that make a difference.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing
            to open-source projects, or sharing my knowledge with the developer community.
          </p>
        </div>
        <div class="about-decorations">
          <div class="deco-element element-1">✦</div>
          <div class="deco-element element-2">★</div>
          <div class="deco-element element-3">✧</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  const section = document.getElementById('about')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
.about-section {
  background: linear-gradient(135deg, #f5f7fa 0%, var(--soft-white) 100%);
  position: relative;
}

.dark-mode .about-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #252525 100%);
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
  position: relative;
  display: inline-block;
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

.about-content {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s ease 0.3s;
}

.about-content.visible {
  opacity: 1;
  transform: translateX(0);
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 25px;
  text-align: justify;
}

.dark-mode .about-text p {
  color: #bbb;
}

.intro-text {
  font-size: 1.25rem !important;
  color: var(--deep-charcoal) !important;
  font-weight: 500;
}

.dark-mode .intro-text {
  color: var(--soft-white) !important;
}

.about-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.deco-element {
  position: absolute;
  font-size: 3rem;
  color: var(--warm-accent);
  opacity: 0.2;
  animation: float 3s ease-in-out infinite;
}

.element-1 {
  top: -40px;
  right: -50px;
  animation-delay: 0s;
}

.element-2 {
  bottom: -30px;
  left: -40px;
  animation-delay: 1s;
}

.element-3 {
  top: 50%;
  right: -60px;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .about-text p {
    font-size: 1rem;
    text-align: left;
  }

  .intro-text {
    font-size: 1.1rem !important;
  }

  .deco-element {
    font-size: 2rem;
  }
}
</style>
