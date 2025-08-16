<template>
  <header class="header" :class="{ 'closed': !isSidebarOpen }">
    <nav class="nav">
      <div class="toggle-button" @click="toggleSidebar">
        <i class="bi bi-list"></i>
      </div>
      <ul class="nav-list" :class="{ 'hidden': !isSidebarOpen }">
        <li class="nav-group">
          <ul class="nav-list-grouped">
            <li>
              <a href="#" @click.prevent="scrollToSection('HeaderResumo')" :class="{ 'active-link': activeSectionId === 'HeaderResumo' }">
                <i class="bi bi-house-fill" alt="Button that takes you to Home"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('SobreResumo')" :class="{ 'active-link': activeSectionId === 'SobreResumo' }">
                <i class="bi bi-person-fill" alt="Button that takes you to About Me"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('Especialidades')" :class="{ 'active-link': activeSectionId === 'Especialidades' }">
                <i class="bi bi-award-fill" alt="Button that takes you to My Specialties"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('Skills')" :class="{ 'active-link': activeSectionId === 'Skills' }">
                <i class="bi bi-stars" alt="Button that takes you to My Skills"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('Formacoes')" :class="{ 'active-link': activeSectionId === 'Formacoes' }">
                <i class="bi bi-book" alt="Button that takes you to My Academic Background"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('Contatos')" :class="{ 'active-link': activeSectionId === 'Contatos' }">
                <i class="bi bi-send-fill" alt="Button that takes you to My Contacts"></i>
              </a>
            </li>
          </ul>
        </li>
        <li><a href="#"><i class="bi bi-translate"></i></a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SideBarResumo',
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  data() {
    return {
      isSidebarOpen: true,
      activeSectionId: 'HeaderResumo',
      sectionIds: ['HeaderResumo', 'SobreResumo', 'Especialidades', 'Skills', 'Formacoes', 'Contatos']
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.activeSectionId = sectionId;
      }
    },

    handleScroll() {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      let newActiveSectionId = null;
      for (const sectionId of this.sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const threshold = viewportHeight * 0.5;

          if (rect.top <= threshold && rect.bottom >= threshold) {
            newActiveSectionId = sectionId;
            break; 
          }
        }
      }
      
      if (newActiveSectionId) {
        this.activeSectionId = newActiveSectionId;
      }
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  width: 40px;
  height: 340px;
  padding: 40px 2px;
  border-radius: 25px;
  background-color: var(--roxo-mais-claro);
  transition: height 0.4s ease, border-radius 0.4s ease, padding 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header.closed {
  height: 40px;
  padding: 0;
  border-radius: 50%;
  transform: translateY(-50%);
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.toggle-button {
  cursor: pointer;
  padding: 8px;
  font-size: 1.5em;
  color: var(--roxo-desligado);
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header.closed .toggle-button {
  margin-top: 2px;
}

.toggle-button:hover {
  color: var(--roxo-claro);
}

.nav-list.hidden {
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  padding: 0;
  transition: opacity 0.4s ease, visibility 0.4s ease;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.4s ease, visibility 0.4s ease;
}

.nav-list-grouped {
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list a {
  color: var(--roxo-desligado);
  text-decoration: none;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}

.nav-list a:hover {
  color: var(--roxo-claro);
}

.nav-list a.active-link,
.nav-list a.active-link:hover {
  color: var(--roxo-claro);
}

html,
body {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}
</style>
