<template>
  <nav class="navigation" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="nav-logo">Portfolio</div>
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.id" :class="{ 'active': activeSection === link.id }">
          <a @click.prevent="scrollToSection(link.id)">{{ link.label }}</a>
        </li>
      </ul>
      <button class="dark-mode-toggle" @click="$emit('toggle-dark-mode')" :aria-label="isDarkMode ? 'Light mode' : 'Dark mode'">
        <span v-if="!isDarkMode">🌙</span>
        <span v-else>☀️</span>
      </button>
      <button class="mobile-menu-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
      <ul>
        <li v-for="link in navLinks" :key="link.id">
          <a @click.prevent="scrollToSection(link.id); mobileMenuOpen = false">{{ link.label }}</a>
        </li>
      </ul>
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
  { id: 'about', label: 'About Me' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'resources', label: 'Resources' },
  { id: 'guestbook', label: 'Guestbook' }
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean)
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  z-index: 999;
  transition: all 0.3s ease;
}

.navigation.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.dark-mode .navigation {
  background: rgba(26, 26, 26, 0.95);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-blue);
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 35px;
  align-items: center;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  color: var(--deep-charcoal);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
}

.dark-mode .nav-links a {
  color: var(--soft-white);
}

.nav-links a:hover {
  color: var(--primary-blue);
}

.nav-links li.active a {
  color: var(--primary-blue);
}

.nav-links li.active a::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-blue);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.dark-mode-toggle {
  background: transparent;
  border: 2px solid var(--primary-blue);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.dark-mode-toggle:hover {
  background: var(--primary-blue);
  transform: rotate(360deg);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--deep-charcoal);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.dark-mode .mobile-menu-toggle span {
  background: var(--soft-white);
}

.mobile-menu {
  display: none;
}

@media (max-width: 968px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-menu {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .dark-mode .mobile-menu {
    background: var(--dark-bg);
  }

  .mobile-menu.open {
    max-height: 500px;
  }

  .mobile-menu ul {
    list-style: none;
    padding: 20px;
  }

  .mobile-menu li {
    margin: 15px 0;
  }

  .mobile-menu a {
    color: var(--deep-charcoal);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    display: block;
    padding: 10px;
    transition: all 0.3s ease;
  }

  .dark-mode .mobile-menu a {
    color: var(--soft-white);
  }

  .mobile-menu a:hover {
    color: var(--primary-blue);
    padding-left: 20px;
  }

  .nav-container {
    padding: 15px 20px;
  }
}
</style>
