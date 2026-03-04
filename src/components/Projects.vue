<template>
  <section class="projects" id="proyectos">
    <div class="container">
      <h2 class="section-title">Nuestros <span class="highlight">Proyectos</span></h2>
      <p class="section-subtitle">Innovación y calidad en cada línea de código.</p>
      
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div class="project-image">
            <div class="overlay">
              <a :href="project.link" :target="project.target" class="view-btn">Ver Proyecto</a>
            </div>
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="project-info">
            <span class="category">{{ project.category }}</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const getImageUrl = (path) => {
  return new URL(path, import.meta.url).href;
};
const projects = [
  {
    title: 'Security Focus',
    category: 'Sistema Integral',
    description: 'Proyecto destinado a optimizar la seguridad y administración de barrios privados. Este sistema integral combina diversas tecnologías avanzadas para asegurar un control de acceso y seguridad eficaz.',
    image: getImageUrl('/proyectos/security(2).png'),
    link: 'https://security-focus.netlify.app/',
    target: '_blank'
  },
  {
    title: 'HardShop',
    category: 'Software para Tiendas de Ropa',
    description: 'Software de gestión para tiendas de ropa, diseñado para optimizar el inventario, ventas y atención al cliente. Con una interfaz intuitiva y funcionalidades avanzadas, HardShop es la solución ideal para modernizar tu negocio.',
    image: getImageUrl('/proyectos/hardshop.png'),
    link: 'https://hardshop.netlify.app/',
    target: '_blank'
  },
  {
    title: 'Página para FGTools',
    category: 'Página Web',
    description: 'Página web Para FGtools, la cual consiste en un catálogo de sus productos, con información detallada y contacto para clientes potenciales. Esta página web está diseñada para mejorar la presencia en línea de FGtools y facilitar la conexión con su audiencia.',
    image: getImageUrl('/proyectos/Fgtools.ico'),
    link: 'https://fgtools.com.ar/',
    target: '_blank'
  },
    {
    title: 'Página para Oli',
    category: 'Página Web',
    description: 'Página web Para Premoldeados Oli. La misma contiene información sobre la empresa y sus servicios y a su vez un catálogo de sus productos. se diseñó para mejorar la presencia en línea de Premoldeados Oli y facilitar la conexión con su audiencia.',
    image: getImageUrl('/proyectos/Oli.png'),
    link: 'https://premoldeadosoli.com.ar/',
    target: '_blank'
  }
]
</script>

<style scoped>
.projects {
  background-color: var(--blanco-puro);
}

.section-title {
  text-align: center;
  font-size: 3rem;
  color: var(--azul-profundo);
  margin-bottom: 0.5rem;
}

.highlight {
  color: var(--violeta-marca);
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 4rem;
  font-size: 1.2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.4s ease;
  border: 1px solid var(--gris-lavanda);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(138, 43, 226, 0.15);
}

.project-image {
  position: relative;
  height: 220px; 
  overflow: hidden;
  background-color: var(--gris-lavanda); 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  transition: transform 0.5s ease;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.08));
}

.project-card:hover .project-image img {
  transform: scale(1.05); 
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 25, 112, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.project-card:hover .overlay {
  opacity: 1;
}

.view-btn {
  padding: 0.8rem 1.5rem;
  background: var(--cian-electrico);
  color: var(--azul-profundo);
  text-decoration: none;
  font-weight: 700;
  border-radius: 30px;
  transition: transform 0.3s ease;
}

.view-btn:hover {
  transform: scale(1.05);
  background: var(--blanco-puro);
}

.project-info {
  padding: 1.5rem;
}

.category {
  color: var(--rosa-acento);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-info h3 {
  margin: 0.5rem 0;
  color: var(--azul-profundo);
  font-size: 1.4rem;
}

.project-info p {
  color: #555;
  font-size: 0.95rem;
}
</style>
