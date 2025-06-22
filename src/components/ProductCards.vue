<template>
  <div class="cards">
    <div class="card" v-for="product in products" :key="product.id">
      <img :src="product.image" alt="product" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p><strong>Harga:</strong> {{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Yamaha RX-King 2003',
    description: 'Motor 2-tak legendaris dengan suara khas dan tenaga besar.',
    price: 'Rp23.000.000',
    image: 'https://statik.tempo.co/data/2021/03/04/id_1004997/1004997_720.jpg'
  },
  {
    id: 2,
    name: 'Suzuki Satria 120R',
    description: 'Motor bebek 2-tak cepat dan ringan, cocok untuk harian dan koleksi.',
    price: 'Rp18.000.000',
    image: 'https://suzukicdn.com/uploads/eparts/117/Satria_120.webp'
  },
  {
    id: 3,
    name: 'Honda NSR 150 SP',
    description: 'Sport 2-tak langka dengan power band ganas dan bodi racing.',
    price: 'Rp45.000.000',
    image: 'https://thumb.katadata.co.id/frontend/thumbnail/2022/08/23/zigi-6304b5f3b26d6-honda-nsr-150_910_512.jpg'
  },
  {
    id: 4,
    name: 'Kawasaki Ninja R 150',
    description: 'Motor 2-tak fairing dengan performa tinggi dan desain agresif.',
    price: 'Rp27.000.000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdt0JsKctlSVfdst6e4sBWw4fpbpjlEX76UQ&s'
  },
  {
    id: 5,
    name: 'Yamaha 125Z',
    description: '2-tak Malaysia yang legendaris, kencang dan ringan.',
    price: 'Rp42.000.000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JX-kS2WwJgPsWDZbMAD_dFwe-3oCg-e-zA&s'
  }
]
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  padding: 0 1rem;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem 1rem;
  width: 260px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f0f0f0;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #1b1b1b;
}

.card p {
  font-size: 0.92rem;
  color: #555;
  line-height: 1.4;
  margin: 0.3rem 0;
}

.card p strong {
  color: #263238;
}
</style>
