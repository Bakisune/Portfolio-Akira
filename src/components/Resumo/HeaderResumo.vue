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
/* ====== BASE / DESKTOP ====== */
.header {
  position: relative;
  width: 100%;
  height: 105vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--cor-fundo);
}

/* faixa lateral e logo */
.header .left-strip {
  position: absolute;
  inset: 0 auto 0 0;
  width: 10%;
  background-color: var(--roxo-escuro);
  z-index: 2;
  display: flex;
  justify-content: center;
}

.header .logo {
  position: absolute;
  top: 2.5rem;
  height: 5rem;
  width: 5rem;
  background-image: url('/bakisunestickerlogo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 3;
}

/* imagem de fundo (desktop) */
.header .background-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 90%;
  height: 95%;
  background-repeat: no-repeat;
  background-position: right center;
  background-size: contain;
  opacity: 0.2;
  z-index: 0;
  pointer-events: none;
}

/* bloco de texto */
.header .content {
  position: relative;
  z-index: 3;
  margin-left: calc(10% + 1.875rem);
  color: var(--cor-branca);
  background: transparent;
  text-align: left;
  /* mantém alinhado à esquerda */
}

.header .content .name {
  font-family: Poppins, sans-serif;
  color: var(--roxo-claro, #ccc);
  font-weight: 600;
  font-size: 1.5em;
  margin: 0 0 0.5rem 0;
}

.header .content .title-part1 {
  font-family: "Ultra", sans-serif;
  font-size: 6em;
  font-weight: normal;
  margin: 0 0 2% 0;
  line-height: 0.65;
  letter-spacing: 0.02em;
  color: var(--cor-branca);
}

.header .content .title-part2 {
  font-family: "Ultra", sans-serif;
  font-size: 14.5em;
  font-weight: normal;
  margin: 0;
  line-height: 0.8;
  color: var(--roxo-mais-claro);
  letter-spacing: 0.02em;
}

.header .content .skills {
  font-family: Poppins, sans-serif;
  color: var(--cor-branca);
  margin-top: 0.75rem;
  font-style: italic;
  font-size: 1.35em;
}

/* ====== ≤ 1024px ====== */
@media (max-width: 1024px) {
  .header .content {
    margin-left: calc(10% + 1rem);
  }

  .header .content .name {
    font-size: 1em !important;
  }

  .header .content .title-part1 {
    font-size: 3em !important;
  }

  .header .content .title-part2 {
    font-size: 8em !important;
  }

  .header .content .skills {
    font-size: 0.8em !important;
  }
}

/* ====== ≤ 768px (tablet) ====== */
@media (max-width: 768px) {
  .header .background-image {
    opacity: 0.2;
    width: 100%;
    background-position: center;
  }

  /* deixa o bloco mais próximo do centro, mas ainda à esquerda */
  .header {
    justify-content: center;
  }

  .header .content {
    margin-left: 0;
    width: min(92vw, 640px);
  }

  .header .logo {
    height: 4rem;
    width: 4rem;
    top: 1rem;
    left: 1rem;
    transform: none;
  }

  .header .content .name {
    font-size: 0.9em !important;
  }

  .header .content .title-part1 {
    font-size: 2.4em !important;
  }

  .header .content .title-part2 {
    font-size: 6em !important;
  }

  .header .content .skills {
    font-size: 0.7em !important;
  }
}

/* ====== ≤ 480px (mobile) ====== */
/* objetivo: bloco CENTRALIZADO NA TELA, mas texto alinhado à ESQUERDA.
   imagem fixa ocupando toda a viewport, com o título por cima. */
@media (max-width: 480px) {

  /* centraliza o conteúdo na viewport */
  .header {
    display: grid;
    place-items: center;
  }

  .header .background-image {
    margin-top: 10%;
    position: absolute;
    /* fixa no viewport */
    inset: 0;
    /* top/right/bottom/left = 0 */
    width: 100vw;
    height: 100vh;
    /* evita “sumir” */
    background-position: top center;
    background-size: 80%;
    /* mantém a ilustração inteira */
    opacity: 0.2;
    z-index: 0;
    /* atrás do conteúdo */
  }

  .header .left-strip {
    width: 100%;
    background-color: transparent;
    z-index: 1;
  }

  .header .content {
    justify-self: center;
    /* centraliza o bloco */
    align-self: center;
    width: min(75vw);
    margin: 40% 0 0 0;
    /* remove offset lateral */
    text-align: left;
    /* mantém texto à esquerda */
    z-index: 3;
    /* acima da imagem */
  }

  .header .logo {
    height: 2.5rem;
    width: 2.5rem;
    top: 1rem;
    left: 0.5rem;
  }

  .header .content .name {
    font-size: 0.75em !important;
  }

  .header .content .title-part1 {
    font-size: 3em !important;
  }

  .header .content .title-part2 {
    font-size: 5em !important;
  }

  .header .content .skills {
    font-size: 0.6em !important;
  }
}

/* ====== ≤ 320px (mobile pequeno) ====== */
@media (max-width: 320px) {
  .header .logo {
    height: 1.5rem;
    width: 1.5rem;
    left: 0.25rem;
  }

  .header .content .title-part2 {
    font-size: 3.2em !important;
  }
}
</style>
