<template>
  <div class="product-page">
    <h2 class="section-title">Koleksi Motor 2-Tak</h2>
    <ProductCards />
  </div>
</template>

<script setup>
import ProductCards from './ProductCards.vue'
</script>

<style scoped>
.product-page {
  background: url('https://img.freepik.com/free-vector/dark-background-with-tire-print-marks_1017-17014.jpg?semt=ais_hybrid&w=740') repeat;
  background-size: 320px;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
  color: #263238; /* abu gelap */
  backdrop-filter: blur(2px);
}

.section-title {
  font-size: 2.2rem;
  color: #1e88e5; /* biru racing */
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px #ffffffcc;
  letter-spacing: 1.2px;
  position: relative;
  display: inline-block;
  animation: fadeSlideUp 1s ease-out;
}

.section-title::after {
  content: '';
  width: 60%;
  height: 3px;
  background-color: #42a5f5; /* aksen biru terang */
  display: block;
  margin: 0.5rem auto 0;
  border-radius: 2px;
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
