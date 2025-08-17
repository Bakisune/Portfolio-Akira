<template>
  <footer>
    <div class="footer-esquerda">
      <img src="/bakisunestickerlogo.svg" alt="Logo Bakisune" style="height: 35px" />
    </div>
    <p>&copy; 2025 Akira Alcantara</p>
    <div class="footer-direita">
      <a href="https://www.linkedin.com/in/akiraalcantara-bakisune" class="social-icon" alt="Link para o Linkedin"
        target="_blank"><i class="bi bi-linkedin"></i></a>
      <a href="https://www.behance.net/bakisune" class="social-icon" alt="Link para o Behance" target="_blank"><i
          class="bi bi-behance"></i></a>
      <a href="https://github.com/Bakisune" class="social-icon" alt="Link para o Github" target="_blank"><i
          class="bi bi-github"></i></a>
      <a href="https://bsky.app/profile/bakisune.bsky.social" class="social-icon" alt="Link para o Bluesky"
        target="_blank"><i class="fa-brands fa-bluesky"></i></a>
      <a href="https://x.com/baki_sune" class="social-icon" alt="Link para o Twitter" target="_blank"><i
          class="bi bi-twitter"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Rodape',
};
</script>

<style scoped lang="scss">
footer {
  font-family: 'Poppins', sans-serif;
  margin-top: auto;
  height: 50px;
  background: var(--cor-branca);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-top: 3px solid var(--roxo-desligado);
}

.footer-direita {
  display: flex;
  gap: 12px;
}

.social-icon {
  color: var(--roxo-escuro);
  text-decoration: none;
  font-size: 20px;
}

.social-icon:hover {
  color: var(--amarelo);
}
</style>