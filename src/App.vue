<template>
  <div class="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>


<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  background: url('https://img.freepik.com/free-vector/dark-background-with-tire-print-marks_1017-17014.jpg?semt=ais_hybrid&w=740') repeat;
  background-size: 300px;
}


#app,
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

</style>