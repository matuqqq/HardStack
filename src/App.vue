<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Companies from './components/Companies.vue'
import About from './components/About.vue'
import WhatsappButton from './components/WhatsappButton.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <Hero />
    <Services />
    <Projects />
    <Companies />
    <About />
    <WhatsappButton />
    
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="/HardStack.png" alt="HardStack Logo" class="footer-logo">
            <p>Transformando el futuro tecnológico, un proyecto a la vez.</p>
          </div>
          <div class="footer-links">
            <h4>Navegación</h4>
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#nosotros">Nosotros</a>
          </div>
          <div class="footer-contact">
            <h4>Contacto</h4>
            <p>Email: hardstack.arg@gmail.com</p>
            <p>Instagram: @hardstack.arg</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Hard Stack. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

.footer {
  background: var(--azul-profundo);
  color: var(--blanco-puro);
  padding: 4rem 10% 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-logo {
  height: 4rem;
  margin-bottom: 1.5rem;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.6);
  max-width: 300px;
}

.footer-links h4, .footer-contact h4 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--cian-electrico);
}

.footer-contact p {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.8rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  .footer-brand p {
    margin: 0 auto;
  }
}
</style>
