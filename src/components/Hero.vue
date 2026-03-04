<template>
  <section class="hero" id="inicio">
    <div class="hero-background">
      <div class="glow-1"></div>
      <div class="glow-2"></div>
    </div>
    
    <div class="hero-content">
      <h1 class="title">
        Lleva tu <span class="highlight">Negocio</span><br>
        al Siguiente Nivel
      </h1>
      <p class="subtitle">
        Expertos en Hardware y Software. Creamos soluciones tecnológicas a medida con la más alta calidad y pasión.
      </p>
      
      <div class="cta-group">
        <a href="https://wa.me/541123741777?text=Hola%20estoy%20interesado%20en%20uno%20de%20sus%20servicios!" target="_blank" class="btn btn-primary">
          Empezar Ahora
          <box-icon name='right-arrow-alt' color='var(--blanco-puro)'></box-icon>
        </a>
        <a href="#proyectos" class="btn btn-outline">
          Ver Proyectos
        </a>
      </div>
    </div>
    
    <div class="hero-visual">
      <div class="floating-card">
        <box-icon name='code-alt' size='md' color='var(--cian-electrico)'></box-icon>
        <span>Desarrollo Web</span>
      </div>
      <div class="floating-card second">
        <box-icon name='server' size='md' color='var(--rosa-acento)'></box-icon>
        <span>Infraestructura</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'boxicons'
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  background: var(--azul-profundo);
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.glow-1 {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%);
  filter: blur(50px);
}

.glow-2 {
  position: absolute;
  bottom: -10%;
  left: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 206, 209, 0.2) 0%, transparent 70%);
  filter: blur(50px);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 650px;
}

.title {
  font-size: 4rem;
  color: var(--blanco-puro);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  color: var(--cian-electrico);
  text-shadow: 0 0 20px rgba(0, 206, 209, 0.3);
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-group {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--violeta-marca);
  color: var(--blanco-puro);
  box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(138, 43, 226, 0.4);
  background: var(--rosa-acento);
}

.btn-outline {
  background: transparent;
  color: var(--blanco-puro);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.btn-outline:hover {
  border-color: var(--cian-electrico);
  background: rgba(0, 206, 209, 0.1);
}

.hero-visual {
  position: relative;
  z-index: 2;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 180px;
  color: var(--blanco-puro);
  animation: float 6s ease-in-out infinite;
}

.floating-card.second {
  animation-delay: -3s;
  position: absolute;
  top: 60%;
  left: 10%;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}

@media (max-width: 1200px) {
  .title { font-size: 3.5rem; }
  .hero-visual { display: none; }
}

@media (max-width: 768px) {
  .hero { padding: 0 5%; text-align: center; }
  .title { font-size: 2.8rem; }
  .cta-group { justify-content: center; }
  .subtitle { font-size: 1.1rem; }
}
</style>
