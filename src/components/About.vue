<template>
  <section class="about" id="nosotros">
    <div class="container">
      <div class="about-grid">
        <div class="about-image">
          <div class="image-wrapper">
            <img src="../assets/about.avif" alt="HardStack Team" />
          </div>
        </div>
        
        <div class="about-content">
          <h2 class="section-title">¿Quiénes <span class="highlight">Somos</span>?</h2>
          <p class="description">
            El equipo de <strong>Hard Stack</strong> está formado por apasionados de la tecnología, provenientes de las carreras de informática y ciencias de la computación.
          </p>
          <p class="description">
            Nuestra misión es clara: poner nuestro conocimiento en hardware, software y desarrollo al servicio de las personas y empresas que buscan dar un salto cualitativo en su infraestructura tecnológica.
          </p>
          
          <div class="stats-grid">
            <div class="stat-item">
              <box-icon name='rocket' color='var(--violeta-marca)'></box-icon>
              <div>
                <h4>Innovación</h4>
                <p>Tecnología de vanguardia</p>
              </div>
            </div>
            <div class="stat-item">
              <box-icon name='shield-alt' color='var(--cian-electrico)'></box-icon>
              <div>
                <h4>Seguridad</h4>
                <p>Protección garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'boxicons'
</script>

<style scoped>
.about {
  background-color: var(--blanco-puro);
  overflow: hidden;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.about-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  background: var(--gris-lavanda);
  border-radius: 40px;
  padding: 2rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.image-wrapper img {
  width: 100%;
  border-radius: 20px;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
}

.experience-badge {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: var(--azul-profundo);
  color: var(--blanco-puro);
  padding: 1.5rem;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 20px rgba(25, 25, 112, 0.3);
  border: 2px solid var(--cian-electrico);
}

.experience-badge .number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--cian-electrico);
}

.experience-badge .text {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title {
  font-size: 3rem;
  color: var(--azul-profundo);
  margin-bottom: 2rem;
}

.highlight {
  color: var(--violeta-marca);
}

.description {
  font-size: 1.15rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}

.stat-item h4 {
  color: var(--azul-profundo);
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
}

.stat-item p {
  color: #777;
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .about-content {
    order: 1;
  }
  .about-image {
    order: 2;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
