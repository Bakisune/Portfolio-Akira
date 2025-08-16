<template>
  <div class="page-container">
    <div class="contact-title-container">
      <h1 class="contact-title">Contact Me</h1>
      <img src="../assets/Contatos.png" alt="Contact icon" class="contact-title-icon" />
    </div>

    <div class="contact-wrapper">
      <p class="contact-subtitle">
        Feel free to reach out! Let's build <br> something great together.
      </p>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <input type="text" v-model="form.name" name="name" placeholder="Name" class="form-input" required />
        </div>
        <div class="form-group">
          <input type="email" v-model="form.email" name="email" placeholder="E-mail" class="form-input" required />
        </div>
        <div class="form-group">
          <textarea v-model="form.message" name="message" placeholder="How can I help you?" class="form-textarea"
            required></textarea>
        </div>

        <div class="button-row">

          <a href="https://t.me/bakisune"><button type="button" class="btn-icon">
              <img src="../assets/Telegram.svg" alt="Telegram button" class="button-image telegram-icon" />
            </button></a>

          <button type="submit" class="btn-send" :disabled="isSending">
            {{ isSending ? 'Sending...' : 'Send' }}
            <img src="../assets/Fill.svg" alt="Airplane icon" class="button-image send-icon" />
          </button>

          <a href="https://vgen.co/Bakisune">
            <button type="button" class="btn-icon">
              <img src="../assets/VGen.svg" alt="Vgen button" class="button-image vgen-icon" />
            </button>
          </a>
        </div>
        <span id="form-status" class="form-status" :class="statusClass">{{ statusMessage }}</span>
      </form>
    </div>
    <img src="../assets/TesteYumi.png" alt="Yumi Mail Carrier Chibi drawing. She's a half-orange, half-burgundy fox. Her fur on her belly,
neck, and lower face is beige. In this drawing, she's carrying a side bag with letters inside, and two letters
have fallen out of the bag and are flying toward the ground. Yumi has a silly face and is sticking out her tongue." class="contact-side-image">
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});
const statusMessage = ref('');
const isSending = ref(false);

const statusClass = computed(() => {
  if (statusMessage.value.includes('successfully')) {
    return 'success';
  } else if (statusMessage.value.includes('Error')) {
    return 'error';
  }
  return '';
});

const handleSubmit = async () => {
  isSending.value = true;
  statusMessage.value = 'Sending...';

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
      statusMessage.value = 'Message sent successfully!';
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    } else {
      const result = await response.json();
      if (result.errors) {
        statusMessage.value = 'Error sending. Check the fields.';
      } else {
        statusMessage.value = 'Error sending message. Please try again.';
      }
    }
  } catch (error) {
    statusMessage.value = 'A connection error occurred. Please try again.';
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

<style>
:root {
  --branco: #ffffff;
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
  margin-top: -1rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: var(--roxo-claro);
  border-radius: 0.375rem;
  transition: 0.3s ease;
  padding: 0.75rem 1.5rem;
  font-size: medium;
  font-weight: 500;
  gap: 0.5rem;
  color: var(--branco);
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
    transform: translateY(-5px);
  }

  60% {
    transform: translateY(-2px);
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
  color: var(--roxo-desligado);
}

.form-status.success {
  color: green;
  font-weight: bold;
}

.form-status.error {
  color: red;
  font-weight: bold;
}
</style>
