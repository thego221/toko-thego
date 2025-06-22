<template>
  <div class="content">
    <h2 class="section-title">Kontak Kami</h2>
    <p>
      Silakan hubungi kami melalui email di
      <strong>admin@tokomotor2tak.id</strong> atau WhatsApp di
      <strong>+62 812 3456 7890</strong>.
    </p>

    <div class="form-section">
      <h3>Form Pengaduan</h3>
      <form @submit.prevent="handleSubmit">
        <input type="email" v-model="email" placeholder="Email Anda" required />
        <input type="text" v-model="subject" placeholder="Subjek Pengaduan" required />
        <textarea v-model="message" placeholder="Tulis pengaduan Anda..." required></textarea>
        <button type="submit">KIRIM</button>
      </form>

      <p v-if="submitted" class="success-msg">Pengaduan Anda telah dikirim. Terima kasih!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subject = ref('')
const message = ref('')
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  email.value = ''
  subject.value = ''
  message.value = ''
}
</script>

<style scoped>
.content {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  max-width: 720px;
  margin: 2rem auto;
  text-align: center;
  font-size: 1.1rem;
  color: #263238;
  min-height: 100vh;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);
}

.section-title {
  font-size: 2rem;
  color: #1e88e5;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px #ffffffcc;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  width: 60%;
  height: 3px;
  background-color: #64b5f6;
  display: block;
  margin: 0.5rem auto 0;
  border-radius: 2px;
}

.form-section {
  margin-top: 2rem;
  text-align: left;
}

.form-section h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #1565c0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
}

input,
textarea {
  padding: 0.85rem;
  border: 1px solid #d7ccc8;
  border-radius: 10px;
  font-size: 1rem;
  background: #fdfcfb;
  color: #263238;
  transition: border 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #42a5f5;
  outline: none;
}

textarea {
  height: 120px;
}

button {
  background: #1e88e5;
  color: white;
  font-weight: bold;
  border: none;
  padding: 0.8rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

button:hover {
  background: #1565c0;
  transform: scale(1.03);
}

.success-msg {
  margin-top: 1rem;
  color: #2e7d32;
  text-align: center;
  font-weight: 500;
}
</style>
