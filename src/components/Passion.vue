<template>
  <section id="hobbies-goals" class="scrapbook-container">
    <div class="board-texture"></div>
    
    <div class="container main-layout animate-on-scroll" :class="{ 'visible': isVisible }">
      
      <div class="mood-board">
        <div class="header-wrap">
          <h2 class="handwritten-title">My Passions</h2>
          <svg class="header-scribble" viewBox="0 0 100 20"><path d="M5 15 Q 50 0 95 15" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        </div>

        <div class="scrap-grid">
          <div class="scrap-item photo-card tilt-1">
            <div class="tape-piece washi-pattern"></div>
            <div class="scrap-inner">
              <span class="scrap-emoji">🏍️</span>
              <h3>Motorcycle Therapy</h3>
              <p>The open road is my reset button.</p>
            </div>
          </div>

          <div class="scrap-item paper-scrap tilt-2">
            <div class="pin-head green"></div>
            <div class="scrap-inner">
              <span class="scrap-emoji">📸</span>
              <h3>Capturing Life</h3>
              <p>Photography & editing memories.</p>
            </div>
          </div>

          <div class="scrap-item photo-card tilt-3">
            <div class="tape-piece washi-blue"></div>
            <div class="scrap-inner">
              <span class="scrap-emoji">🎮</span>
              <h3>Gaming</h3>
              <p>Strategy & late-night missions.</p>
            </div>
          </div>

          <div class="scrap-item paper-scrap tilt-1">
            <div class="pin-head red"></div>
            <div class="scrap-inner">
              <span class="scrap-emoji">🐱</span>
              <h3>Cat Parent</h3>
              <p>Spending quality time with my feline.</p>
            </div>
            <div class="paw-doodle">🐾</div>
          </div>
        </div>
      </div>

      <div class="side-notes">
        <div class="sticky-note">
          <div class="sticky-content">
            <div class="pin-head gold center"></div>
            <h2 class="note-title">Daily Intentions</h2>
            <blockquote class="cursive-quote">
              "Live life to the fullest so I won't live with regrets."
            </blockquote>
            <div class="beliefs">
              <p class="belief-item"><span class="bullet">⭐</span> Opinion ≠ Reality</p>
              <p class="belief-item"><span class="bullet">⭐</span> Challenges = Growth</p>
              <p class="belief-item"><span class="bullet">⭐</span> Buhay ay 'di karera</p>
            </div>
            <div class="corner-curl"></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) isVisible.value = true
    })
  }, { threshold: 0.1 })

  const section = document.getElementById('hobbies-goals')
  if (section) observer.observe(section)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Architects_Daughter&display=swap');

.scrapbook-container {
  --board-bg: #dcd3c9;
  --paper-bg: #fdfdfd;
  --sticky-bg: #fff9a1;
  --text-color: #444;
  --accent: #d35400;
  
  background-color: var(--board-bg);
  background-image: 
    radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0);
  background-size: 32px 32px;
  padding: 100px 20px;
  position: relative;
  min-height: 900px;
  overflow: hidden;
}


.dark-mode .scrapbook-container {
  --board-bg: #1e1e1e;
  --paper-bg: #2d2d2d;
  --sticky-bg: #3d3b2a;
  --text-color: #e0e0e0;
  --accent: #ff7e2e;
}

.main-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  max-width: 1100px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.main-layout.visible {
  opacity: 1;
  transform: translateY(0);
}


.handwritten-title {
  font-family: 'Gochi Hand', cursive;
  font-size: 3rem;
  color: var(--text-color);
  margin-bottom: 5px;
}

.header-scribble {
  width: 150px;
  color: var(--accent);
  margin-bottom: 40px;
}


.scrap-grid {
  display: grid;
  grid-template-columns: repeat(2, 240px);
  gap: 35px;
}

.scrap-item {
  background: var(--paper-bg);
  padding: 20px;
  box-shadow: 5px 10px 20px rgba(0,0,0,0.1);
  position: relative;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.photo-card {
  padding-bottom: 45px; 
  border: 1px solid rgba(0,0,0,0.05);
}

.scrap-inner h3 { 
  font-family: 'Gochi Hand', cursive;
  font-size: 1.4rem; 
  margin: 15px 0 5px; 
  color: var(--text-color); 
}

.scrap-inner p { 
  font-family: 'Architects Daughter', cursive;
  font-size: 0.9rem; 
  color: var(--text-color); 
  opacity: 0.8;
}

.sticky-note {
  width: 320px;
  position: relative;
}

.sticky-content {
  background: var(--sticky-bg);
  padding: 50px 30px 40px;
  box-shadow: -10px 10px 25px rgba(0,0,0,0.1);
  transform: rotate(1deg);
  position: relative;
}

.note-title {
  font-family: 'Gochi Hand', cursive;
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--accent);
  text-decoration: underline wavy rgba(0,0,0,0.1);
}

.cursive-quote {
  font-family: 'Architects Daughter', cursive;
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--text-color);
  margin-bottom: 30px;
  border-left: 3px solid var(--accent);
  padding-left: 15px;
}

.belief-item {
  font-family: 'Architects Daughter', cursive;
  font-size: 1rem;
  margin: 12px 0;
  color: var(--text-color);
}

.bullet { color: var(--accent); margin-right: 8px; }

.tape-piece {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 80px;
  height: 30px;
  background: rgba(211, 84, 0, 0.2);
  backdrop-filter: blur(2px);
  z-index: 5;
}

.washi-pattern {
  background: repeating-linear-gradient(45deg, rgba(211, 84, 0, 0.2), rgba(211, 84, 0, 0.2) 10px, rgba(211, 84, 0, 0.1) 10px, rgba(211, 84, 0, 0.1) 20px);
}

.washi-blue {
  background: rgba(52, 152, 219, 0.2);
}

.pin-head {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  z-index: 10;
  box-shadow: inset -3px -3px 6px rgba(0,0,0,0.3), 2px 4px 5px rgba(0,0,0,0.2);
}
.pin-head.red { background: #e74c3c; left: 15px; }
.pin-head.green { background: #2ecc71; left: 50%; transform: translateX(-50%); }
.pin-head.gold { background: #f1c40f; left: 50%; transform: translateX(-50%); top: 15px; }

.paw-doodle {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 1.2rem;
  opacity: 0.2;
  transform: rotate(20deg);
}

.scrap-item:hover {
  transform: scale(1.05) rotate(0deg) translateY(-5px);
  z-index: 20;
}

@media (max-width: 968px) {
  .main-layout { flex-direction: column; gap: 60px; }
  .scrap-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .sticky-note { width: 100%; max-width: 350px; }
}

@media (max-width: 500px) {
  .scrap-grid { grid-template-columns: 1fr; }
}
</style>