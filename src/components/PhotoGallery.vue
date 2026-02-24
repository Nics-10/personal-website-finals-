<template>
  <section id="gallery" class="gallery-section section">
    <div class="paper-texture"></div>
    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Photo Gallery</h2>
        <div class="title-underline"></div>
      </div>
      <div class="gallery-grid">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="gallery-post animate-on-scroll"
          :class="{ 'visible': isVisible }"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="post-header">
            <div class="profile-mini">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Profile" />
            </div>
            <div class="post-info">
              <p class="username">your_username</p>
              <p class="location">{{ photo.location }}</p>
            </div>
          </div>
          <div class="post-image">
            <img :src="photo.image" :alt="photo.caption" />
          </div>
          <div class="post-actions">
            <button class="like-btn" @click="toggleLike(index)" :class="{ 'liked': photo.liked }">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
          <div class="post-caption">
            <p><strong>your_username</strong> {{ photo.caption }}</p>
          </div>
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
    image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Mountain View',
    caption: 'Beautiful sunset at the mountains 🌄',
    liked: false
  },
  {
    image: 'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Beach Paradise',
    caption: 'Perfect day at the beach 🏖️',
    liked: false
  },
  {
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'City Life',
    caption: 'Urban exploration and architecture 🏙️',
    liked: false
  },
  {
    image: 'https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Forest Trail',
    caption: 'Lost in nature 🌲',
    liked: false
  },
  {
    image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Coffee Shop',
    caption: 'Coffee and code ☕️💻',
    liked: false
  },
  {
    image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Night Sky',
    caption: 'Stargazing tonight ✨',
    liked: false
  }
])

const toggleLike = (index) => {
  photos.value[index].liked = !photos.value[index].liked
}

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

  const section = document.getElementById('gallery')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
.gallery-section {
  background: linear-gradient(135deg, #f5f7fa 0%, var(--soft-white) 100%);
}

.dark-mode .gallery-section {
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-post {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
}

.gallery-post.visible {
  opacity: 1;
  transform: translateY(0);
}

.dark-mode .gallery-post {
  background: var(--dark-card);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.gallery-post:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.post-header {
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 12px;
}

.profile-mini {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--primary-blue);
}

.profile-mini img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-info {
  flex: 1;
}

.username {
  font-weight: 600;
  color: var(--deep-charcoal);
  font-size: 0.95rem;
  margin-bottom: 2px;
}

.dark-mode .username {
  color: var(--soft-white);
}

.location {
  font-size: 0.85rem;
  color: #666;
}

.dark-mode .location {
  color: #999;
}

.post-image {
  width: 100%;
  height: 350px;
  overflow: hidden;
  cursor: pointer;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-post:hover .post-image img {
  transform: scale(1.05);
}

.post-actions {
  padding: 15px;
}

.like-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--deep-charcoal);
}

.dark-mode .like-btn {
  color: var(--soft-white);
}

.like-btn svg {
  transition: all 0.3s ease;
}

.like-btn:hover svg {
  transform: scale(1.2);
}

.like-btn.liked {
  color: #e74c3c;
}

.like-btn.liked svg {
  fill: #e74c3c;
  animation: heartBeat 0.5s ease;
}

@keyframes heartBeat {
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1.1);
  }
}

.post-caption {
  padding: 0 15px 15px;
}

.post-caption p {
  font-size: 0.95rem;
  color: var(--deep-charcoal);
  line-height: 1.5;
}

.dark-mode .post-caption p {
  color: var(--soft-white);
}

.post-caption strong {
  font-weight: 600;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .post-image {
    height: 300px;
  }
}
</style>
