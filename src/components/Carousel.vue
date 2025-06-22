<template>
  <div class="carousel">
    <div class="slide">
      🏍️ Selamat Datang di Toko Motor 2-Tak Online!
      <p class="subtitle">Temukan motor 2-tak terbaik dan langka dengan harga terjangkau.</p>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  margin: 1.5rem;
  background: linear-gradient(135deg, #e0f7fa, #fff);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 1rem 2rem;
  text-align: center;
}

.slide {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #1e293b; /* abu gelap */
  text-shadow: 1px 1px 2px #ffffffcc;
  animation: popUp 0.9s ease-out;
}

.subtitle {
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  color: #37474f;
  opacity: 0.85;
  text-shadow: none;
}

@keyframes popUp {
  0% {
    transform: scale(0.95) translateY(12px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}
</style>
