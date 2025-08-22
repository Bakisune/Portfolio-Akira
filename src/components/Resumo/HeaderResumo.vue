<script setup>
import { computed } from 'vue';
import BackgroundImage from '../../assets/Teste.png';
import { translations } from '../../translations';
import { activeLanguage } from '../../languageStore';

const translatedContent = computed(() => {
  return translations.HeaderResumo[activeLanguage.value] || translations.HeaderResumo.en;
});
</script>

<template>
  <header class="header">
    <div class="left-strip">
      <!-- O logo permanece dentro da faixa lateral, conforme solicitado. -->
      <div class="logo" :alt="translatedContent.altLogo"></div>
    </div>

    <div class="background-image" :style="{ backgroundImage: 'url(' + BackgroundImage + ')' }"
      :alt="translatedContent.altBackground"></div>

    <div class="content">
      <p class="name">Akira Alcantara</p>
      <h1 class="title-part1">{{ translatedContent.titlePart1 }}</h1>
      <h1 class="title-part2">{{ translatedContent.titlePart2 }}</h1>
      <p class="skills">{{ translatedContent.skillsText }}</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--cor-fundo);

  .left-strip {
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background-color: var(--roxo-escuro);
    z-index: 2;
    display: flex;
    justify-content: center;
  }

  .background-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 90%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
    opacity: 0.2;
    z-index: 0;
  }

  .logo {
    // Posição padrão para telas maiores, dentro da faixa lateral.
    position: absolute;
    top: 2.5rem;
    height: 5.0rem;
    width: 5.0rem;
    background-image: url('/bakisunestickerlogo.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 3;
  }

  .content {
    position: absolute;
    top: 24.5%;
    z-index: 1;
    margin-left: calc(10% + 1.875rem);
    color: var(--cor-branca);
    background: transparent;

    @media (max-width: 1024px) {
      margin-left: calc(10% + 1rem);

      .name {
        font-size: 1em !important;
      }

      .title-part1 {
        font-size: 3em !important;
      }

      .title-part2 {
        font-size: 8em !important;
      }

      .skills {
        font-size: 0.8em !important;
      }
    }

    @media (max-width: 768px) {

      // Ajustes para telas menores, como tablets
      .background-image {
        opacity: 0.5;
        width: 100%;
        background-position: center;
      }

      // A faixa lateral agora tem 100% de largura, mas é transparente.
      .left-strip {
        width: 100%;
        background-color: transparent;
      }

      .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        margin-left: 0;
      }

      // O logo, que ainda está dentro da faixa, é posicionado e redimensionado.
      .logo {
        height: 4.0rem;
        width: 4.0rem;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      }

      .name {
        font-size: 0.7em !important;
      }

      .title-part1 {
        font-size: 2em !important;
      }

      .title-part2 {
        font-size: 5em !important;
      }

      .skills {
        font-size: 0.6em !important;
      }
    }

    @media (max-width: 480px) {

      // Ajustes para telas de celular
      .background-image {
        opacity: 0.5;
        width: 100%;
        background-position: center;
      }

      // A faixa lateral tem 100% de largura, mas é transparente.
      .left-strip {
        width: 100%;
        background-color: transparent;
      }

      .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        margin-left: 0;
      }

      // O logo é posicionado e redimensionado.
      .logo {
        height: 3.0rem;
        width: 3.0rem;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      }

      .name {
        font-size: 0.6em !important;
      }

      .title-part1 {
        font-size: 1.2em !important;
      }

      .title-part2 {
        font-size: 3em !important;
      }

      .skills {
        font-size: 0.5em !important;
      }
    }

    .name {
      font-family: Poppins, sans-serif;
      color: var(--roxo-claro, #ccc);
      font-weight: 600;
      font-size: 1.5em;
      margin: 0 0 0.5rem 0;
      background-color: transparent;
    }

    .title-part1 {
      font-family: "Ultra", sans-serif;
      font-size: 6em;
      font-weight: normal;
      margin: 0;
      line-height: 0.65;
      letter-spacing: 0.02em;
      color: var(--cor-branca);
      margin-bottom: 2%;
      background-color: transparent;
    }

    .title-part2 {
      font-family: "Ultra", sans-serif;
      font-size: 14.5em;
      font-weight: normal;
      margin: 0;
      line-height: 0.8;
      color: var(--roxo-mais-claro);
      letter-spacing: 0.02em;
      background-color: transparent;
    }

    .skills {
      font-family: Poppins, sans-serif;
      color: var(--cor-branca);
      margin-top: 0.75rem;
      font-style: italic;
      font-size: 1.35em;
      background-color: transparent;
    }
  }
}

@media (max-width: 768px) {
  .left-strip .logo {
    height: 3rem;
    width: 3rem;
    top: 1rem;
    left: 1rem; // sempre no canto esquerdo
    transform: none; // remove a centralização
  }
}

@media (max-width: 480px) {
  .left-strip .logo {
    height: 2rem;
    width: 2rem;
    top: 1rem;
    left: 0.2rem; // sempre no canto esquerdo
    transform: none; // remove a centralização
  }
}

@media (max-width: 320px) {
  .left-strip .logo {
    height: 1.5rem;
    width: 1.5rem;
    top: 1rem;
    left: 0.1rem; // sempre no canto esquerdo
    transform: none; // remove a centralização
  }
}
</style>
