<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">© 2024 Your Name. Made with ❤️ and Vue.js</p>
      <div class="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span class="separator">•</span>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span class="separator">•</span>
        <a href="mailto:your.email@example.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--deep-charcoal);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.dark-mode .footer {
  background: #0a0a0a;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-text {
  font-size: 1rem;
  margin-bottom: 15px;
  opacity: 0.9;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--warm-accent);
}

.separator {
  opacity: 0.5;
}

@media (max-width: 768px) {
  .footer-text {
    font-size: 0.9rem;
  }

  .footer-links {
    font-size: 0.9rem;
  }
}
</style>
