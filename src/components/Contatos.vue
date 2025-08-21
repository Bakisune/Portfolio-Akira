<template>
  <div class="page-container" ref="contactSection">
    <div class="contact-title-container">
      <h1 class="contact-title">{{ translated.title }}</h1>
      <img src="../assets/Contatos.png" :alt="translated.altIcon" class="contact-title-icon"
        :class="{ 'animate-contact-entrance': isSectionVisible }" />
    </div>

    <div class="contact-wrapper">
      <p class="contact-subtitle" :style="{ opacity: textOpacity }">
        <span class="typewriter-text" v-html="typedText"></span>
        <span class="cursor" :class="{ 'blinking': isTyping || isTypingFinished }"></span>
      </p>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <input type="text" v-model="form.name" name="name" :placeholder="translated.form.namePlaceholder"
            class="form-input" required />
        </div>
        <div class="form-group">
          <input type="email" v-model="form.email" name="email" :placeholder="translated.form.emailPlaceholder"
            class="form-input" required />
        </div>
        <div class="form-group">
          <textarea v-model="form.message" name="message" :placeholder="translated.form.messagePlaceholder"
            class="form-textarea" required></textarea>
        </div>

        <div class="button-row">
          <a href="https://t.me/bakisune" target="_blank">
            <button type="button" class="btn-icon" @click="playSocialSound"
              :aria-label="translated.buttons.telegramAlt">
              <img src="../assets/Telegram.svg" :alt="translated.buttons.telegramAlt"
                class="button-image telegram-icon" />
            </button>
          </a>

          <button type="submit" class="btn-send" :disabled="isSending">
            {{ isSending ? translated.buttons.sendingText : translated.buttons.sendText }}
            <img src="../assets/Fill.svg" :alt="translated.buttons.sendIconAlt" class="button-image send-icon" />
          </button>

          <a href="https://vgen.co/Bakisune" target="_blank">
            <button type="button" class="btn-icon" @click="playSocialSound" :aria-label="translated.buttons.vgenAlt">
              <img src="../assets/VGen.svg" :alt="translated.buttons.vgenAlt" class="button-image vgen-icon" />
            </button>
          </a>
        </div>
        <span id="form-status" class="form-status" :class="statusClass">{{ statusMessage }}</span>
      </form>
    </div>
    <img src="../assets/TesteYumi.png" :alt="translated.altYumi" class="contact-side-image">
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { Howl } from 'howler';
import { translations } from '../translations';
import { activeLanguage } from '../languageStore';

const form = ref({
  name: '',
  email: '',
  message: ''
});
const statusMessage = ref('');
const isSending = ref(false);

const contactSection = ref(null);
const isSectionVisible = ref(false);
let observer;

const sendSuccessSound = ref(null);
const socialButtonSound = ref(null);

// Dados de tradução reativos
const translated = computed(() => {
  return translations.ContactosResumo[activeLanguage.value] || translations.ContactosResumo.pt;
});

// Estado reativo para o efeito de máquina de escrever
const typedText = ref('');
const isTyping = ref(false);
const isTypingFinished = ref(false);
const textOpacity = ref(1);
const runId = ref(0); // ID de controle para o ciclo de digitação atual

// O texto completo a ser digitado, agora dependente do idioma ativo
const fullText = computed(() => translated.value.description);

// Função que digita o texto, caractere por caractere
const typeText = async (currentRunId) => {
  isTyping.value = true;
  typedText.value = '';
  const lines = fullText.value.split('<br>');
  for (const line of lines) {
    if (currentRunId !== runId.value) return; // Aborta se o ID do ciclo não for mais o atual
    for (let i = 0; i < line.length; i++) {
      if (currentRunId !== runId.value) return;
      typedText.value += line.charAt(i);
      await new Promise(resolve => setTimeout(resolve, 50)); // Velocidade da digitação
    }
    if (lines.indexOf(line) < lines.length - 1) {
      typedText.value += '<br>';
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
  isTyping.value = false;
  isTypingFinished.value = true;
};

// Função que apaga o texto, caractere por caractere
const eraseText = async (currentRunId) => {
  isTyping.value = true;
  while (typedText.value.length > 0) {
    if (currentRunId !== runId.value) return; // Aborta se o ID do ciclo não for mais o atual
    // Apaga um caractere de cada vez, incluindo a tag <br>
    if (typedText.value.endsWith('<br>')) {
      typedText.value = typedText.value.slice(0, -4);
    } else {
      typedText.value = typedText.value.slice(0, -1);
    }
    await new Promise(resolve => setTimeout(resolve, 30)); // Velocidade da exclusão
  }
  isTyping.value = false;
};

// Função que controla o loop de digitação principal
const startTypingLoop = async () => {
  runId.value++; // Incrementa o ID para iniciar um novo ciclo
  const currentRunId = runId.value;

  while (currentRunId === runId.value) {
    await typeText(currentRunId);
    if (currentRunId !== runId.value) break; // Check again to be safe
    await new Promise(resolve => setTimeout(resolve, 3000));
    if (currentRunId !== runId.value) break;
    await eraseText(currentRunId);
    if (currentRunId !== runId.value) break;
    await new Promise(resolve => setTimeout(resolve, 500));
  }
};

onMounted(() => {
  startTypingLoop();

  if (contactSection.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        isSectionVisible.value = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(contactSection.value);
  }

  sendSuccessSound.value = new Howl({ src: ['/audios/enviado.mp3'], html5: true, preload: true });
  socialButtonSound.value = new Howl({ src: ['/audios/trade.mp3'], html5: true, preload: true });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  if (sendSuccessSound.value) sendSuccessSound.value.unload();
  if (socialButtonSound.value) socialButtonSound.value.unload();
});

// Watch for language changes and handle the transition
watch(fullText, async (newText, oldText) => {
  if (newText !== oldText) {
    // Incrementa o ID para forçar a parada da animação anterior
    runId.value++;

    // Reseta estados
    isTyping.value = false;
    isTypingFinished.value = false;
    typedText.value = '';

    // Fade out
    textOpacity.value = 0;

    // Wait for the fade-out to complete before resetting the text
    await new Promise(resolve => setTimeout(resolve, 500));

    // Reset text and start a new loop
    textOpacity.value = 1;
    startTypingLoop();
  }
});

const statusClass = computed(() => {
  if (statusMessage.value.includes(translated.value.form.success)) {
    return 'success';
  } else if (statusMessage.value.includes(translated.value.form.error)) {
    return 'error';
  }
  return '';
});

const playSocialSound = () => {
  if (socialButtonSound.value && socialButtonSound.value.state() === 'loaded') {
    socialButtonSound.value.play();
  }
};

const handleSubmit = async () => {
  isSending.value = true;
  statusMessage.value = translated.value.form.sendingText;

  const formspreeEndpoint = 'https://formspree.io/f/xldlvdje';
  const data = new FormData();
  data.append('name', form.value.name);
  data.append('email', form.value.email);
  data.append('message', form.value.message);

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      statusMessage.value = translated.value.form.success;
      if (sendSuccessSound.value && sendSuccessSound.value.state() === 'loaded') {
        sendSuccessSound.value.play();
      }
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    } else {
      const result = await response.json();
      if (result.errors) {
        statusMessage.value = translated.value.form.error;
      } else {
        statusMessage.value = translated.value.form.genericError;
      }
    }
  } catch (error) {
    statusMessage.value = translated.value.form.connectionError;
  } finally {
    isSending.value = false;
  }
};
</script>

<script>
export default {
  name: 'Contatos',
};
</script>

<style scoped>
:root {
  --branco: #ffffff;
}

/* Animations for typewriter and cursor */
.typewriter-text {
  overflow: hidden;
  /* Ensures text doesn't appear before animation */
  letter-spacing: 0.1rem;
  /* Spacing effect */
}

.cursor {
  font-weight: 500;
  border-right: 0.125rem solid var(--roxo-claro);
  margin-left: 0.125rem;
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
    border-color: var(--roxo-claro);
  }
}

.contact-subtitle {
  transition: opacity 0.5s ease-in-out;
}
</style>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 56.25rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  margin-bottom: -2rem;
}

.contact-title-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: -2.50rem;
}

.contact-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: italic;
  color: var(--roxo-claro);
  font-size: 4.25rem;
}

.contact-title-icon {
  width: 5rem;
  height: auto;
  opacity: 0;
}

@keyframes cardSpinEntrance {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
}

.animate-contact-entrance {
  animation: cardSpinEntrance 0.8s ease-out forwards;
}

.contact-wrapper {
  border: none;
  padding: 5rem;
  max-width: 37.5rem;
  width: 100%;
  border-radius: 0 0.5rem 0 0;
  background-color: var(--branco);
  margin-top: 1.5rem;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
}

.contact-side-image {
  position: absolute;
  top: 7rem;
  right: -13rem;
  width: 35rem;
  height: auto;
  z-index: 2;
}

.contact-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 0.1875rem;
  width: 68.75rem;
  margin-left: -31.25rem;
  background-color: var(--roxo-desligado);
  z-index: -1;
}

.contact-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0.1875rem;
  background-color: var(--roxo-desligado);
  height: 100%;
  z-index: -1;
}

.contact-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: var(--roxo-claro);
  font-weight: 600;
  margin-bottom: 1.5rem;
  margin-left: -8rem;
  width: calc(100% + 4rem);
  text-align: center;
  /* Alinhamento central */
  margin-top: -1rem;
  min-height: 4rem;
  /* Altura mínima para evitar quebra de layout */
}

.contact-form {
  display: flex;
  flex-direction: column;
  margin-left: -8rem;
  width: calc(100% + 4rem);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 0.125rem solid var(--roxo-claro);
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--roxo-claro);
  background-color: var(--branco);
  transition: border-color 0.3s ease-in-out;
}

.form-input::placeholder,
.form-textarea::placeholder {
  font-family: 'Poppins', sans-serif;
  font-size: medium;
  color: var(--roxo-claro);
  opacity: 0.8;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--amarelo);
}

.form-textarea {
  resize: none;
  height: 7.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: var(--roxo-claro);
  border-radius: 0.375rem;
  transition: 0.3s ease;
  width: 2.75rem;
  height: 2.75rem;
}

.btn-send {
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: var(--roxo-claro);
  border-radius: 0.375rem;
  transition: 0.3s ease;
  padding: 0.75rem 1.5rem;
  font-size: 0.83rem;
  font-weight: 900;
  gap: 0.5rem;
  color: var(--cor-branca);
  transition: background-color 0.3s ease;
}

.button-row {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

.button-image {
  width: 1.25rem;
  height: 1.25rem;
}

.telegram-icon {
  width: 1.75rem;
  height: 1.75rem;
}

.vgen-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.btn-icon:hover,
.btn-send:hover {
  background-color: var(--amarelo);
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-0.3125rem);
  }

  60% {
    transform: translateY(-0.125rem);
  }
}

.btn-send:hover .send-icon,
.btn-icon:hover .button-image {
  animation: bounce 1s;
}

.form-status {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--roxo-claro);
}

.form-status.success {
  font-family: 'Poppins', sans-serif;
  color: green;
  font-weight: bold;
}

.form-status.error {
  font-family: 'Poppins', sans-serif;
  color: red;
  font-weight: bold;
}
</style>
