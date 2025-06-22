<template>
  <nav class="navbar">
    <div class="brand">Toko Motor 2-Tak Online</div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/product">Product</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #e3f2fdcc, #ffffffcc);
  backdrop-filter: blur(12px);
  padding: 1.2rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #bbdefb;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  border-radius: 0 0 24px 24px;
  transition: all 0.3s ease;
}

.brand {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 1.4px;
  color: #0d47a1; /* biru racing klasik */
  text-shadow: 1px 1px 2px #ffffffaa;
  transition: transform 0.3s ease, color 0.3s ease;
}

.brand:hover {
  transform: scale(1.06);
  color: #1565c0;
}

.links {
  display: flex;
  gap: 2.2rem;
}

.links a {
  color: #263238;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  position: relative;
  padding: 6px 10px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.links a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #1976d2; /* biru terang sporty */
  transition: width 0.3s ease;
  border-radius: 2px;
}

.links a:hover {
  color: #1976d2;
  background-color: rgba(25, 118, 210, 0.06);
}

.links a:hover::after {
  width: 100%;
}
</style>
