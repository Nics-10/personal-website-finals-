<template>
  <section id="guestbook" class="guestbook-section section">
    <div class="paper-texture"></div>
    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Guestbook</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">Leave a message and share your thoughts!</p>
      </div>

      <div class="guestbook-form-wrapper glassmorphism">
        <form @submit.prevent="submitMessage" class="guestbook-form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Enter your name"
              maxlength="100"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Share your thoughts..."
              rows="4"
              maxlength="500"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>
      </div>

      <div v-if="showToast" class="toast-notification" :class="{ 'show': showToast }">
        {{ toastMessage }}
      </div>

      <div class="messages-list">
        <h3 class="messages-title">Recent Messages</h3>
        <div v-if="isLoading" class="loading-state">
          <div class="spinner"></div>
          <p>Loading messages...</p>
        </div>
        <div v-else-if="messages.length === 0" class="empty-state">
          <p>No messages yet. Be the first to sign the guestbook!</p>
        </div>
        <div v-else class="messages-grid">
          <div
            v-for="message in messages"
            :key="message.id"
            class="message-card glassmorphism"
          >
            <div class="message-header">
              <div class="message-avatar">{{ getInitials(message.name) }}</div>
              <div class="message-meta">
                <h4 class="message-author">{{ message.name }}</h4>
                <p class="message-date">{{ formatDate(message.created_at) }}</p>
              </div>
            </div>
            <p class="message-text">{{ message.message }}</p>
            <div class="message-decoration deco-1"></div>
            <div class="message-decoration deco-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const isVisible = ref(false)
const isLoading = ref(true)
const isSubmitting = ref(false)
const messages = ref([])
const showToast = ref(false)
const toastMessage = ref('')

const formData = ref({
  name: '',
  message: ''
})

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

const fetchMessages = async () => {
  try {
    isLoading.value = true
    const response = await axios.get(`${API_URL}/guestbook`)
    messages.value = response.data
  } catch (error) {
    console.error('Error fetching messages:', error)
    showToastMessage('Failed to load messages')
  } finally {
    isLoading.value = false
  }
}

const submitMessage = async () => {
  if (!formData.value.name || !formData.value.message) {
    showToastMessage('Please fill in all fields')
    return
  }

  try {
    isSubmitting.value = true
    const response = await axios.post(`${API_URL}/guestbook`, {
      name: formData.value.name,
      message: formData.value.message
    })

    messages.value.unshift(response.data)

    formData.value.name = ''
    formData.value.message = ''
    showToastMessage('Message sent successfully! ✨')
  } catch (error) {
    console.error('Error submitting message:', error)
    showToastMessage('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const showToastMessage = (message) => {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)

  if (diffInSeconds < 60) return 'Just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

onMounted(() => {
  fetchMessages()

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

  const section = document.getElementById('guestbook')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
.guestbook-section {
  background: linear-gradient(135deg, #e8eef5 0%, var(--soft-white) 100%);
  min-height: 100vh;
}

.dark-mode .guestbook-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
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
  margin-bottom: 15px;
}

.dark-mode .section-title {
  color: var(--soft-white);
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-blue), var(--warm-accent));
  margin: 0 auto 20px;
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
}

.dark-mode .section-subtitle {
  color: #aaa;
}

.guestbook-form-wrapper {
  max-width: 600px;
  margin: 0 auto 60px;
  padding: 40px;
  border-radius: 25px;
}

.guestbook-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group label {
  font-weight: 600;
  color: var(--deep-charcoal);
  font-size: 1rem;
}

.dark-mode .form-group label {
  color: var(--soft-white);
}

.form-group input,
.form-group textarea {
  padding: 15px 20px;
  border: 2px solid rgba(59, 89, 152, 0.2);
  border-radius: 15px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
  color: var(--deep-charcoal);
}

.dark-mode .form-group input,
.dark-mode .form-group textarea {
  background: rgba(42, 42, 42, 0.8);
  color: var(--soft-white);
  border-color: rgba(255, 255, 255, 0.2);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(59, 89, 152, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  align-self: flex-start;
  padding: 15px 40px;
  font-size: 1.05rem;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.toast-notification {
  position: fixed;
  top: 100px;
  right: 30px;
  background: var(--primary-blue);
  color: white;
  padding: 18px 30px;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transform: translateX(400px);
  transition: transform 0.4s ease;
  font-weight: 500;
}

.toast-notification.show {
  transform: translateX(0);
  animation: slideIn 0.4s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
  }
  to {
    transform: translateX(0);
  }
}

.messages-list {
  max-width: 1000px;
  margin: 0 auto;
}

.messages-title {
  font-size: 2rem;
  color: var(--deep-charcoal);
  margin-bottom: 30px;
  text-align: center;
}

.dark-mode .messages-title {
  color: var(--soft-white);
}

.loading-state,
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.dark-mode .loading-state,
.dark-mode .empty-state {
  color: #aaa;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(59, 89, 152, 0.2);
  border-top-color: var(--primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.messages-grid {
  display: grid;
  gap: 25px;
}

.message-card {
  padding: 30px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  animation: messageEnter 0.5s ease;
}

@keyframes messageEnter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.message-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.message-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-blue), var(--warm-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

.message-meta {
  flex: 1;
}

.message-author {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--deep-charcoal);
  margin-bottom: 3px;
}

.dark-mode .message-author {
  color: var(--soft-white);
}

.message-date {
  font-size: 0.85rem;
  color: #666;
}

.dark-mode .message-date {
  color: #999;
}

.message-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--deep-charcoal);
}

.dark-mode .message-text {
  color: var(--soft-white);
}

.message-decoration {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-blue), var(--warm-accent));
  opacity: 0.08;
  pointer-events: none;
}

.deco-1 {
  width: 100px;
  height: 100px;
  top: -30px;
  right: -30px;
}

.deco-2 {
  width: 80px;
  height: 80px;
  bottom: -20px;
  left: -20px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .guestbook-form-wrapper {
    padding: 30px 20px;
  }

  .submit-btn {
    width: 100%;
  }

  .toast-notification {
    right: 15px;
    left: 15px;
  }

  .messages-title {
    font-size: 1.5rem;
  }

  .message-card {
    padding: 20px;
  }
}
</style>
