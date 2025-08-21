<template>
    <div class="skills-section-wrapper">
        <section class="skills-section" ref="skillsSection">
            <div class="content-container">
                <div class="skills-title-container">
                    <h2 class="skills-title">{{ translatedContent.title }}</h2>
                    <div class="skills-line">
                        <img class="linha-skill" :src="linhaSkillUrl" :alt="translatedContent.lineAlt"
                            :class="{ 'animate-linha': isSectionVisible }" />
                        <img class="estrelas-skill" :src="estrelasSkillUrl" :alt="translatedContent.starsAlt"
                            :class="{ 'animate-estrelas': isSectionVisible }" />
                    </div>
                </div>

                <!-- The skills-last-row container has been removed and the cards have been moved to the main grid. -->
                <div class="skills-grid-container">
                    <div class="skill-card">
                        <a>
                            <img :src="htmlIconUrl" :alt="translatedContent.html.alt" class="skill-logo-1" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                class="skill-logo" />
                            <p class="skill-name">{{ translatedContent.html.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="cssIconUrl" :alt="translatedContent.css.alt" class="skill-logo-1" />
                            <img :src="cssLogoUrl" class="skill-logo-3" />
                            <p class="skill-name">{{ translatedContent.css.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="jsIconUrl" :alt="translatedContent.javascript.alt" class="skill-logo-1" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                class="skill-logo" />
                            <p class="skill-name">{{ translatedContent.javascript.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="tsIconUrl" :alt="translatedContent.typescript.alt" class="skill-logo-1" />
                            <img :src="tsLogoUrl" class="skill-logo-3" />
                            <p class="skill-name">{{ translatedContent.typescript.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="reactIconUrl" :alt="translatedContent.react.alt" class="skill-logo-1" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                class="skill-logo" />
                            <p class="skill-name">{{ translatedContent.react.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="vueIconUrl" :alt="translatedContent.vue.alt" class="skill-logo-1" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                class="skill-logo" />
                            <p class="skill-name">{{ translatedContent.vue.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="bootstrapIconUrl" :alt="translatedContent.bootstrap.alt" class="skill-logo-1" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                class="skill-logo-2" />
                            <p class="skill-name">{{ translatedContent.bootstrap.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card python-card">
                        <a>
                            <img :src="pythonIconUrl" :alt="translatedContent.python.alt" class="skill-logo-1" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                class="skill-logo-2" />
                            <p class="skill-name">{{ translatedContent.python.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="csharpIconUrl" :alt="translatedContent.csharp.alt" class="skill-logo-1" />
                            <img :src="csharpLogoUrl" class="skill-logo-3" />
                            <p class="skill-name">{{ translatedContent.csharp.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="mysqlIconUrl" :alt="translatedContent.mysql.alt" class="skill-logo-1" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                class="skill-logo" />
                            <p class="skill-name">{{ translatedContent.mysql.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="figmaIconUrl" :alt="translatedContent.figma.alt" class="skill-logo-1" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                                class="skill-logo" />
                            <p class="skill-name">{{ translatedContent.figma.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="gitIconUrl" :alt="translatedContent.git.alt" class="skill-logo-1" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                class="skill-logo" />
                            <p class="skill-name">{{ translatedContent.git.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="photoshopIconUrl" :alt="translatedContent.photoshop.alt" class="skill-logo-1" />
                            <img :src="psLogoUrl" class="skill-logo-3" />
                            <p class="skill-name">{{ translatedContent.photoshop.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="illustratorIconUrl" :alt="translatedContent.illustrator.alt"
                                class="skill-logo-1" />
                            <img :src="aiLogoUrl" class="skill-logo-3" />
                            <p class="skill-name">{{ translatedContent.illustrator.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="clipStudioIconUrl" :alt="translatedContent.clipStudio.alt"
                                class="skill-logo-1" />
                            <img :src="cspLogoWhiteUrl" :alt="translatedContent.clipStudio.alt" class="skill-logo-3" />
                            <p class="skill-name">{{ translatedContent.clipStudio.name }}</p>
                        </a>
                    </div>
                    <div class="skill-card">
                        <a>
                            <img :src="gameMakerIconUrl" :alt="translatedContent.gameMaker.alt" class="skill-logo-1" />
                            <img :src="gameMakerLogoUrl" :alt="translatedContent.gameMaker.alt" class="skill-logo-3" />
                            <p class="skill-name">{{ translatedContent.gameMaker.name }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { translations } from '../../translations';
import { activeLanguage } from '../../languageStore';
import linhaSkillUrl from '../../assets/LinhaSkills.svg';
import estrelasSkillUrl from '../../assets/estrelasSkills.svg';
import htmlIconUrl from '../../assets/HTML.svg';
import cssIconUrl from '../../assets/CSS.svg';
import cssLogoUrl from '../../assets/CSS_LOGO.png';
import jsIconUrl from '../../assets/JavaScript.svg';
import tsIconUrl from '../../assets/Typescript.svg';
import tsLogoUrl from '../../assets/ts_logo_color.png';
import reactIconUrl from '../../assets/React.svg';
import vueIconUrl from '../../assets/Vue-logo.svg';
import bootstrapIconUrl from '../../assets/Bootstrap.svg';
import pythonIconUrl from '../../assets/Python.svg';
import csharpIconUrl from '../../assets/CSharp.svg';
import csharpLogoUrl from '../../assets/CSHARP_LOGO.png';
import mysqlIconUrl from '../../assets/MySQL.svg';
import figmaIconUrl from '../../assets/FIGMA.svg';
import gitIconUrl from '../../assets/GIT.svg';
import photoshopIconUrl from '../../assets/Photoshop.svg';
import psLogoUrl from '../../assets/PS_LOGO.png';
import illustratorIconUrl from '../../assets/Illustrator.svg';
import aiLogoUrl from '../../assets/AI_LOGO.png';
import clipStudioIconUrl from '../../assets/CLIPSTUDIO.svg';
import cspLogoWhiteUrl from '../../assets/CSP_LOGO_WHITE.png';
import gameMakerIconUrl from '../../assets/GAMEMAKER.svg';
import gameMakerLogoUrl from '../../assets/game-maker_ICON.png';

const skillsSection = ref(null);
const isSectionVisible = ref(false); // Variável re-introduzida para o IntersectionObserver
let observer;

const translatedContent = computed(() => {
    return translations.SkillsResumo[activeLanguage.value] || translations.SkillsResumo.en;
});

onMounted(() => {
    if (skillsSection.value) {
        observer = new IntersectionObserver(
            ([entry]) => {
                isSectionVisible.value = entry.isIntersecting;
            },
            { threshold: 0.1 } // Valor ajustado para ser mais flexível em telas menores
        );
        observer.observe(skillsSection.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style scoped lang="scss">
.skills-section-wrapper {
    background-color: var(--cor-fundo);
    padding: 1.25rem 0;
    display: flex;
    justify-content: center;
}

.skills-section {
    background-color: var(--cor-branca);
    width: 100%;
    padding: 5rem 0 6.875rem 0;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: none;
}

.content-container {
    max-width: 87.5rem;
    width: 95%;
    margin: 0 auto;
}

.skills-title-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5rem;
}

.skills-title {
    font-family: 'Poppins', sans-serif;
    color: var(--roxo-claro);
    font-size: 3em;
    font-weight: 900;
    margin: 0;
}

.skills-line {
    position: relative;
    width: 40%;
    max-width: 56.25rem;
    height: 0.5rem;
    margin-top: 1%;
}

.linha-skill {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    top: 0;
    left: 0;
    transform: scaleX(0); // Garante que a linha comece invisível antes da animação
    transform-origin: center center;
    z-index: 1;
}

.estrelas-skill {
    position: absolute;
    width: 15.625rem;
    height: auto;
    object-fit: contain;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0; // Garante que as estrelas comecem invisíveis antes da animação
    z-index: 2;
}

@keyframes scaleXAnimation {
    from {
        transform: scaleX(0);
    }

    to {
        transform: scaleX(1);
    }
}

.animate-linha {
    animation: scaleXAnimation 1s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        transform: translate(-50%, 0%);
        opacity: 0;
    }

    to {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}

.animate-estrelas {
    animation: fadeInUp 1.5s ease-in-out forwards;
}


.skills-grid-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    width: 100%;
    margin-top: 2.5rem;
    justify-content: center;
}

/* The skills-last-row container has been removed, so this style rule is no longer needed */
.skills-last-row {
    display: none;
}

.skill-card {
    background-color: var(--cor-branca);
    border-radius: 0.75rem;
    padding: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
    cursor: default;
    transition: background-color 0.3s ease, transform 0.3s ease, border 0.3s ease;
    border: 0.125rem solid var(--roxo-desligado);
    flex-basis: 7rem;
    max-width: 7rem;
    aspect-ratio: 1 / 1;
}

.skill-card:hover {
    background-color: var(--cor-fundo);
    transform: scale(1.1);
    border: 0.125rem solid transparent;
}

.skill-card a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: relative;
}

.skill-logo-1,
.skill-logo,
.skill-logo-2,
.skill-logo-3 {
    margin-top: -1rem;
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 3.5rem;
    height: 3.5rem;
    object-fit: contain;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

img.skill-logo {
    opacity: 0;
}

img.skill-logo-3 {
    opacity: 0;
}

img.skill-logo-2 {
    opacity: 0;
}

.skill-card:hover img.skill-logo-1 {
    opacity: 0;
}

.skill-card:hover img.skill-logo,
.skill-card:hover img.skill-logo-2,
.skill-card:hover img.skill-logo-3 {
    opacity: 1;
    transform: translateX(-50%) scale(1.2);
}

.skill-name {
    position: relative;
    z-index: 10;
    margin-top: 4.5rem;
    font-weight: 900;
    font-size: 0.75em;
    color: var(--roxo-escuro);
    text-align: center;
    transition: color 0.3s ease;
    text-decoration: none;
    font-style: italic;
    font-family: 'Poppins', sans-serif;
}

.skill-card:hover .skill-name {
    color: var(--cor-branca);
}

/* Estilos para telas médias e grandes */
@media (min-width: 48.1rem) and (max-width: 64.0rem) {
    .skills-grid-container {
        gap: 1.2rem;
    }

    .skill-card {
        flex-basis: calc(25% - 1.2rem);
        max-width: none;
        padding: 0.9375rem;
    }

    .skill-logo-1,
    .skill-logo,
    .skill-logo-2,
    .skill-logo-3 {
        width: 3.5rem;
        height: 3.5rem;
        top: 0.625rem;
    }

    .skill-name {
        margin-top: 4.5rem;
        font-size: 0.75em;
    }
}

/* Estilos para tablets (layout 4x4) */
@media (max-width: 48.0rem) {
    .skills-grid-container {
        justify-content: center;
        gap: 1.2rem;
    }

    .skill-card {
        flex-basis: calc(25% - 1.2rem);
        /* 4 colunas */
        max-width: none;
        padding: 0.5rem;
        margin: 0;
    }

    .skill-logo-1,
    .skill-logo,
    .skill-logo-2,
    .skill-logo-3 {
        width: 4rem;
        height: 4rem;
        top: 0.4rem;
    }

    .skill-name {
        margin-top: 4rem;
        font-size: 0.8em;
    }
}

/* Estilos para celulares (incluindo o tamanho de 425px) */
@media (max-width: 30.0rem) {
    .skills-grid-container {
        justify-content: center;
        gap: 0.5rem;
    }

    .skill-card {
        flex-basis: calc(50% - 0.5rem);
        max-width: none;
        padding: 0.5rem;
        margin: 0.25rem;
    }

    .skill-logo-1,
    .skill-logo,
    .skill-logo-2,
    .skill-logo-3 {
        width: 4rem;
        height: 4rem;
        top: 0.5rem;
    }

    .skill-name {
        margin-top: rem;
        font-size: 0.8em;
    }

    .skills-title {
        font-size: 2.2em;
    }

    .skills-line {
        width: 20rem;
        height: 0.6rem;
    }
}

/* Estilos para computadores (layout 2 colunas) */
@media (min-width: 64.1rem) {
    .skills-grid-container {
        justify-content: center;
        gap: 1.5rem;
    }

    .skill-card {
        flex-basis: calc(25% - 1.5rem);
        /* Mantém 4 colunas em desktops */
        max-width: 10rem;
        padding: 1rem;
        max-height: 10rem;
    }

    .skill-logo-1,
    .skill-logo,
    .skill-logo-2,
    .skill-logo-3 {
        width: 4rem;
        height: 4rem;
        top: 0.75rem;
    }

    .skill-name {
        margin-top: 5rem;
        font-size: 0.8em;
    }
}
</style>
