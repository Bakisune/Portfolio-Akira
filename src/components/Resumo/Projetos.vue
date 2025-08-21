<template class="fundo">
    <div class="projects-draw">
        <!-- Título para a seção de projetos de desenvolvimento -->
        <h2 class="title">{{ translated.devTitle }}</h2>

        <!-- Carrossel de Projetos de Desenvolvimento -->
        <div class="projects-dev">
            <!-- Botão de seta para a esquerda -->
            <i @click="prevProject" class="bt-seta bi bi-chevron-left left-arrow"></i>

            <!-- Container do projeto, com animação de transição -->
            <div class="projects-dev-demo" :class="slideClass" v-if="currentProject">
                <img :src="currentProject.image" :alt="currentProject.title" />
            </div>

            <div class="projects-dev-text" :class="slideClass" v-if="currentProject">
                <h1 class="projects-dev-title borda-texto-preto2">{{ currentProject.id }}</h1>
                <h2 class="projects-dev-subtitle" v-html="currentProject.title"></h2>
                <div class="dev-softwares">
                    <h4 v-for="software in currentProject.softwares" :key="software">{{ software }}</h4>
                </div>
                <p class="textblock" v-html="currentProject.description"></p>
                <!-- Novo container para alinhar o ícone à direita -->
                <div class="link-container">
                    <a target="_blank" :href="currentProject.link">
                        <!-- Ícone do GitHub adicionado aqui -->
                        <i class="bt-link bi bi-github"></i>
                    </a>
                </div>
            </div>

            <!-- Botão de seta para a direita -->
            <i @click="nextProject" class="bt-seta bi bi-chevron-right right-arrow"></i>
        </div>

        <!-- Título para a seção de ilustrações -->


        <!-- Galeria de Imagens com Layout Fixo -->
        <div class="projects-draw">
            <div class="grid-container2">
                <!-- As imagens estão hardcoded para corresponder ao grid-template-areas -->
                <div class="box box-img" style="grid-area: box-1" @click="openLightbox(0)">
                    <img :src="translated.gallery[0].url" class="gallery__img img-top pointer">
                </div>
                <div class="box box-img" style="grid-area: box-2" @click="openLightbox(1)">
                    <img :src="translated.gallery[1].url" class="gallery__img pointer">
                </div>
                <div class="box box-img" style="grid-area: box-3" @click="openLightbox(2)">
                    <img :src="translated.gallery[2].url" class="gallery__img pointer">
                </div>
                <div class="box box-img" style="grid-area: box-4" @click="openLightbox(3)">
                    <img :src="translated.gallery[3].url" class="gallery__img pointer">
                </div>
                <div class="box box-img" style="grid-area: box-5" @click="openLightbox(4)">
                    <img :src="translated.gallery[4].url" class="gallery__img pointer">
                </div>
                <div class="box box-img" style="grid-area: box-6" @click="openLightbox(5)">
                    <img :src="translated.gallery[5].url" class="gallery__img pointer">
                </div>
                <div class="box box-img" style="grid-area: box-7" @click="openLightbox(6)">
                    <img :src="translated.gallery[6].url" class="gallery__img pointer">
                </div>
                <div class="box box-img" style="grid-area: box-8" @click="openLightbox(7)">
                    <img :src="translated.gallery[7].url" class="gallery__img pointer">
                </div>
                <div class="box box-img" style="grid-area: box-9" @click="openLightbox(8)">
                    <img :src="translated.gallery[8].url" class="gallery__img img-bot pointer">
                </div>
                <!-- Box com o botão "SEE MORE" -->

                <div class="box box-img" style="grid-area: box-10" @click="openLightbox(9)">
                    <a target="_blank" class="bt-see-more" href="https://vgen.co/Bakisune">
                        <span class="bt-content">
                            <span class="bt-text">{{ translated.seeMoreText }}</span>
                            <!-- Substituído o caminho local pela URL do placeholder -->
                            <img src="../../assets/A.png" class="cu">
                        </span>
                    </a>
                    <img :src="translated.gallery[9].url" class="gallery__img img-top pointer">
                </div>

                <!-- Lightbox -->
                <div id="lightbox" class="lightbox" v-if="showLightbox" @click.self="closeLightbox">
                    <span class="close" @click="closeLightbox">&times;</span>
                    <span class="prev" @click="prevImage">&#10094;</span>
                    <img class="lightbox-img" :src="lightboxImage" />
                    <span class="next" @click="nextImage">&#10095;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { translations } from '../../translations';
import { activeLanguage } from '../../languageStore';

// Estado reativo para os projetos de desenvolvimento
const currentProjectIndex = ref(0);
const slideClass = ref('');
const isAnimating = ref(false);

// Estado reativo para a lightbox da galeria
const showLightbox = ref(false);
const lightboxImage = ref('');
const lightboxIndex = ref(0);

// Tradução dinâmica
const translated = computed(() => {
    return translations.Projetos[activeLanguage.value] || translations.Projetos.pt;
});

// Acesso ao projeto atual
const currentProject = computed(() => {
    return translated.value.projects[currentProjectIndex.value];
});

// Funções para a navegação do carrossel
const changeProject = (direction) => {
    if (isAnimating.value) return;

    isAnimating.value = true;
    const newSlideClass = direction === 'next' ? 'slide-out-right' : 'slide-out-left';
    slideClass.value = newSlideClass;

    setTimeout(() => {
        if (direction === 'next') {
            currentProjectIndex.value = (currentProjectIndex.value + 1) % translated.value.projects.length;
        } else {
            currentProjectIndex.value = (currentProjectIndex.value - 1 + translated.value.projects.length) % translated.value.projects.length;
        }
        slideClass.value = '';
        isAnimating.value = false;
    }, 400); // Duração da animação em milissegundos
};

const nextProject = () => changeProject('next');
const prevProject = () => changeProject('prev');

// Funções para a lightbox
const openLightbox = (index) => {
    lightboxIndex.value = index;
    lightboxImage.value = translated.value.gallery[index].url;
    showLightbox.value = true;
};

const closeLightbox = () => {
    showLightbox.value = false;
    lightboxImage.value = '';
};

const nextImage = () => {
    const nextIndex = (lightboxIndex.value + 1) % translated.value.gallery.length;
    lightboxIndex.value = nextIndex;
    lightboxImage.value = translated.value.gallery[nextIndex].url;
};

const prevImage = () => {
    const prevIndex = (lightboxIndex.value - 1 + translated.value.gallery.length) % translated.value.gallery.length;
    lightboxIndex.value = prevIndex;
    lightboxImage.value = translated.value.gallery[prevIndex].url;
};

// Monitora a mudança de idioma para reiniciar o carrossel
watch(() => activeLanguage.value, () => {
    currentProjectIndex.value = 0;
});
</script>

<style scoped>
.fundo {
    background-color: var(--cor-fundo);
}

.projects-draw {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 5%;
    background-color: var(--cor-fundo);
}

.title {
    font-family: 'Poppins', sans-serif;
    color: var(--roxo-claro);
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 1.25rem;
}

.projects-dev {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    padding-bottom: 10%;
    width: 100%;
    background-color: var(--cor-fundo);
}

.projects-dev-demo {
    border-radius: 0.625rem;
    transition: transform 0.3s ease-in-out;
}

.projects-dev-demo img {
    border-radius: 0.625rem;
    width: 37.5rem;
    height: 36.25rem;
    object-fit: cover;
}

.projects-dev-demo:hover {
    transform: scale(1.02);
}

.projects-dev-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 31.25rem;
}

.link-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.bt-link {
    font-size: 1.75rem;
    cursor: pointer;
    display: inline-block;
    background-color: var(--cor-branca);
    color: var(--roxo-escuro);
    padding: 0.5rem;
    margin-top: 1rem;
    border-radius: 0.625rem;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.bt-link:hover {
    color: var(--amarelo);
    animation: beat 0.7s infinite alternate;
}

@keyframes beat {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
        /* Diminui o efeito de pulso */
    }

    100% {
        transform: scale(1);
    }
}

.projects-dev-title {
    font-family: 'Poppins', sans-serif;
    color: var(--roxo-claro);
    font-size: 4.5rem;
    font-weight: 900;
    padding-bottom: 2rem;
}

.projects-dev-subtitle {
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: var(--cor-branca);
    font-size: 2.25rem;
    padding-bottom: 0.5rem;
}

.dev-softwares {
    display: flex;
    gap: 0.625rem;
    padding-bottom: 0.625rem;
}

.dev-softwares h4 {
    font-family: 'Poppins', sans-serif;
    color: var(--cor-branca);
    font-size: 0.875rem;
    font-weight: 300;
    padding: 0.625rem 1.25rem;
    width: auto;
    text-align: center;
    background: var(--roxo-claro);
    border-radius: 3.125rem;
    transition: transform 0.1s ease, font-weight 0.1s ease;
}

.dev-softwares h4:hover {
    transform: scale(1.05);
    font-weight: 400;
    background-color: var(--amarelo);
    cursor: default;
}

.projects-dev-demo,
.projects-dev-text {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.slide-out-left {
    opacity: 0;
    transform: translateX(-3.125rem);
}

.slide-out-right {
    opacity: 0;
    transform: translateX(3.125rem);
}

.bt-seta {
    font-size: 3rem;
    color: var(--roxo-claro);
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
}

.bt-seta:hover {
    animation: none;
    transform: scale(1.2);
    color: var(--amarelo);
}

.left-arrow {
    margin-right: -2rem;
}

.right-arrow {
    margin-left: -2rem;
    transform: scaleX(-1);
}

@keyframes wiggle-horizontal {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-0.3125rem);
    }

    100% {
        transform: translateX(0);
    }
}

.left-arrow {
    animation: wiggle-horizontal 1.5s ease-in-out infinite;
}

.right-arrow {
    animation: wiggle-horizontal 1.5s ease-in-out infinite;
}

.textblock {
    font-family: 'Poppins', sans-serif;
    color: var(--cor-branca);
}

@keyframes wiggle-vertical {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-0.3125rem);
    }

    100% {
        transform: translateY(0);
    }
}

.bt-seta:hover {
    animation: none;
    transform: scale(1.1);
}

@media (max-width: 48.0rem) {
    .projects-dev {
        flex-direction: column;
        gap: 2rem;
    }

    .bt-seta {
        display: none;
    }

    .projects-dev-demo img {
        width: 100%;
        height: auto;
    }

    .projects-dev-text {
        max-width: 100%;
    }
}

/* --- ESTILOS DA NOVA GALERIA --- */
.box {
    display: flex;
    border-radius: 0.625rem;
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
}

.box:hover {
    transform: scale(1.02);
}

.box-img {
    align-items: flex-end;
    justify-content: end;
}

.projects-draw {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5%;
}

.bt-see-more {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 0.625rem 0.625rem 0rem;
    position: absolute;
    width: 2.5rem;
    height: 7.5rem;
    border-radius: 0.3125rem;
    background: var(--cor-branca);
    text-decoration: none;
}

.bt-content {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    transform: rotate(-90deg);
    font-family: var(--fonte-principal);
    font-weight: 300;
    font-size: calc(2.5rem * 0.40);
    color: var(--roxo-escuro);
    white-space: nowrap;
}

.bt-content img {
    height: 1em;
    width: auto;
}

.bt-see-more:hover {
    background: var(--cor-branca);
}

.grid-container2 {
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(6, 12rem);
    grid-template-rows: repeat(3, 12rem);
    gap: 0.625rem;
    grid-template-areas:
        'box-1 box-4 box-4 box-5 box-8 box-9'
        'box-2 box-4 box-4 box-6 box-10 box-10'
        'box-3 box-4 box-4 box-7 box-10 box-10';
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.625rem;
}

.pointer {
    cursor: pointer;
}

.img-top {
    object-position: top;
}

.img-bot {
    object-position: bottom;
}

/* Lightbox */
.lightbox {
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
}

.lightbox-img {
    max-width: 90%;
    max-height: 90%;
}

.close,
.prev,
.next {
    position: absolute;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    user-select: none;
}

.close {
    top: 1.25rem;
    right: 2.5rem;
}

.prev,
.next {
    top: 50%;
    transform: translateY(-50%);
    padding: 0.625rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 3.75rem;
    text-align: center;
}

.prev {
    left: 1.875rem;
}

.next {
    right: 1.875rem;
}
</style>
