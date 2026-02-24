<template>
  <footer class="footer">
    <div class="footer-ripped-edge"></div>
    
    <div class="footer-content">
      <p class="footer-text">© 2026 Neichaela Padilla. All rights reserved.</p>
      
      <div class="footer-links">
        <a href="https://www.instagram.com/neyyykkkaaaa" target="_blank" rel="noopener noreferrer">Instagram</a>
        <span class="separator">✦</span>
        <a href="http://www.linkedin.com/in/neichaela-padilla-97ab3b322" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span class="separator">✦</span>
        <a href="mailto:neichaela10@gmail.com">Email</a>
        <span class="separator">✦</span>
        <a href="https://github.com/Nics-10" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span class="separator">✦</span>
        <a href="https://www.facebook.com/share/1EHbLUszg1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
      
      <div class="footer-doodle">~ thanks for visiting! ~</div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Architects_Daughter&display=swap');

.footer {
  --footer-bg: #fcfaf2; 
  --footer-ink: #222;
  --footer-accent: #d35400;
  
  background-color: var(--footer-bg);
  color: var(--footer-ink);
  padding: 60px 20px 40px;
  text-align: center;
  position: relative;
  transition: all 0.5s ease;
  border-top: 1px solid rgba(0,0,0,0.05);
}

:global(.dark-mode) .footer {
  --footer-bg: #1a1a1a;
  --footer-ink: #e0e0e0;
  --footer-accent: #ff7e2e;
}

.footer-ripped-edge {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  background-image: linear-gradient(135deg, transparent 50%, var(--footer-bg) 50%), 
                    linear-gradient(-135deg, transparent 50%, var(--footer-bg) 50%);
  background-size: 20px 20px;
  background-repeat: repeat-x;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.footer-text {
  font-family: 'Architects Daughter', cursive;
  font-size: 1rem;
  margin-bottom: 20px;
  opacity: 0.8;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 25px;
}

.footer-links a {
  font-family: 'Gochi Hand', cursive;
  font-size: 1.2rem;
  color: var(--footer-ink);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0 5px;
}

.footer-links a:hover {
  color: var(--footer-accent);
  transform: scale(1.1) rotate(-2deg);
}

.separator {
  color: var(--footer-accent);
  opacity: 0.5;
  font-size: 0.8rem;
}

.footer-doodle {
  font-family: 'Gochi Hand', cursive;
  font-size: 1.4rem;
  color: var(--footer-accent);
  opacity: 0.6;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .footer-links {
    gap: 10px;
  }
  .footer-links a {
    font-size: 1.1rem;
  }
}
</style>