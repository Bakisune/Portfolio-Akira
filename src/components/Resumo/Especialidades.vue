<template>
    <section class="expertizes" ref="specialtiesSection">
        <div class="title-with-image">
            <h2 class="about-title" :class="{ 'animate-title-line': isSectionVisible }">{{ translated.title }}</h2>
            <img src="../../assets/especialidades.svg" :alt="translated.altStar" class="section-image"
                :class="{ 'animate-shining-image': isSectionVisible }" />
        </div>
        <p class="expertizes-description" :style="{ opacity: textOpacity }">
            <span class="typewriter-text">{{ typedText }}</span>
            <span class="cursor" :class="{ 'blinking': isTyping || isTypingFinished }"></span>
        </p>
        <div class="expertise-cards-container">
            <!-- Card para UX/UI Design -->
            <div class="expertise-card">
                <router-link to="/soon" class="expertise-card-link" @click.native="playSound"
                    :aria-label="translated.cards.card1.ariaLabel">
                    {{ translated.cards.card1.text }}
                </router-link>
            </div>
            <!-- Card para Illustration -->
            <div class="expertise-card">
                <router-link to="/soon" class="expertise-card-link" @click.native="playSound"
                    :aria-label="translated.cards.card2.ariaLabel">
                    {{ translated.cards.card2.text }}
                </router-link>
            </div>
            <!-- Card para Game Dev and Design -->
            <div class="expertise-card">
                <router-link to="/soon" class="expertise-card-link" @click.native="playSound"
                    :aria-label="translated.cards.card3.ariaLabel">
                    {{ translated.cards.card3.text }}
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { Howl } from 'howler';
import { translations } from '../../translations';
import { activeLanguage } from '../../languageStore';

const specialtiesSection = ref(null);
const isSectionVisible = ref(false);
let observer;

// Reactive state for the typewriter effect
const typedText = ref('');
const isTyping = ref(false);
const isTypingFinished = ref(false);
const textOpacity = ref(1); // New state to control opacity
let loopRunning = ref(false); // New state to control the typing loop

// Reactive translation data
const translated = computed(() => {
    return translations.ExpertizesResumo[activeLanguage.value] || translations.ExpertizesResumo.pt;
});

// The full text to be typed, now dependent on the active language
const fullText = computed(() => translated.value.description);

// Function to type text character by character
const typeText = async () => {
    isTyping.value = true;
    typedText.value = '';
    for (let i = 0; i < fullText.value.length; i++) {
        if (!loopRunning.value) return; // Exit if the loop is stopped
        typedText.value += fullText.value.charAt(i);
        await new Promise(resolve => setTimeout(resolve, 30)); // Typing speed
    }
    isTyping.value = false;
    isTypingFinished.value = true;
};

// Function to erase text character by character
const eraseText = async () => {
    isTyping.value = true;
    while (typedText.value.length > 0) {
        if (!loopRunning.value) return; // Exit if the loop is stopped
        typedText.value = typedText.value.slice(0, -1);
        await new Promise(resolve => setTimeout(resolve, 30)); // Erasing speed
    }
    isTyping.value = false;
};

// Function to control the typing loop
const startTypingLoop = async () => {
    loopRunning.value = true;
    while (loopRunning.value) {
        await typeText();
        if (!loopRunning.value) break; // Check again to be safe
        await new Promise(resolve => setTimeout(resolve, 3000)); // Pause to read the text
        if (!loopRunning.value) break;
        await eraseText();
        if (!loopRunning.value) break;
        await new Promise(resolve => setTimeout(resolve, 500)); // Pause before typing the next phrase
    }
};

const clickSound = new Howl({
    src: ['/audios/game.mp3'],
    html5: true
});

const playSound = () => {
    if (clickSound && clickSound.state() === 'loaded') {
        clickSound.play();
    } else {
        console.warn('O áudio de clique não pôde ser tocado. Pode não ter sido carregado.');
    }
};

// Watch for language changes and handle the transition
watch(fullText, async (newText, oldText) => {
    if (newText !== oldText) {
        // Stop the old loop
        loopRunning.value = false;
        isTyping.value = false;
        isTypingFinished.value = false;

        // Fade out
        textOpacity.value = 0;

        // Wait for the fade-out to complete before resetting the text
        await new Promise(resolve => setTimeout(resolve, 500));

        // Reset text and start a new loop
        typedText.value = '';
        textOpacity.value = 1;
        startTypingLoop();
    }
});

onMounted(() => {
    // Start the typing loop when the component is mounted
    startTypingLoop();

    // IntersectionObserver for line and star animations
    if (specialtiesSection.value) {
        observer = new IntersectionObserver(
            ([entry]) => {
                isSectionVisible.value = entry.isIntersecting;
            },
            { threshold: 0.1 }
        );
        observer.observe(specialtiesSection.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
    if (clickSound) {
        clickSound.unload();
    }
});
</script>

<style>
/* Estilos para a animação de typewriter */
.typewriter-text {
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 0.1rem;
}

.cursor {
    font-weight: 500;
    border-right: 2px solid var(--roxo-mais-claro);
    margin-left: 2px;
}

.blinking {
    animation: blink-caret .75s step-end infinite;
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: var(--roxo-mais-claro);
    }
}
</style>

<style scoped>
.expertizes {
    margin-top: 20px;
    padding: 40px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cor-fundo);
    color: var(--cor-branca);
}

.expertizes .about-title {
    color: var(--roxo-mais-claro);
}

.expertizes .about-title::after {
    background-color: var(--roxo-mais-claro);
}

.expertizes-description {
    font-family: poppins, sans-serif;
    font-style: bold;
    color: var(--cor-branca);
    text-align: center;
    max-width: 800px;
    margin: 0 auto 50px auto;
    font-size: 1.1em;
    line-height: 1.6;
    opacity: 0.8;
    transition: opacity 0.5s ease-in-out;
    /* Adicionado para a transição de opacidade */
}

.about-title {
    font-family: 'Poppins', sans-serif;
    color: var(--roxo-claro);
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 40px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;
    margin-left: 10%;
}

.expertise-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 35px;
    margin-top: 0px;
    max-width: 1200px;
    width: 80%;
}

.expertise-card {
    width: 350px;
    height: 250px;
    background-color: var(--roxo-escuro);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, background-color 0.3s ease;
    padding-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.expertise-card:hover {
    transform: scale(1.05);
    background-color: var(--roxo-claro);
}

.expertise-card-link {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: var(--cor-branca);
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    text-decoration: none;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    transition: color 0.3s ease;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 20px;
}

.expertise-card:hover .expertise-card-link {
    color: var(--amarelo);
}

.title-with-image {
    display: flex;
    align-items: center;
    width: 100%;
    align-self: flex-start;
    margin-bottom: 50px;
    padding-left: 10%;
    box-sizing: border-box;
}

.expertizes .about-title {
    margin-bottom: 0;
    margin-left: 0;
}

.expertizes .about-title::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 4px;
    background-color: var(--roxo-mais-claro);
    border-radius: 2px;
    transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.expertizes .about-title.animate-title-line::after {
    width: 108%;
}

.section-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    background: transparent;
    margin-left: 30px;
    margin-top: 3.2rem;
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
    animation: shiningEffect 1.90s ease-in-out infinite;
}

@media (max-width: 768px) {
    .title-with-image {
        flex-direction: column;
        align-items: center;
        padding-left: 0;
    }

    .expertizes .about-title {
        text-align: center;
    }

    .expertizes .about-title::after {
        left: 50%;
        transform: translateX(-50%);
    }

    .section-image {
        margin-left: 0;
        margin-top: 10px;
    }
}
</style>
