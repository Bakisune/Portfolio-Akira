<template>
  <footer>
    <div class="footer-esquerda">
      <img src="#" alt="Logo Bakisune" style="height: 40px" />
    </div>
    <p>&copy; 2025 Akira Alcantara</p>
    <div class="footer-direita">
      <a href="https://www.linkedin.com/in/akiraalcantara-bakisune" class="social-icon" alt="Link para o Linkedin"><i
          class="bi bi-linkedin"></i></a>
      <a href="https://www.behance.net/bakisune" class="social-icon"><i class="bi bi-behance"
          alt="Link para o Behance"></i></a>
      <a href="https://github.com/Bakisune" class="social-icon"><i class="bi bi-github"
          alt="Link para o Github"></i></a>
      <a href="https://bsky.app/profile/bakisune.bsky.social" class="social-icon" alt="Link para o Bluesky"><i
          class="fa-brands fa-bluesky"></i></a>
      <a href="https://x.com/baki_sune" class="social-icon"><i class="bi bi-twitter" alt="Link para o Twitter"></i></a>
    </div>
  </footer>
</template>

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