<template>
  <section id="guestbook" class="guestbook-section">
    <div class="paper-texture"></div>

    <div class="container">
      <div class="section-header animate-on-scroll" :class="{ 'visible': isVisible }">
        <h2 class="section-title handwritten">Guestbook</h2>
        <div class="title-scribble"></div>
        <p class="section-subtitle handwritten-sub">Feel free to leave a message.</p>
      </div>

      <div class="guestbook-layout">
        <div class="form-container">
          <div class="form-scrap">
            <div class="washi-tape-top"></div>
            <form @submit.prevent="submitMessage" class="guestbook-form">
              <div class="form-group">
                <label for="name" class="ink-label">Signed by:</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  placeholder="Your name..."
                  maxlength="100"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message" class="ink-label">Message:</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  placeholder="Write something fun..."
                  rows="5"
                  maxlength="500"
                  required
                ></textarea>
              </div>
              <button type="submit" class="pin-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">📌 Pin Message</span>
                <span v-else>Writing...</span>
              </button>
            </form>
          </div>
        </div>

        <div class="messages-container">
          <div v-if="isLoading" class="loading-state">
            <div class="ink-spinner"></div>
            <p class="handwritten-sub">Reading the book...</p>
          </div>
          
          <div v-else-if="messages.length === 0" class="empty-state">
            <p class="handwritten-sub">No notes yet. Be the first to pin one!</p>
          </div>

          <div v-else class="messages-feed">
            <div
              v-for="(message, index) in messages"
              :key="message.id"
              class="message-note"
              :style="{ transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 0.5}deg)` }"
            >
              <div class="push-pin-icon"></div>
              
              <div class="note-header">
                <div class="message-avatar">{{ getInitials(message.name) }}</div>
                <div class="message-info">
                  <span class="author-name">{{ message.name }}</span>
                  <span class="note-date">{{ formatDate(message.created_at) }}</span>
                </div>
              </div>
              <p class="note-text">"{{ message.message }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="pop">
      <div v-if="modal.show" class="modal-overlay" @click.self="closeModal">
        <div class="modal-scrap" :class="modal.type">
          <div class="washi-tape-modal"></div>
          <div class="modal-icon">{{ modal.type === 'success' ? '✨' : '❌' }}</div>
          <h3 class="handwritten">{{ modal.type === 'success' ? 'Pinned!' : 'Oops!' }}</h3>
          <p class="handwritten-sub">{{ modal.message }}</p>
          <button @click="closeModal" class="modal-close-btn">Close</button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const isVisible = ref(false)
const isLoading = ref(true)
const isSubmitting = ref(false)
const messages = ref([])
const formData = ref({ name: '', message: '' })

// Modal Logic
const modal = ref({ show: false, message: '', type: 'success' })
const closeModal = () => { modal.value.show = false }

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

const fetchMessages = async () => {
  try {
    isLoading.value = true
    const response = await axios.get(`${API_URL}/guestbook`)
    messages.value = response.data
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isLoading.value = false
  }
}

const submitMessage = async () => {
  if (!formData.value.name || !formData.value.message) return
  try {
    isSubmitting.value = true
    const response = await axios.post(`${API_URL}/guestbook`, formData.value)
    messages.value.unshift(response.data)
    formData.value = { name: '', message: '' }
    
    // Success Pop-up
    modal.value = { 
      show: true, 
      message: 'Your note has been added to the diary.', 
      type: 'success' 
    }
  } catch (error) {
    // Error Pop-up
    modal.value = { 
      show: true, 
      message: 'Failed to send message. Please check your connection.', 
      type: 'error' 
    }
  } finally {
    isSubmitting.value = false
  }
}

const getInitials = (name) => name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
const formatDate = (ds) => {
  const d = new Date(ds);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

onMounted(() => {
  fetchMessages()
  isVisible.value = true
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Architects_Daughter&display=swap');

.guestbook-section {
  background-color: #fdfaf5;
  padding: 80px 0;
  min-height: 100vh;
  transition: background-color 0.3s ease;
}

/* DARK MODE STYLES */
.dark-mode .guestbook-section {
  background-color: #121212;
}

.guestbook-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 50px;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 20px;
}

.form-scrap, .message-note, .modal-scrap {
  background: #ffffff;
  border: 1px solid #eee;
  transition: background-color 0.3s, border-color 0.3s;
}

.dark-mode .form-scrap, 
.dark-mode .message-note,
.dark-mode .modal-scrap {
  background: #1e1e1e;
  border-color: #333;
  color: #e0e0e0;
}

.form-scrap {
  padding: 40px;
  box-shadow: 10px 10px 0px rgba(0,0,0,0.03);
  position: sticky;
  top: 100px;
  transform: rotate(-1deg);
}

.message-note {
  padding: 30px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.02);
  position: relative;
  clip-path: polygon(0% 0%, 100% 0%, 98% 100%, 2% 98%);
  margin-bottom: 25px;
}

.washi-tape-top {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 35px;
  background: rgba(211, 84, 0, 0.2);
  backdrop-filter: blur(1px);
}

.ink-label {
  font-family: 'Gochi Hand', cursive;
  font-size: 1.4rem;
  color: #d35400;
}

.guestbook-form input, 
.guestbook-form textarea {
  width: 100%;
  border: none;
  border-bottom: 1px dashed #ccc;
  padding: 12px 0;
  margin-bottom: 30px;
  background: transparent;
  font-family: 'Architects Daughter', cursive;
  color: inherit;
  outline: none;
}

.pin-btn {
  background: #d35400;
  color: white;
  border: none;
  padding: 12px 30px;
  font-family: 'Gochi Hand', cursive;
  font-size: 1.2rem;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-scrap {
  padding: 40px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 15px 15px 0px rgba(0,0,0,0.1);
}

.modal-icon { font-size: 2rem; margin-bottom: 10px; }
.modal-scrap.error h3 { color: #e74c3c; }
.modal-scrap.success h3 { color: #27ae60; }

.modal-close-btn {
  margin-top: 20px;
  background: #333;
  color: white;
  border: none;
  padding: 8px 25px;
  font-family: 'Gochi Hand', cursive;
  cursor: pointer;
}
.dark-mode .modal-close-btn { background: #d35400; }

.push-pin-icon {
  position: absolute; top: 10px; right: 15px;
  width: 12px; height: 12px;
  background: #e74c3c; border-radius: 50%;
}

.message-avatar {
  width: 45px; height: 45px; border-radius: 50%;
  background: #fdfaf5; border: 1px dashed #d35400;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Gochi Hand', cursive; color: #d35400;
}
.dark-mode .message-avatar { background: #252525; }

.author-name { font-family: 'Gochi Hand', cursive; font-size: 1.3rem; }
.note-text { font-family: 'Architects Daughter', cursive; line-height: 1.5; }
.handwritten { font-family: 'Gochi Hand', cursive; font-size: 3.5rem; text-align: center; }
.handwritten-sub { font-family: 'Architects Daughter', cursive; text-align: center; }

/* ANIMATIONS */
.pop-enter-active { animation: pop-in 0.4s cubic-bezier(0.26, 0.53, 0.74, 1.48); }
.pop-leave-active { animation: pop-in 0.3s reverse ease-in; }
@keyframes pop-in {
  0% { opacity: 0; transform: scale(0.5) rotate(5deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}

@media (max-width: 900px) {
  .guestbook-layout { grid-template-columns: 1fr; }
  .form-scrap { position: relative; top: 0; margin-bottom: 40px; }
}
</style>