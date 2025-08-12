<template>
  <div class="page-container">
    <h1 class="contact-title">Contact Me</h1>

    <div class="contact-wrapper">
      <p class="contact-subtitle">Feel free to reach out! Let's build <br> something great together.</p>
      <form class="contact-form">
        <div class="form-group">
          <input type="text" placeholder="Name" class="form-input" />
        </div>
        <div class="form-group">
          <input type="email" placeholder="E-mail" class="form-input" />
        </div>
        <div class="form-group">
          <textarea placeholder="How can I help you?" class="form-textarea"></textarea>
        </div>

        <div class="button-row">
          <button type="button" class="btn-icon">
            <img src="../assets/Telegram.svg" alt="Botão pro Telegram" class="button-image" />
          </button>

          <button type="submit" class="btn-send">
            Send
            <img src="../assets/Fill.svg" alt="Botão pro Vgen" class="button-image" />
          </button>

          <button type="button" class="btn-icon">
            <img src="../assets/VGen.svg" alt="Botão pro Vgen" class="button-image" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}

.contact-wrapper {
  border-right: 3px solid var(--roxo-desligado);
  border-top: 3px solid var(--roxo-desligado);
  border-bottom: none;
  border-left: none;
  padding: 5rem;
  max-width: 600px;
  width: 100%;
  border-radius: 0 8px 0 0;
  background-color: var(--branco);
  margin-top: 1.5rem;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.contact-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: italic;
  color: var(--roxo-claro);
  font-size: 2.5rem;
  margin-bottom: -2rem;
}

.contact-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: medium;
  color: var(--roxo-claro);
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--roxo-desligado);
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--roxo-claro);
  background-color: var(--branco);
}

.form-input::placeholder,
.form-textarea::placeholder {
  font-family: 'Poppins', sans-serif;
  font-size: medium;
  color: var(--roxo-claro);
  opacity: 0.8;
}

.form-textarea {
  resize: none;
  height: 120px;
}

.form-group {
  margin-bottom: 1rem;
}

.button-row {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
}

.btn-icon,
.btn-send {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: var(--branco);
  background-color: var(--roxo-claro);
  border-radius: 6px;
  transition: 0.3s ease;
}

.btn-icon {
  width: 44px;
  height: 44px;
}

.btn-icon i {
  font-size: 20px;
}

.btn-send {
  padding: 0.75rem 1.5rem;
  font-size: medium;
  font-weight: 500;
  gap: 0.5rem;
  color: var(--cor-branca);
}


.button-image {
  width: 20px;
  height: 20px;
}

.btn-icon:hover,
.btn-send:hover {
  background-color: var(--amarelo);
}
</style>
