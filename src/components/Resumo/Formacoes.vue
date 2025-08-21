<template>
  <section class="education-section" ref="educationSection">
    <div class="container-content">
      <div class="title-with-image">
        <h2 class="education-title" :class="{ 'animate-title-line': isSectionVisible }">
          {{ translated.title }}
        </h2>
        <img :src="starUrl" :alt="translated.altStar" class="section-image"
          :class="{ 'animate-shining-image': isSectionVisible }" />
      </div>

      <div class="timeline-wrapper">
        <div class="timeline-item timeline-item-even">
          <img :src="cardUrl" :alt="translated.altCard" class="card-icon"
            :class="{ 'animate-card-entrance': isSectionVisible }" />
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <p class="course-title">{{ translated.timeline.item1.title }}</p>
            <p class="institution-info">{{ translated.timeline.item1.course }}</p>
            <p class="institution-local">{{ translated.timeline.item1.institution }}</p>
          </div>
        </div>
        <div class="timeline-item timeline-item-odd">
          <img :src="cardUrl" :alt="translated.altCard" class="card-icon"
            :class="{ 'animate-card-entrance': isSectionVisible }" />
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <p class="course-title">{{ translated.timeline.item2.title }}</p>
            <p class="institution-info">{{ translated.timeline.item2.course }}</p>
            <p class="institution-local">{{ translated.timeline.item2.institution }}</p>
          </div>
        </div>
        <div class="timeline-item timeline-item-even">
          <img :src="cardUrl" :alt="translated.altCard" class="card-icon"
            :class="{ 'animate-card-entrance': isSectionVisible }" />
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <p class="course-title">{{ translated.timeline.item3.title }}</p>
            <p class="institution-info">{{ translated.timeline.item3.course }}</p>
            <p class="institution-local">{{ translated.timeline.item3.institution }}</p>
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
import starUrl from '../../assets/star.svg';
import cardUrl from '../../assets/imagemcard.svg';

const educationSection = ref(null);
const isSectionVisible = ref(false);
let observer;
const translated = computed(() => {
  return translations.EducationResumo[activeLanguage.value] || translations.EducationResumo.pt;
});

onMounted(() => {
  if (educationSection.value) {
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
    observer.observe(educationSection.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.education-section {
  font-family: Poppins, sans-serif;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cor-fundo);
  color: var(--cor-branca);
  width: 100%;
  padding: 3.75rem 0 7.8125rem;
}

.container-content {
  width: 90%;
  max-width: 62.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-with-image {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  align-self: flex-start;
  margin-bottom: 14.0625rem;
}

.education-section .education-title {
  font-size: bold;
  color: var(--cor-branca);
  font-size: 3em;
  font-weight: 700;
  position: relative;
  text-align: left;
  display: inline-block;
  margin-right: 1.25rem;
}

.education-section .education-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.5rem;
  width: 0;
  height: 0.25rem;
  background-color: var(--cor-branca);
  border-radius: 0.125rem;
  transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.education-section .education-title.animate-title-line::after {
  width: 36.25rem;
}

.section-image {
  width: 3.125rem;
  height: 3.125rem;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 100%;
  transform: translateY(-50%);
  margin-right: 21.875rem;
  background: transparent;
  transition: transform 0.3s ease;
}

@keyframes shiningEffect {
  0% {
    transform: translateY(-50%) rotate(0deg) scale(1);
    filter: brightness(1);
  }

  50% {
    transform: translateY(-50%) rotate(180deg) scale(0.5);
    filter: brightness(1.5);
  }

  100% {
    transform: translateY(-50%) rotate(360deg) scale(1);
    filter: brightness(1);
  }
}

.animate-shining-image {
  animation: shiningEffect 1.90s ease-in-out infinite;
}

@keyframes cardSpinEntrance {
  0% {
    opacity: 0;
    transform: translateY(1.25rem) scale(0.8) rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(360deg);
  }
}

.animate-card-entrance {
  animation: cardSpinEntrance 0.8s ease-out forwards;
}

/* Efeito de atraso para cada item */
.timeline-item:nth-child(1) .animate-card-entrance {
  animation-delay: 0.1s;
}

.timeline-item:nth-child(2) .animate-card-entrance {
  animation-delay: 0.3s;
}

.timeline-item:nth-child(3) .animate-card-entrance {
  animation-delay: 0.5s;
}

.education-section .timeline-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.education-section .timeline-wrapper::before {
  content: '';
  position: absolute;
  top: 13%;
  left: 0;
  width: 100%;
  height: 0.0938rem;
  background-color: var(--roxo-claro);
  z-index: 0;
}

.education-section .timeline-wrapper::after {
  content: '';
  position: absolute;
  top: 13.5%;
  left: 0.625rem;
  width: 0.625rem;
  height: 0.625rem;
  background-color: var(--amarelo);
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.education-section .timeline-item {
  position: relative;
  width: 15.625rem;
  height: 11.5625rem;
  padding: 1.25rem;
  margin: 0 0.9375rem;
  background-color: var(--container);
  border: 0.125rem solid var(--cor-branca);
  border-radius: 0.9375rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.card-icon {
  position: absolute;
  top: -0.9375rem;
  left: -1.5625rem;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: transparent;
  object-fit: cover;
  z-index: 2;
  opacity: 0;
  transition: transform 0.3s ease;
}

.education-section .timeline-item-even:hover {
  transform: translateY(-0.3125rem) scale(1.02);
  box-shadow: 0 0.375rem 0.75rem rgba(0, 0, 0, 0.25);
}

.education-section .timeline-item-odd:hover {
  transform: translateY(calc(-100% + 0.3125rem)) scale(1.02);
  box-shadow: 0 0.375rem 0.75rem rgba(0, 0, 0, 0.25);
}

.education-section .timeline-item:hover .timeline-dot {
  transform: translateX(-50%) scale(calc(1 / 1.02));
}

.education-section .timeline-item:hover .card-icon {
  transform: scale(calc(1 / 1.02));
}

.education-section .timeline-item-even {
  margin-top: 1.875rem;
}

.education-section .timeline-item-odd {
  margin-bottom: 1.875rem;
  transform: translateY(-100%);
}

.education-section .timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 0.75rem;
  height: 0.75rem;
  background-color: var(--roxo-claro);
  border: 0.125rem solid var(--cor-branca);
  border-radius: 50%;
  z-index: 1;
  transition: transform 0.3s ease;
}

.education-section .timeline-item-even .timeline-dot {
  top: -1.25rem;
}

.education-section .timeline-item-odd .timeline-dot {
  bottom: -1.25rem;
}

.education-section .course-title {
  font-weight: 700;
  font-style: italic;
  font-size: 1.5625rem;
  margin-bottom: 2.1875rem;
}

.education-section .timeline-item-odd .course-title {
  margin-bottom: 0.9375rem;
}

.education-section .institution-info {
  font-weight: 600;
  font-style: italic;
  font-size: 1.0rem;
  margin-bottom: 0.9375rem;
}

.education-section .institution-local {
  font-weight: 900;
  font-style: italic;
  font-size: 0.75rem;
  text-align: right;
}

@media (max-width: 48.0rem) {
  .education-section .timeline-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .education-section .timeline-item {
    margin: 0.9375rem 0;
    transform: none;
  }

  .education-section .timeline-item-even,
  .education-section .timeline-item-odd {
    margin-bottom: 0.9375rem;
    margin-top: 0.9375rem;
  }

  .education-section .timeline-wrapper::before {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0.125rem;
    height: 100%;
  }

  .education-section .timeline-wrapper::after {
    left: calc(50% - 0.9375rem);
  }

  .education-section .timeline-dot {
    top: 50%;
    left: -1.25rem;
    transform: translateY(-50%);
  }

  .section-image {
    position: static;
    transform: none;
    margin-top: 1.25rem;
    margin-right: 0;
  }

  .title-with-image {
    flex-direction: column;
    align-items: center;
    margin-bottom: 12.5rem;
  }
}
</style>
