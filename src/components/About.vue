<template>
  <section class="about" id="nosotros">
    <div class="container">
      <div class="about-wrapper">
        <div class="about-content">
          <h2 class="section-title">¿Quiénes <span class="highlight">Somos</span>?</h2>
          <div class="content-text">
            <p class="description">
              El equipo de <strong>Hard Stack</strong> está formado por apasionados de la tecnología, provenientes de las carreras de informática y ciencias de la computación.
            </p>
            <p class="description">
              Nuestra misión es clara: poner nuestro conocimiento en hardware, software y desarrollo al servicio de las personas y empresas que buscan dar un salto cualitativo en su infraestructura tecnológica.
            </p>
          </div>
          
          <div class="stats-grid">
            <div class="stat-card">
              <div class="icon-box">
                <box-icon name='rocket' color='var(--blanco-puro)' size="md"></box-icon>
              </div>
              <div class="stat-info">
                <h4>Innovación</h4>
                <p>Tecnología de vanguardia para soluciones modernas.</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="icon-box">
                <box-icon name='shield-alt' color='var(--blanco-puro)' size="md"></box-icon>
              </div>
              <div class="stat-info">
                <h4>Seguridad</h4>
                <p>Protección garantizada en cada línea de código.</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="icon-box">
                <box-icon name='code-alt' color='var(--blanco-puro)' size="md"></box-icon>
              </div>
              <div class="stat-info">
                <h4>Calidad</h4>
                <p>Desarrollo robusto con las mejores prácticas.</p>
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
  background: linear-gradient(135deg, var(--blanco-puro) 0%, #f9f9ff 100%);
  padding: 8rem 0;
  overflow: hidden;
}

.about-wrapper {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 0 1.5rem;
}

.section-title {
  font-size: 3.5rem;
  color: var(--azul-profundo);
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--violeta-marca);
  border-radius: 2px;
}

.highlight {
  color: var(--violeta-marca);
}

.content-text {
  max-width: 800px;
  margin: 0 auto 4rem;
}

.description {
  font-size: 1.25rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

.stat-card {
  background: var(--blanco-puro);
  padding: 2.5rem 1.5rem;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(138, 43, 226, 0.1);
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(138, 43, 226, 0.1);
}

.icon-box {
  background: var(--violeta-marca);
  width: 60px;
  height: 60px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 15px rgba(138, 43, 226, 0.3);
}

.stat-info h4 {
  color: var(--azul-profundo);
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.stat-info p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 992px) {
  .about {
    padding: 6rem 0;
  }
  .section-title {
    font-size: 2.8rem;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 3rem auto 0;
  }
  .section-title {
    font-size: 2.2rem;
  }
  .description {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 4rem 0;
  }
  .section-title {
    font-size: 1.8rem;
  }
}
</style>