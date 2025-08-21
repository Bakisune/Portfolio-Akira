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
              <a href="#" @click.prevent="scrollToSection('HeaderResumo')"
                :class="{ 'active-link': activeSectionId === 'HeaderResumo' }" :aria-label="translatedLinks.home"
                :title="translatedLinks.home">
                <i class="bi bi-house-fill"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('SobreResumo')"
                :class="{ 'active-link': activeSectionId === 'SobreResumo' }" :aria-label="translatedLinks.about"
                :title="translatedLinks.about">
                <i class="bi bi-person-fill"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('Projetos')"
                :class="{ 'active-link': activeSectionId === 'Projetos' }" :aria-label="translatedLinks.projects"
                :title="translatedLinks.projects">
                <i class="bi bi-stars"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('Skills')"
                :class="{ 'active-link': activeSectionId === 'Skills' }" :aria-label="translatedLinks.skills"
                :title="translatedLinks.skills">
                <i class="bi bi-lightning-charge-fill"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('Formacoes')"
                :class="{ 'active-link': activeSectionId === 'Formacoes' }" :aria-label="translatedLinks.education"
                :title="translatedLinks.education">
                <i class="bi bi-mortarboard-fill"></i>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollToSection('Contatos')"
                :class="{ 'active-link': activeSectionId === 'Contatos' }" :aria-label="translatedLinks.contact"
                :title="translatedLinks.contact">
                <i class="bi bi-send-fill"></i>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" @click.prevent="toggleLanguage" class="language-toggle"
            :class="{ 'active-link': isLanguageMenuOpen }" :aria-label="translatedLinks.translate"
            :title="translatedLinks.translate">
            <i class="bi bi-translate"></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <transition name="language-fade">
    <div v-show="isLanguageMenuOpen" class="language-box">
      <ul class="language-options">
        <li>
          <a href="#" @click.prevent="setLanguage('en', $event)">
            <div class="language-icon-container" :class="{ 'active-language-icon': activeLanguage === 'en' }">
              <img src="../../assets/eng.svg" :alt="translatedFlags.en" width="35" height="35" class="language-flag">
            </div>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="setLanguage('pt', $event)">
            <div class="language-icon-container" :class="{ 'active-language-icon': activeLanguage === 'pt' }">
              <img src="../../assets/Ptbr.svg" :alt="translatedFlags.pt" width="35" height="35" class="language-flag">
            </div>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="setLanguage('es', $event)">
            <div class="language-icon-container" :class="{ 'active-language-icon': activeLanguage === 'es' }">
              <img src="../../assets/esp.svg" :alt="translatedFlags.es" width="35" height="35" class="language-flag">
            </div>
          </a>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Howl } from 'howler';
import { translations } from '../../translations';
import { activeLanguage, setGlobalLanguage } from '../../languageStore';

const isSidebarOpen = ref(true);
const activeSectionId = ref('HeaderResumo');
const sectionIds = ['HeaderResumo', 'SobreResumo', 'Projetos', 'Skills', 'Formacoes', 'Contatos'];
const sound = ref(null);
const isLanguageMenuOpen = ref(false);

const translatedLinks = computed(() => {
  // Busca todas as traduções do cabeçalho, incluindo 'projects'
  return translations.HeaderResumo[activeLanguage.value] || translations.HeaderResumo.en;
});

const translatedFlags = computed(() => {
  return {
    en: "English",
    pt: "Português",
    es: "Español"
  };
});

onMounted(() => {
  const savedLanguage = localStorage.getItem('user-language');
  if (savedLanguage) {
    setGlobalLanguage(savedLanguage);
  }

  sound.value = new Howl({
    src: ['/audios/trade.mp3'],
    html5: true,
    onloaderror: (id, err) => {
      console.error('Erro ao carregar o áudio. O arquivo pode não existir ou o caminho está incorreto.', { id, err });
    }
  });

  window.addEventListener('scroll', handleScroll);
  handleScroll();
  animateActiveLanguage();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (sound.value) {
    sound.value.unload();
  }
});

const toggleSidebar = () => {
  playSound();
  if (isSidebarOpen.value && isLanguageMenuOpen.value) {
    isLanguageMenuOpen.value = false;
    setTimeout(() => {
      isSidebarOpen.value = false;
    }, 300);
  } else {
    isSidebarOpen.value = !isSidebarOpen.value;
  }
};

const scrollToSection = (sectionId) => {
  playSound();
  if (isLanguageMenuOpen.value) {
    isLanguageMenuOpen.value = false;
  }
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    let offset = 0;
    if (sectionId === 'Projetos') {
      offset = 150;
    } else if (sectionId === 'Skills') {
      offset = -50;
    }
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
    activeSectionId.value = sectionId;
  }
};

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  let newActiveSectionId = null;
  for (const sectionId of sectionIds) {
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
    activeSectionId.value = newActiveSectionId;
  }
};

const playSound = () => {
  if (sound.value && sound.value.state() === 'loaded') {
    sound.value.play();
  }
};

const toggleLanguage = () => {
  playSound();
  isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
};

const setLanguage = (lang, event) => {
  playSound();
  localStorage.setItem('user-language', lang);
  setGlobalLanguage(lang);
  const iconContainer = event.currentTarget.querySelector('.language-icon-container');
  if (iconContainer) {
    iconContainer.classList.remove('bounce-anim');
    setTimeout(() => {
      iconContainer.classList.add('bounce-anim');
    }, 0);
  }
  console.log('Language set to:', lang);
  setTimeout(() => {
    isLanguageMenuOpen.value = false;
  }, 800);
};

const animateActiveLanguage = () => {
  setTimeout(() => {
    const activeIcon = document.querySelector('.language-icon-container.active-language-icon');
    if (activeIcon) {
      activeIcon.classList.remove('bounce-anim');
      setTimeout(() => {
        activeIcon.classList.add('bounce-anim');
      }, 0);
    }
  }, 100);
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

.language-box {
  position: fixed;
  z-index: 999;
  top: 69.1%;
  left: 85px;
  transform: translateY(-50%);
  padding: 8px;
  border-radius: 0 25px 25px 0;
  background-color: var(--roxo-mais-claro);
  opacity: 0.8;
}

.language-options {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.language-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 0.7em;
  font-weight: bold;
  color: var(--roxo-claro);
  border: 1px solid var(--roxo-mais-claro);
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.language-flag {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.language-icon-container:hover {
  border-color: var(--roxo-claro);
}

.language-icon-container.active-language-icon {
  border: 2px solid var(--roxo-claro);
  box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
  transform: scale(1.1);
}

.language-fade-enter-active,
.language-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.language-fade-enter,
.language-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px) translateY(-50%);
}

html,
body {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.language-icon-container.bounce-anim {
  animation: bounce 0.4s ease-in-out;
}
</style>
