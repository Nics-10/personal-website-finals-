<template>
  <nav class="navigation" :class="{ 'scrolled': isScrolled, 'dark-mode': isDarkMode }">
    <div class="nav-paper-texture"></div>
    
    <div class="nav-container">
      <div class="nav-logo">
        <span class="logo-text">Neicha's Diary</span>
        <div class="logo-underline"></div>
      </div>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.id" :class="{ 'active': activeSection === link.id }">
          <a @click.prevent="scrollToSection(link.id)">
            {{ link.label }}
            <div class="nav-marker"></div>
          </a>
        </li>
      </ul>

      <div class="nav-actions">
        <button class="journal-toggle" @click="$emit('toggle-dark-mode')" :aria-label="isDarkMode ? 'Light mode' : 'Dark mode'">
          <div class="toggle-tape"></div>
          <span class="toggle-icon">{{ isDarkMode ? '☀️' : '🌙' }}</span>
        </button>

        <button class="mobile-menu-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
          <div class="burger-lines" :class="{ 'active': mobileMenuOpen }">
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
          </div>
        </button>
      </div>
    </div>

    <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
      <div class="ripped-edge"></div>
      <ul>
        <li v-for="link in navLinks" :key="link.id">
          <a @click.prevent="scrollToSection(link.id); mobileMenuOpen = false">
            {{ link.label }}
          </a>
        </li>
      </ul>
      <div class="menu-doodle">✎...</div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue'

defineProps({
  isDarkMode: Boolean
})

defineEmits(['toggle-dark-mode'])

const isScrolled = ref(false)
const activeSection = ref('hero')
const mobileMenuOpen = ref(false)

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'School' },
  { id: 'projects', label: 'Work' },
  { id: 'hobbies-goals', label: 'Passions' }, 
  { id: 'gallery', label: 'Gallery' },
  { id: 'resources', label: 'Resources' },
  { id: 'guestbook', label: 'Guestbook' }
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean)
  const scrollPosition = window.scrollY + 150

  for (const section of sections) {
    if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => { window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Architects_Daughter&display=swap');

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #fcfaf2;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 2px solid rgba(0,0,0,0.05);
}

.navigation.dark-mode {
  background: #1a1a1a;
  border-bottom-color: rgba(255,255,255,0.05);
}

.nav-paper-texture {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
  pointer-events: none;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.nav-logo {
  font-family: 'Gochi Hand', cursive;
  font-size: 1.8rem;
  color: #222;
  position: relative;
  cursor: pointer;
}

.dark-mode .nav-logo { color: #e0e0e0; }

.logo-underline {
  height: 3px;
  width: 100%;
  background: #d35400;
  transform: rotate(-1deg);
  border-radius: 20% 80% 20% 80%;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 25px;
}

.nav-links li a {
  font-family: 'Architects Daughter', cursive;
  font-size: 1.1rem;
  color: #444;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  padding: 5px 10px;
}

.dark-mode .nav-links li a { color: #b0b0b0; }

.nav-marker {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 40%;
  background: #ffeaa7;
  z-index: -1;
  opacity: 0.6;
  transition: width 0.3s ease;
  transform: skewX(-15deg);
}

.dark-mode .nav-marker { background: #4d4321; }

.nav-links li.active .nav-marker,
.nav-links li a:hover .nav-marker {
  width: 100%;
}

.nav-actions { display: flex; align-items: center; gap: 15px; }

.journal-toggle {
  background: #fff;
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.journal-toggle:hover { transform: rotate(-5deg); }

.dark-mode .journal-toggle { background: #2d2d2d; border-color: #444; }

.toggle-tape {
  position: absolute;
  top: -8px;
  left: 10%;
  width: 25px;
  height: 12px;
  background: rgba(194, 178, 128, 0.4);
  transform: rotate(-15deg);
}

.toggle-icon { font-size: 1.2rem; }

.mobile-menu-toggle {
  display: none; /* Hidden by default */
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.burger-lines {
  width: 25px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.burger-lines span {
  display: block;
  width: 100%;
  height: 2px;
  background: #222;
  transition: all 0.3s ease-in-out;
  border-radius: 2px;
}

.dark-mode .burger-lines span { background: #e0e0e0; }

.burger-lines.active .line-1 {
  transform: translateY(9px) rotate(45deg);
}

.burger-lines.active .line-2 {
  opacity: 0;
  transform: translateX(-10px);
}

.burger-lines.active .line-3 {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fcfaf2;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease-in-out;
  box-shadow: 0 10px 15px rgba(0,0,0,0.05);
}

.dark-mode .mobile-menu { background: #1a1a1a; }
.mobile-menu.open { max-height: 500px; padding-bottom: 30px; }

.mobile-menu ul {
  padding: 20px;
  list-style: none;
  text-align: center;
}

.mobile-menu li { margin: 15px 0; }

.mobile-menu a {
  font-family: 'Gochi Hand', cursive;
  font-size: 1.5rem;
  color: #222;
  text-decoration: none;
}

.dark-mode .mobile-menu a { color: #e0e0e0; }

.menu-doodle {
  text-align: center;
  font-family: 'Gochi Hand', cursive;
  color: #d35400;
  font-size: 1.2rem;
  opacity: 0.6;
}

@media (max-width: 968px) {
  .nav-links { display: none; }
  .mobile-menu-toggle { display: block; } 
}
</style>