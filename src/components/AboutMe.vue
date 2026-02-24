<template>
  <section id="about" class="about-section">
    <div class="paper-texture"></div>
    <div class="notebook-lines"></div>

    <div class="container about-container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title handwritten">About Me </h2>
        <div class="title-scribble"></div>
      </div>
      
      <div class="about-content animate-on-scroll" :class="{ 'visible': isVisible }">
        <div class="journal-entry">
          <div class="tape tape-top"></div>
          <div class="ripped-edge-top"></div>
          
          <div class="entry-content">
            <p class="intro-text marker-highlight">
              Hi! I’m a BSIT student with a strong interest in web development and building responsive, user-friendly applications. 
              I enjoy turning ideas into functional systems and continuously improving my technical skills through hands-on projects.
            </p>
            
            <p class="body-text">
              I have experience working with frontend and backend development, as well as databases like <span class="ink-bold">SQL and MongoDB</span>. 
              I use tools such as Visual Studio Code to build and test applications, and I enjoy creating clean, modern interfaces that provide smooth user experiences.
            </p>
            
            <p class="body-text">
              I prefer solving problems independently before reviewing solutions because it strengthens my logical thinking and debugging skills. 
              I value continuous learning, attention to detail, and writing clean, maintainable code.
            </p>
            
            <div class="goal-sticky">
              <p class="highlight-text">
                "My goal is to grow as a developer and build impactful digital solutions that are both functional and visually engaging."
              </p>
              <div class="pin"></div>
            </div>
          </div>
          
          <div class="ripped-edge-bottom"></div>
        </div>

        <div class="about-decorations">
          <div class="doodle doodle-1">✨</div>
          <div class="doodle doodle-2">🚀</div>
          <div class="doodle doodle-3">🎨</div>
          <svg class="scribble-svg" viewBox="0 0 100 100">
            <path d="M10,50 Q40,10 90,50 T10,90" fill="none" stroke="currentColor" stroke-width="2" />
          </svg>
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
        if (entry.isIntersecting) isVisible.value = true
      })
    },
    { threshold: 0.15 }
  )

  const section = document.getElementById('about')
  if (section) observer.observe(section)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Architects_Daughter&display=swap');

.about-section {
  --ink: #222;
  --paper: #fdfcf0;
  --accent: #d35400;
  --highlight: #ffeaa7;
  
  background-color: #f4f1ea;
  position: relative;
  overflow: hidden;
  padding: 120px 0;
  min-height: 100vh;
}

.dark-mode .about-section {
  --ink: #e0e0e0;
  --paper: #2d2d2d;
  --accent: #ff7e2e;
  --highlight: #4d4321;
  background-color: #1a1a1a;
}

.notebook-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 100% 30px;
  pointer-events: none;
}

.handwritten {
  font-family: 'Gochi Hand', cursive;
  font-size: 3.5rem;
  color: var(--ink);
}

.title-scribble {
  width: 150px;
  height: 8px;
  background: var(--accent);
  margin: -10px auto 40px;
  border-radius: 40% 60% 40% 60%;
  opacity: 0.6;
}

.journal-entry {
  background: var(--paper);
  padding: 60px 40px;
  position: relative;
  box-shadow: 5px 10px 30px rgba(0,0,0,0.05);
  max-width: 850px;
  margin: 0 auto;
  transform: rotate(1deg);
}

.ripped-edge-top, .ripped-edge-bottom {
  position: absolute;
  left: 0;
  width: 100%;
  height: 15px;
  background-size: 30px 15px;
}

.ripped-edge-top {
  top: -14px;
  background-image: radial-gradient(circle at 15px -5px, transparent 15px, var(--paper) 16px);
}

.ripped-edge-bottom {
  bottom: -14px;
  background-image: radial-gradient(circle at 15px 20px, transparent 15px, var(--paper) 16px);
}

.entry-content {
  font-family: 'Architects Daughter', cursive;
  color: var(--ink);
}

.marker-highlight {
  background-image: linear-gradient(transparent 60%, var(--highlight) 60%);
  display: inline;
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: bold;
}

.body-text {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-top: 25px;
}

.ink-bold {
  color: var(--accent);
  font-weight: bold;
  text-decoration: underline;
}

.goal-sticky {
  background: #fff9a1;
  padding: 30px;
  margin-top: 40px;
  transform: rotate(-2deg);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
  position: relative;
}

.dark-mode .goal-sticky {
  background: #3e3b20;
  color: #fff;
}

.pin {
  width: 15px;
  height: 15px;
  background: #e74c3c;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.highlight-text {
  font-style: italic;
  font-size: 1.2rem;
  text-align: center;
}

.tape {
  position: absolute;
  width: 100px;
  height: 30px;
  background: rgba(194, 178, 128, 0.3);
  top: -15px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
}

.doodle {
  position: absolute;
  font-size: 2.5rem;
  opacity: 0.3;
  animation: float 5s ease-in-out infinite;
}

.doodle-1 { top: 10%; left: -50px; }
.doodle-2 { bottom: 20%; right: -60px; }
.doodle-3 { top: 50%; left: -70px; }

.scribble-svg {
  position: absolute;
  width: 200px;
  color: var(--accent);
  opacity: 0.1;
  right: -100px;
  top: 0;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@media (max-width: 768px) {
  .journal-entry { padding: 40px 20px; width: 95%; }
  .handwritten { font-size: 2.5rem; }
  .doodle { display: none; }
}
</style>