<template>
    <section class="expertizes" ref="specialtiesSection">
        <div class="title-with-image">
            <h2 class="about-title" :class="{ 'animate-title-line': isSectionVisible }">{{ translated.title }}</h2>
            <img src="../../assets/especialidades.svg" :alt="translated.altStar" class="section-image"
                :class="{ 'animate-shining-image': isSectionVisible }" />
        </div>
        <p class="expertizes-description" :style="{ opacity: textOpacity }">
            <!-- A mágica acontece nesta linha! O white-space é aplicado apenas durante a digitação. -->
            <span class="typewriter-text" :style="{ 'white-space': isTyping ? 'nowrap' : 'normal' }"
                v-html="typedText"></span>
            <span class="cursor" :class="{ 'blinking': isTyping || isTypingFinished }"></span>
        </p>
        <div class="expertise-cards-container">
            <!-- Card para UX/UI Design -->
            <div class="expertise-card">
                <router-link to="/dev-ux-uidesign" class="expertise-card-link" @click.native="playSound"
                    :aria-label="translated.cards.card1.ariaLabel">
                    {{ translated.cards.card1.text }}
                </router-link>
            </div>
            <!-- Card para Illustration -->
            <div class="expertise-card">
                <router-link to="/illustration" class="expertise-card-link" @click.native="playSound"
                    :aria-label="translated.cards.card2.ariaLabel">
                    {{ translated.cards.card2.text }}
                </router-link>
            </div>
            <!-- Card para Game Dev and Design -->
            <div class="expertise-card">
                <router-link to="/gamedev-design" class="expertise-card-link" @click.native="playSound"
                    :aria-label="translated.cards.card3.ariaLabel">
                    {{ translated.cards.card3.text }}
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { Howl, Howler } from 'howler';
import { translations } from '../../translations';
import { activeLanguage } from '../../languageStore';

const specialtiesSection = ref(null);
const isSectionVisible = ref(false);
let observer;

// Estado reativo para o efeito de máquina de escrever
const typedText = ref('');
const isTyping = ref(false);
const isTypingFinished = ref(false);
const textOpacity = ref(1);
const runId = ref(0);

// Estado para o áudio
const isSoundLoaded = ref(false);

// Dados de tradução reativos
const translated = computed(() => {
    return translations.ExpertizesResumo[activeLanguage.value] || translations.ExpertizesResumo.pt;
});

// O texto completo a ser digitado, agora dependente do idioma ativo
const fullText = computed(() => translated.value.description);

// Configuração e carregamento do áudio com Howler.js
const clickSound = new Howl({
    src: ['/audios/game.mp3'],
    onload: () => {
        isSoundLoaded.value = true;
        console.log('Áudio carregado com sucesso!');
    },
    onloaderror: (id, error) => {
        console.error('Falha ao carregar o áudio:', error);
    }
});

const playSound = async () => {
    // Tenta reiniciar o contexto de áudio se ele estiver suspenso.
    // Isso é necessário para contornar as políticas de reprodução automática do navegador.
    if (Howler.ctx.state === 'suspended') {
        console.log('Contexto de áudio suspenso, tentando reiniciar...');
        try {
            await Howler.ctx.resume();
            console.log('Contexto de áudio reiniciado com sucesso!');
        } catch (e) {
            console.error('Falha ao reiniciar o contexto de áudio:', e);
            return;
        }
    }

    // Toca o som apenas se ele estiver carregado e o contexto estiver ativo
    if (isSoundLoaded.value) {
        clickSound.play();
    } else {
        console.warn('O áudio de clique não pôde ser tocado porque ainda não foi carregado.');
    }
};

// Função para digitar o texto, agora compatível com tags HTML como <br>
const typeText = async (currentRunId) => {
    isTyping.value = true;
    typedText.value = '';
    let i = 0;
    while (i < fullText.value.length) {
        if (currentRunId !== runId.value) return;
        let char = fullText.value.charAt(i);
        if (char === '<') {
            const endTagIndex = fullText.value.indexOf('>', i);
            if (endTagIndex !== -1) {
                const tag = fullText.value.substring(i, endTagIndex + 1);
                typedText.value += tag;
                i = endTagIndex + 1;
            } else {
                typedText.value += char;
                i++;
            }
        } else {
            typedText.value += char;
            i++;
            await new Promise(resolve => setTimeout(resolve, 30));
        }
    }
    isTyping.value = false;
    isTypingFinished.value = true;
};

// Função para apagar o texto caractere por caractere
const eraseText = async (currentRunId) => {
    isTyping.value = true;
    while (typedText.value.length > 0) {
        if (currentRunId !== runId.value) return;
        if (typedText.value.endsWith('>')) {
            const startTagIndex = typedText.value.lastIndexOf('<');
            if (startTagIndex !== -1) {
                typedText.value = typedText.value.substring(0, startTagIndex);
            } else {
                typedText.value = typedText.value.slice(0, -1);
            }
        } else {
            typedText.value = typedText.value.slice(0, -1);
        }
        await new Promise(resolve => setTimeout(resolve, 30));
    }
    isTyping.value = false;
};

// Função para controlar o loop de digitação
const startTypingLoop = async () => {
    runId.value++;
    const currentRunId = runId.value;

    while (currentRunId === runId.value) {
        await typeText(currentRunId);
        if (currentRunId !== runId.value) break;
        await new Promise(resolve => setTimeout(resolve, 3000));
        if (currentRunId !== runId.value) break;
        await eraseText(currentRunId);
        if (currentRunId !== runId.value) break;
        await new Promise(resolve => setTimeout(resolve, 500));
    }
};

// Observar mudanças de idioma e lidar com a transição
watch(fullText, async (newText, oldText) => {
    if (newText !== oldText) {
        runId.value++;
        isTyping.value = false;
        isTypingFinished.value = false;
        typedText.value = '';
        textOpacity.value = 0;
        await new Promise(resolve => setTimeout(resolve, 500));
        textOpacity.value = 1;
        startTypingLoop();
    }
});

onMounted(() => {
    startTypingLoop();
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
