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
    <div class="left-strip"></div>
    <div class="background-image" :style="{ backgroundImage: 'url(' + BackgroundImage + ')' }"
      :alt="translatedContent.altBackground"></div>

    <div class="logo" :alt="translatedContent.altLogo">
    </div>

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
    z-index: 1;
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
    z-index: 0;
  }

  .logo {
    position: absolute;
    top: 40px;
    left: 30px;
    z-index: 2;
    height: 80px;
    width: 80px;
    background-image: url('/bakisunestickerlogo.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .content {
    position: absolute;
    top: 24.5%;
    z-index: 2;
    margin-left: calc(10% + 30px);
    color: var(--cor-branca);
    background: transparent;

    .name {
      font-family: Poppins, sans-serif;
      color: var(--roxo-claro, #ccc);
      font-weight: 600;
      font-size: 1.5em;
      margin: 0 0 8px 0;
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
      margin-top: 12px;
      font-style: italic;
      font-size: 1.35em;
      background-color: transparent;
    }
  }
}
</style>
