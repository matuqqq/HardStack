<template>
  <section class="companies" id="empresas">
    <div class="container">
      <h2 class="section-title">Confían en <span class="highlight">Nosotros</span></h2>
      <div class="companies-wrapper">
        <div class="companies-track">
          <div v-for="(company, index) in companies" :key="index" class="company-card">
            <img :src="company.img" :alt="company.name" class="company-img" />
            <span>{{ company.name }}</span>
          </div>
          <div v-for="(company, index) in companies" :key="'dup-'+index" class="company-card">
            <img :src="company.img" :alt="company.name" class="company-img" />
            <span>{{ company.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Función para obtener la URL de la imagen de forma dinámica con Vite
const getImageUrl = (path) => {
  return new URL(path, import.meta.url).href;
};

const companies = [
  { name: 'FgTools', img: getImageUrl('/logos/Fgtools.ico') },
  { name: 'OLI', img: getImageUrl('/logos/Oli.png') },
  { name: 'Insomnes', img: getImageUrl('/logos/insomnes.png') },

  //Borrar luego
    { name: 'FgTools', img: getImageUrl('/logos/Fgtools.ico') },
  { name: 'OLI', img: getImageUrl('/logos/Oli.png') },
  { name: 'Insomnes', img: getImageUrl('/logos/insomnes.png') },
]
</script>

<style scoped>
.companies {
  background-color: var(--gris-lavanda);
  padding: 4rem 0;
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--azul-profundo);
  margin-bottom: 3rem;
}

.highlight {
  color: var(--violeta-marca);
}

.companies-wrapper {
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 20px 0; 
  margin-top: -20px;
}

.companies-track {
  display: flex;
  gap: 6rem;
  animation: scroll 20s linear infinite;
  width: max-content;
  align-items: center;
}

.company-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-width: 120px;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.4s ease;
  will-change: transform; 
}

.company-card:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: translateY(-10px); 
}

.company-img {
  height: 60px; /* Ajusta según el tamaño de tus logos */
  width: auto;
  object-fit: contain;
}

.company-card span {
  font-weight: 600;
  color: var(--azul-profundo);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* Ajuste automático para loop infinito */
}

/* Pausa la animación al pasar el mouse para que puedan ver bien el logo */
.companies-wrapper:hover .companies-track {
  animation-play-state: paused;
}
</style>