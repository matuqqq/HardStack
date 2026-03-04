<template>
  <section class="services" id="servicios">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Servicios <span class="highlight">Especializados</span></h2>
        <p class="section-subtitle">Soluciones integrales para transformar tu presencia digital y física.</p>
      </div>

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="icon-wrapper">
            <box-icon :name="service.icon" size="lg" :color="service.color"></box-icon>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              <box-icon name='check' size='xs' color='var(--cian-electrico)'></box-icon>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'boxicons'

const services = [
  {
    icon: 'buildings',
    title: 'Sistemas para Negocios',
    color: 'var(--violeta-marca)',
    description: 'Implementación de infraestructuras tecnológicas robustas y seguras.',
    features: ['Sistemas de Seguridad', 'Gestión de Accesos', 'Automatización']
  },
  {
    icon: 'code-block',
    title: 'Desarrollo Web',
    color: 'var(--cian-electrico)',
    description: 'Sitios web modernos, rápidos y optimizados para cualquier dispositivo.',
    features: ['Landing Pages', 'E-commerce', 'Paneles de Gestión']
  },
  {
    icon: 'data',
    title: 'Bases de Datos',
    color: 'var(--rosa-acento)',
    description: 'Optimización y mantenimiento de datos para un rendimiento máximo.',
    features: ['Optimización SQL', 'Mantenimiento', 'Migraciones']
  }
]
</script>

<style scoped>
.services {
  background-color: var(--gris-lavanda);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  color: var(--azul-profundo);
  margin-bottom: 1rem;
}

.highlight {
  color: var(--violeta-marca);
}

.section-subtitle {
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.service-card {
  background: var(--blanco-puro);
  padding: 3rem 2rem;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(25, 25, 112, 0.05);
  transition: all 0.4s ease;
  border: 1px solid rgba(138, 43, 226, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(138, 43, 226, 0.1);
  border-color: var(--violeta-marca);
}

.icon-wrapper {
  width: 90px;
  height: 90px;
  background: var(--gris-lavanda);
  border-radius: 25px;
  display: grid;
  place-items: center;
  margin-bottom: 2rem;
  transition: all 0.4s ease;
}

.service-card:hover .icon-wrapper {
  transform: rotate(10deg);
  background: var(--azul-profundo);
}

.service-card:hover .icon-wrapper box-icon {
  fill: var(--blanco-puro) !important;
}

h3 {
  color: var(--azul-profundo);
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

p {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--azul-profundo);
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
