<template>
  <section id="education" class="education-section">
    <div class="paper-texture"></div>
    <div class="notebook-lines"></div>

    <div class="container education-container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title handwritten">Academic Background</h2>
        <div class="title-scribble"></div>
      </div>

      <div class="education-grid">
        <div
          v-for="(edu, index) in educationData"
          :key="index"
          class="education-card animate-on-scroll"
          :class="['visible', `tilt-${(index % 3) + 1}`]"
          :style="{ transitionDelay: `${index * 0.2}s` }"
        >
          <div :class="index % 2 === 0 ? 'tape-accent' : 'push-pin'"></div>

          <div class="card-header">
            <div class="school-logo">
              <img :src="edu.logo" :alt="edu.school" />
            </div>
          </div>

          <div class="card-body">
            <h3 class="degree">{{ edu.degree }}</h3>
            <p class="school-name marker-highlight">{{ edu.school }}</p>
            <p class="year-label">{{ edu.year }}</p>
            
            <div class="description-box">
              <p class="description-text">{{ edu.description }}</p>
              <div class="corner-fold"></div>
            </div>
          </div>
          
          <div class="card-doodle" v-if="index === 0">📚</div>
          <div class="card-doodle" v-if="index === 1">🏅</div>
          <div class="card-doodle" v-if="index === 2">🛠️</div>
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
    logo: 'https://ramconnect.apc.edu.ph/logo/nu-apc-cons-logo.png',
    degree: 'BS Information Technology',
    school: 'Asia Pacific College',
    year: '2024 - Present',
    description: 'Developing skills in software development, networking, and system administration.'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFw2YGzVNEkPY44czVR7z8jkvPyZsj36UjGA&s',
    degree: 'TVL – ICT Strand',
    school: 'SHS in San Nicholas III',
    year: '2022 - 2024',
    description: 'Graduated with High Honors. Gained foundational training in computer systems.'
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUgQDgqa0ybPHlL0BKBoiwqCv3z3y89Qxug&s',
    degree: 'Computer System Servicing NC II',
    school: 'TESDA Certification',
    year: '2023',
    description: 'Certified proficiency in hardware troubleshooting and technical support.'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) isVisible.value = true })
  }, { threshold: 0.1 })
  const section = document.getElementById('education')
  if (section) observer.observe(section)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Architects_Daughter&display=swap');

.education-section {
  --paper-bg: #fff;
  --text-main: #333;
  --accent-color: #d35400;
  --tape-color: rgba(173, 216, 230, 0.4);
  
  background-color: #e5e5e5;
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
}

.dark-mode .education-section {
  --paper-bg: #2d2d2d;
  --text-main: #e0e0e0;
  --accent-color: #ff7e2e;
  --tape-color: rgba(255, 255, 255, 0.1);
  background-color: #1a1a1a;
}

.handwritten {
  font-family: 'Gochi Hand', cursive;
  font-size: 3.5rem;
  color: var(--text-main);
  text-align: center;
}

.title-scribble {
  width: 180px;
  height: 6px;
  background: var(--accent-color);
  margin: -10px auto 60px;
  border-radius: 50%;
  opacity: 0.6;
}

.education-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.education-card {
  background: var(--paper-bg);
  width: 340px;
  padding: 40px 25px 25px;
  position: relative;
  box-shadow: 5px 10px 20px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateY(30px);
}

.education-card.visible { opacity: 1; transform: translateY(0); }

.education-card:hover {
  transform: scale(1.05) rotate(0deg) !important;
  z-index: 10;
  box-shadow: 10px 15px 30px rgba(0,0,0,0.15);
}

.degree {
  font-family: 'Gochi Hand', cursive;
  font-size: 1.6rem;
  color: var(--text-main);
  margin-top: 15px;
  line-height: 1.2;
}

.school-name {
  font-family: 'Architects Daughter', cursive;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--accent-color);
  margin: 10px 0;
}

.marker-highlight {
  display: inline-block;
  padding: 0 5px;
  background: linear-gradient(120deg, rgba(255, 234, 167, 0.4) 0%, rgba(255, 234, 167, 0.4) 100%);
}

.year-label {
  font-family: 'Architects Daughter', cursive;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 15px;
}

.description-text {
  font-family: 'Architects Daughter', cursive;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-main);
}

.school-logo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  padding: 10px;
  background: white;
  border: 1px solid #eee;
  transform: rotate(-3deg);
}

.school-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.tape-accent {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 100px;
  height: 30px;
  background: var(--tape-color);
  backdrop-filter: blur(1px);
}

.push-pin {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 15px;
  background: #e74c3c;
  border-radius: 50%;
  box-shadow: inset -2px -2px 4px rgba(0,0,0,0.3);
}

.card-doodle {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.5rem;
  opacity: 0.4;
}

.tilt-1 { transform: rotate(-2deg); }
.tilt-2 { transform: rotate(2deg); }
.tilt-3 { transform: rotate(-1deg); }

@media (max-width: 768px) {
  .education-card { width: 100%; max-width: 320px; }
  .handwritten { font-size: 2.5rem; }
}
</style>