<template>
  <section class="education-section" ref="educationSection">
    <div class="container-content">
      <div class="title-with-image">
        <h2 
          class="education-title" 
          :class="{ 'animate-title-line': isSectionVisible }"
        >
          Academic Background
        </h2>
        <img 
          src="../assets/star.svg" 
          alt="Star Icon" 
          class="section-image" 
          :class="{ 'animate-shining-image': isSectionVisible }"
        />
      </div>

      <div class="timeline-wrapper">
        <div class="timeline-item timeline-item-even">
          <img src="../assets/imagemcard.svg" alt="Card Icon" class="card-icon" />
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <p class="course-title">2018-2020</p>
            <p class="institution-info">• Design e Web Design</p>
            <p class="institution-local"> ZION-RJ</p>
          </div>
        </div>
        <div class="timeline-item timeline-item-odd">
          <img src="../assets/imagemcard.svg" alt="Card Icon" class="card-icon" />
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <p class="course-title">2022-Current</p>
            <p class="institution-info">• Bachelor in Software
              Engineering</p>
            <p class="institution-local"> UNINTER-MA</p>
          </div>
        </div>
        <div class="timeline-item timeline-item-even">
          <img src="../assets/imagemcard.svg" alt="Card Icon" class="card-icon" />
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <p class="course-title">2022-Current</p>
            <p class="institution-info">• Jovem Tech
              Program</p>
            <p class="institution-local"> PULSE-MA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const educationSection = ref(null);
const isSectionVisible = ref(false);
let observer;

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
  padding: 60px 0 125px;
}

.container-content {
  width: 90%;
  max-width: 1000px;
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
  margin-bottom: 225px;
}

.education-section .education-title {
  font-size: bold;
  color: var(--cor-branca);
  font-size: 3em;
  font-weight: 700;
  position: relative;
  text-align: left;
  display: inline-block;
  margin-right: 20px;
}

.education-section .education-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 4px;
  background-color: var(--roxo-claro);
  border-radius: 2px;
  transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.education-section .education-title.animate-title-line::after {
  width: 580px;
}

.section-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 100%;
  transform: translateY(-50%);
  margin-right: 350px;
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

.education-section .timeline-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;
}

.education-section .timeline-wrapper::before {
  content: '';
  position: absolute;
  top: 13%;
  left: 0;
  width: 100%;
  height: 1.5px;
  background-color: var(--roxo-claro);
  z-index: 0;
}

.education-section .timeline-item {
  position: relative;
  width: 250px;
  height: 185px;
  padding: 20px;
  margin: 0 15px;
  background-color: var(--container);
  border: 2px solid var(--cor-branca);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.card-icon {
  position: absolute;
  top: -15px;
  left: -25px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  object-fit: cover;
  z-index: 2;
  transition: transform 0.3s ease;
}

.education-section .timeline-item-even:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.education-section .timeline-item-odd:hover {
  transform: translateY(calc(-100% + 5px)) scale(1.02);
  box-shadow: 6px 12px rgba(0, 0, 0, 0.25);
}

.education-section .timeline-item:hover .timeline-dot {
  transform: translateX(-50%) scale(calc(1 / 1.02));
}

.education-section .timeline-item:hover .card-icon {
  transform: scale(calc(1 / 1.02));
}

.education-section .timeline-item-even {
  margin-top: 30px;
}

.education-section .timeline-item-odd {
  margin-bottom: 30px;
  transform: translateY(-100%);
}

.education-section .timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background-color: var(--roxo-claro);
  border: 2px solid var(--cor-branca);
  border-radius: 50%;
  z-index: 1;
  transition: transform 0.3s ease;
}

.education-section .timeline-item-even .timeline-dot {
  top: -20px;
}

.education-section .timeline-item-odd .timeline-dot {
  bottom: -20px;
}

.education-section .course-title {
  font-weight: 700;
  font-style: italic;
  font-size: 25px;
  margin-bottom: 35px;
}

.education-section .timeline-item-odd .course-title {
  margin-bottom: 15px;
}

.education-section .institution-info {
  font-weight: 600;
  font-style: italic;
  font-size: 16px;
  margin-bottom: 15px;
}

.education-section .institution-local {
  font-weight: 900;
  font-style: italic;
  font-size: 12px;
  text-align: right;
}

@media (max-width: 768px) {
  .education-section .timeline-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .education-section .timeline-item {
    margin: 15px 0;
    transform: none;
  }

  .education-section .timeline-item-even,
  .education-section .timeline-item-odd {
    margin-bottom: 15px;
    margin-top: 15px;
  }

  .education-section .timeline-wrapper::before {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
  }

  .education-section .timeline-dot {
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
  }

  .section-image {
    position: static;
    transform: none;
    margin-top: 20px;
    margin-right: 0;
  }

  .title-with-image {
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
  }
}
</style>
