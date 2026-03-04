<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="logo-container">
        <img src="../assets/HardStack.png" alt="Hardstack Logo" class="logo-img" />
        <span class="logo-text">Hard <span class="stack">Stack</span></span>
      </div>
      
      <div class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav-links" :class="{ active: isMenuOpen }">
        <a href="#inicio" @click="closeMenu">Inicio</a>
        <a href="#servicios" @click="closeMenu">Servicios</a>
        <a href="#proyectos" @click="closeMenu">Proyectos</a>
        <a href="#empresas" @click="closeMenu">Empresas</a>
        <a href="#nosotros" @click="closeMenu">Nosotros</a>
        <div class="social-links">
          <a href="https://www.instagram.com/hardstack.arg" target="_blank" class="social-icon">
            <box-icon type='logo' name='instagram' color='var(--blanco-puro)'></box-icon>
          </a>
          <a 
            :href="mailLink" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-icon"
          >
            <box-icon name='envelope' color='var(--blanco-puro)'></box-icon>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import 'boxicons'
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const mailLink = ref("mailto:hardstack.arg@gmail.com") // Default móvil

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Lógica de detección de dispositivo
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (!isMobile) {
    // Si es PC → Redirigir a Gmail Web (Compose)
    mailLink.value = "https://mail.google.com/mail/?view=cm&fs=1&to=hardstack.arg@gmail.com"
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Tu CSS se mantiene exactamente igual */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  background: transparent;
  transition: all 0.4s ease;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.navbar.scrolled {
  padding: 0.8rem 0;
  background: rgba(25, 25, 112, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.nav-container {
  width: 85%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  z-index: 1100;
}

.logo-img {
  height: 3rem;
  width: auto;
}

.logo-text {
  color: var(--blanco-puro);
  font-size: 1.4rem;
  font-weight: 700;
  white-space: nowrap;
}

.logo-text .stack {
  color: var(--violeta-marca);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: var(--blanco-puro);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: 0.3s;
}

.nav-links a:hover {
  color: var(--cian-electrico);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  transition: 0.3s;
}

.social-icon:hover {
  background: var(--violeta-marca);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 1100;
}

.hamburger span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: var(--blanco-puro);
  border-radius: 3px;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
  .hamburger.active span:nth-child(2) { opacity: 0; }
  .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(6px, -7px); }

  .nav-links {
    position: fixed;
    top: -110vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--azul-profundo);
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    z-index: 1050;
  }

  .nav-links.active {
    top: 0;
  }

  .nav-links a {
    font-size: 1.8rem;
  }

  .social-links {
    margin-top: 2rem;
  }
}

@media (max-width: 480px) {
  .logo-text { display: none; }
  .nav-container { width: 90%; }
}
</style>