<template>
    <section class="new-section" ref="aboutSection">
        <div class="about-content-wrapper-full">
            <div class="title-with-image">
                <h2 class="about-title" :class="{ 'animate-title-line': isSectionVisible }">ABOUT ME</h2>
                <img :src="starIconUrl" alt="Star Icon" class="section-image"
                    :class="{ 'animate-shining-image': isSectionVisible }" />
            </div>
            <div class="about-content-wrapper">
                <p class="about-text">
                    Hi! My name is Akira Alcantara, also known as Bakisune. I'm a technology and creativity enthusiast,
                    and I love
                    diving into projects that bring these two worlds together. My journey has led me to explore areas
                    such as
                    software development, design, game development, illustration, and animation. My goal is to turn
                    ideas into
                    reality, creating experiences that not only work well but also look stunning. I'm always learning
                    and ready to
                    create something new that makes a positive impact.
                </p>
                <div class="about-image-container"
                    alt="The background of the about me section is a torn paper with a drawing of me inside a light purple square">
                    <div class="image-box"
                        alt="Drawing of Me: I'm a person with dark brown hair and dark brown eyes. I'm wearing round gold glasses and a brown turtleneck sweater and gloves. I have a small smile and my right hand is waving at the screen.">
                    </div>
                    <div class="bakisune-info" alt="Purple text, written Bakisune in Japanese">
                        <i class="bi bi-moon-stars-fill"></i> バキスネ
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Importa os assets
import starIconUrl from '../../assets/starsobre.svg';
import papelBackgroundUrl from '../../assets/Papel.png';
import myDrawingUrl from '../../assets/Teste.png';

const aboutSection = ref(null);
const isSectionVisible = ref(false);
let observer;

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

<script>
export default {
    name: 'SobreResumo',
};
</script>

<style scoped lang="scss">
@font-face {
    font-family: 'Mokomori Kuro';
    /* O caminho da fonte também foi corrigido */
    src: url('../../assets/font/mikiyu-mokomori-kuro.ttf') format('truetype');
}

.new-section {
    position: relative;
    margin-top: -10vh;
    padding: 40px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 160px;
    background-color: transparent;
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
    /* A URL de background foi corrigida */
    background-image: url("../../assets/Papel.png");
    background-size: cover;
    background-position: calc(30% + 0px) center;
    background-repeat: no-repeat;
    z-index: 1;
}

.title-with-image {
    display: flex;
    align-items: center;
    position: relative;
    width: 80%;
    max-width: 1200px;
    align-self: flex-start;
    margin-left: 10%;
    margin-bottom: 20px;
    z-index: 2;
}

.about-title {
    font-family: 'Poppins', sans-serif;
    color: var(--roxo-claro);
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 0;
    position: relative;
    padding-bottom: 10px;
    z-index: 2;
}

.about-title::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 4px;
    background-color: var(--roxo-claro);
    border-radius: 2px;
    transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.about-title.animate-title-line::after {
    width: 150px;
}

.section-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    background: transparent;
    margin-left: -90px;
    margin-bottom: -80px;
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
    gap: 60px;
    max-width: 1200px;
    width: 80%;
    align-items: flex-start;
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
}

.about-text {
    font-family: 'Poppins', sans-serif;
    flex: 2;
    color: var(--cor-fundo);
    line-height: 1.8;
    font-size: 1.2em;
    text-align: justify;
    margin-right: 8%;
    margin-top: 60px;
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
    width: 400px;
    height: 450px;
    /* A URL de background foi corrigida */
    background-image: url("../../assets/Teste.png");
    background-size: cover;
    background-position: center;
    border: 4px solid var(--roxo-claro);
    border-radius: 10px;
    margin-bottom: 1%;
    position: relative;
}

.bakisune-info {
    font-family: 'Mokomori Kuro', sans-serif;
    position: absolute;
    bottom: -20px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--roxo-claro);
    font-weight: 600;
    font-size: 1.1em;

}

.bakisune-info::before {
    content: none;
}

@media (max-width: 768px) {
    .title-with-image {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
    }

    .section-image {
        margin-left: 0;
        margin-top: 20px;
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

    .about-text {
        margin-right: 0;
        text-align: center;
    }

    .image-box {
        width: 100%;
        height: auto;
        aspect-ratio: 4/4.5;
    }
}
</style>
