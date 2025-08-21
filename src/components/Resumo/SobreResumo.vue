<template>
  <section class="new-section" ref="aboutSection">
    <div class="about-content-wrapper-full">
      <div class="title-with-image">
        <h2 class="about-title" :class="{ 'animate-title-line': isSectionVisible }">{{ translatedContent.title }}</h2>
        <img :src="starIconUrl" :alt="translatedContent.altStar" class="section-image"
          :class="{ 'animate-shining-image': isSectionVisible }" />
      </div>
      <div class="about-content-wrapper">
        <div class="about-text-and-buttons">
          <p class="about-text">{{ translatedContent.aboutText }}</p>
          <div class="button-container">
            <!-- CV Download Button -->
            <a href="/CURRICULO_GABRIELA_A.pdf" download="CV-Akira.pdf" class="action-button cv-button">
              <i class="bi bi-file-earmark-post"></i>
              <span>CV</span>
            </a>
            <!-- Trello Link Button -->
            <a href="https://trello.com/b/CHEXxbf2/⭐-commissions-⭐" target="_blank" class="action-button trello-button">
              <i class="bi bi-trello"></i>
              <span>Trello</span>
            </a>
          </div>
        </div>
        <div class="about-image-container" :alt="translatedContent.altPaperBackground">
          <div class="image-box" :alt="translatedContent.altMyDrawing">
          </div>
          <div class="bakisune-info" :alt="translatedContent.altBakisuneInfo">
            <i class="bi bi-moon-stars-fill"></i> バキスネ
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { translations } from '../../translations';
import { activeLanguage } from '../../languageStore';
import starIconUrl from '../../assets/starsobre.svg';
import papelBackgroundUrl from '../../assets/Papel.png';
import myDrawingUrl from '../../assets/Teste.png';

const aboutSection = ref(null);
const isSectionVisible = ref(false);
let observer;

const translatedContent = computed(() => {
  return translations.SobreResumo[activeLanguage.value] || translations.SobreResumo.en;
});

onMounted(() => {
  if (aboutSection.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isSectionVisible.value = true;
          }, 300);
        } else {
          isSectionVisible.value = false;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(aboutSection.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'Mokomori Kuro';
  src: url('../../assets/font/mikiyu-mokomori-kuro.ttf') format('truetype');
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-8px);
  }

  60% {
    transform: translateY(-4px);
  }
}

.new-section {
  position: relative;
  margin-top: -10vh;
  padding: 2.5rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.25rem;
  padding-bottom: 10.0rem;
  background-color: transparent;
  // Adicionando a fonte geral para a seção
  font-family: 'Poppins', sans-serif;
}

.new-section::before {
  content: "";
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--cor-fundo);
  z-index: 0;
}

.new-section::after {
  content: "";
  position: absolute;
  top: -2vh;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 1%;
  background-image: url("../../assets/Papel.png");
  background-size: cover;
  background-position: calc(30% + 0.0rem) center;
  background-repeat: no-repeat;
  z-index: 1;
}

.title-with-image {
  display: flex;
  align-items: center;
  position: relative;
  width: 80%;
  max-width: 75.0rem;
  align-self: flex-start;
  margin-left: 10%;
  margin-bottom: 1.25rem;
  z-index: 2;
}

.about-title {
  // Removido o font-family duplicado
  color: var(--roxo-claro);
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 0;
  position: relative;
  padding-bottom: 0.625rem;
  z-index: 2;
}

.about-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0.25rem;
  background-color: var(--roxo-claro);
  border-radius: 0.125rem;
  transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.about-title.animate-title-line::after {
  width: 9.375rem;
}

.section-image {
  width: 3.125rem;
  height: 3.125rem;
  object-fit: cover;
  background: transparent;
  margin-left: -5.625rem;
  margin-bottom: -5.0rem;
}

@keyframes shiningEffect {
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(180deg) scale(0.5);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
}

.animate-shining-image {
  animation: shiningEffect 1.9s ease-in-out infinite;
}

.about-content-wrapper-full {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.about-content-wrapper {
  display: flex;
  flex-direction: row;
  gap: 3.75rem;
  max-width: 75.0rem;
  width: 80%;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 2;
}

.about-text-and-buttons {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.about-text {
  // Removido o font-family duplicado
  color: var(--cor-fundo);
  line-height: 1.8;
  font-size: 1.2em;
  text-align: justify;
  margin-right: 8%;
  margin-top: 0.9375rem;
  min-height: 7.5rem;
}

.button-container {
  display: flex;
  gap: 0.9375rem;
  margin-top: 1.25rem;
  margin-left: 0;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background-color: var(--roxo-claro);
  color: #fff;
  // A fonte nos botões agora é herdada da seção principal
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease;
  border: 0.125rem solid transparent;
  cursor: pointer;
}

.action-button:hover {
  transform: translateY(-0.1875rem);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.2);
  background-color: var(--amarelo);
}

.action-button .bi {
  font-size: 1.2em;
  transition: transform 0.3s ease;
}

.action-button:hover .bi {
  animation: bounce 1.2s ease-in-out;
}

.about-image-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.image-box {
  width: 25.0rem;
  height: 28.125rem;
  background-image: url("../../assets/Teste.png");
  background-size: cover;
  background-position: center;
  border: 0.25rem solid var(--roxo-claro);
  border-radius: 0.625rem;
  margin-bottom: 1%;
  position: relative;
}

.bakisune-info {
  font-family: 'Mokomori Kuro', sans-serif;
  position: absolute;
  bottom: -1.25rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--roxo-claro);
  font-weight: 600;
  font-size: 1.1em;
}

.bakisune-info::before {
  content: none;
}

@media (max-width: 48.0rem) {
  .title-with-image {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }

  .section-image {
    margin-left: 0;
    margin-top: 1.25rem;
  }

  .about-content-wrapper {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  .about-title {
    align-self: center;
    margin-left: 0;
    text-align: center;
  }

  .about-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .about-text-and-buttons {
    align-items: center;
  }

  .about-text {
    margin-right: 0;
    text-align: center;
  }

  .button-container {
    justify-content: center;
  }

  .image-box {
    width: 100%;
    height: auto;
    aspect-ratio: 4/4.5;
  }
}
</style>
