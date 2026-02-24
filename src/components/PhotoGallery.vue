<template>
  <section id="gallery" class="gallery-section">
    <div class="paper-texture"></div>
    <div class="notebook-lines"></div>

    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title handwritten">Photo Gallery</h2>
        <div class="title-scribble"></div>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="gallery-post scrap-item"
          :class="{ 'visible': isVisible, [`tilt-${(index % 3) + 1}`]: true }"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="corner-tape"></div>

          <div class="post-header">
            <div class="profile-mini">
              <img src="https://i.pinimg.com/736x/be/ef/cb/beefcb25fe5677c4f4f4825d9737e851.jpg" alt="Profile" />
            </div>
            <div class="post-info">
              <p class="username">neyyykkkaaaa</p>
              <p class="location-tag">📍 {{ photo.location }}</p>
            </div>
          </div>

          <div class="post-image-container">
            <div class="post-image">
              <img :src="photo.image" :alt="photo.caption" />
            </div>
            <div class="photo-overlay"></div>
          </div>

          <div class="post-actions">
            <button class="like-btn" @click="toggleLike(index)" :class="{ 'liked': photo.liked }">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <div class="action-scribble"></div>
          </div>

          <div class="post-caption">
            <p><span class="user-ink">neyyykkkaaaa</span> {{ photo.caption }}</p>
          </div>
          
          <div v-if="index % 4 === 0" class="mini-doodle">✨</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const photos = ref([
  {
    image: 'https://i.pinimg.com/736x/b4/e2/46/b4e24653fd36473cef88d77e5c56039b.jpg',
    location: 'Home',
    caption: 'Spending some family time.',
    liked: false
  },
  {
    image: 'https://i.pinimg.com/736x/db/0e/ae/db0eaea32d9e27d35e53c12b04299186.jpg',
    location: 'Tagaytay',
    caption: 'Sponty night ride.',
    liked: false
  },
  {
    image: 'https://i.pinimg.com/736x/8c/58/ee/8c58ee6be3383f0e4140c16f4ab933d2.jpg',
    location: 'Buff Cafe',
    caption: 'Taking some sips of coffee',
    liked: false
  },
  {
    image: 'https://i.pinimg.com/736x/fd/2a/23/fd2a234ae9240967f0ab73ed34186ee2.jpg',
    location: 'Asia Pacific College',
    caption: 'Gig night with some college friends',
    liked: false
  },
  {
    image: 'https://i.pinimg.com/736x/68/cb/7c/68cb7c5cf6f468f6a7801aef529be863.jpg',
    location: 'Home',
    caption: 'My babies',
    liked: false
  },
  {
    image: 'https://i.pinimg.com/736x/88/0b/a3/880ba3793735f52b22eb9f0410a119df.jpg',
    location: 'Sa bahay',
    caption: 'Celebrating a day with them',
    liked: false
  },
  {
    image: 'https://i.pinimg.com/736x/43/23/2e/43232e9465080075a1536a56f058fd41.jpg',
    location: 'Philippine Arena',
    caption: 'BORNPINK in Bulacan',
    liked: false
  },
  {
    image: 'https://i.pinimg.com/736x/33/44/f8/3344f85cbdeeeb35a88c4ce6eb6d586d.jpg',
    location: 'Palawan',
    caption: 'Life in silence',
    liked: false
  },
  {
    image: 'https://i.pinimg.com/736x/37/cc/7b/37cc7bf2bcd6fd5ad71257074d40cb5e.jpg',
    location: 'Philippine Arena',
    caption: 'BINIVERSE in Bulacan',
    liked: false
  }
])

const toggleLike = (index) => {
  photos.value[index].liked = !photos.value[index].liked
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  }, { threshold: 0.1 })

  const section = document.getElementById('gallery')
  if (section) observer.observe(section)
  
  // Fail-safe trigger to ensure cards load even if observer hits a delay
  setTimeout(() => { isVisible.value = true }, 800)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Architects_Daughter&display=swap');

.gallery-section {
  background-color: #f4f1ea;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.dark-mode .gallery-section {
  background-color: #1a1a1a;
}

.handwritten {
  font-family: 'Gochi Hand', cursive;
  font-size: 3.5rem;
  color: #333;
  text-align: center;
}

.dark-mode .handwritten { color: #e0e0e0; }

.title-scribble {
  width: 150px;
  height: 6px;
  background: #d35400;
  margin: -10px auto 60px;
  border-radius: 50%;
  opacity: 0.6;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.scrap-item {
  background: white;
  padding: 12px;
  box-shadow: 8px 8px 0px rgba(0,0,0,0.05);
  position: relative;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0,0,0,0.05);
  opacity: 0;
  transform: translateY(30px);
}

.scrap-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.dark-mode .scrap-item {
  background: #2d2d2d;
  border-color: #3d3d3d;
  box-shadow: 8px 8px 0px rgba(0,0,0,0.2);
}

/* Scrapbook Rotations */
.tilt-1 { transform: rotate(-1.5deg); }
.tilt-2 { transform: rotate(1.2deg); }
.tilt-3 { transform: rotate(-0.8deg); }

.scrap-item:hover {
  transform: translateY(-10px) rotate(0deg) scale(1.02) !important;
  z-index: 10;
  box-shadow: 15px 20px 30px rgba(0,0,0,0.1);
}

.corner-tape {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 70px;
  height: 25px;
  background: rgba(211, 84, 0, 0.25);
  backdrop-filter: blur(2px);
  transform: rotate(35deg);
  z-index: 5;
}

.post-header {
  display: flex;
  align-items: center;
  padding: 10px 5px;
  gap: 10px;
  font-family: 'Architects Daughter', cursive;
}

.profile-mini {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ddd;
}

.profile-mini img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.username {
  font-weight: bold;
  font-size: 0.9rem;
  color: #333;
}

.dark-mode .username { color: #eee; }

.location-tag {
  font-size: 0.75rem;
  color: #d35400;
}

.post-image-container {
  position: relative;
  border: 1px solid #eee;
  background: #000;
}

.dark-mode .post-image-container { border-color: #444; }

.post-image {
  height: 320px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.05) saturate(1.1);
}

.post-actions {
  padding: 15px 5px 5px;
  position: relative;
}

.action-scribble {
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 40px;
  height: 2px;
  background: rgba(211, 84, 0, 0.1);
}

.like-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 0;
}

.dark-mode .like-btn { color: #eee; }

.post-caption {
  padding: 5px;
  font-family: 'Architects Daughter', cursive;
}

.post-caption p {
  font-size: 0.95rem;
  line-height: 1.4;
  color: #444;
}

.dark-mode .post-caption p { color: #ccc; }

.user-ink {
  font-weight: bold;
  color: #d35400;
}

.mini-doodle {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.2rem;
  opacity: 0.4;
}

.like-btn.liked svg {
  fill: #e74c3c;
  stroke: #e74c3c;
  animation: heartBeat 0.4s linear;
}

@keyframes heartBeat {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

@media (max-width: 768px) {
  .gallery-grid { grid-template-columns: 1fr; }
  .scrap-item { max-width: 380px; margin: 0 auto; }
}
</style>