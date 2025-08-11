<template>
  <section class="new-section">
    <h2 class="about-title">ABOUT ME</h2>
    <div class="about-content-wrapper">
      <p class="about-text">
        Oi! Me chamo Akira Alcantara, também conhecido como Bakisune. Sou um entusiasta da tecnologia e da criatividade,
        e adoro mergulhar em projetos que unem esses dois mundos. Minha jornada me levou a explorar áreas como
        desenvolvimento de software, design, desenvolvimento de jogos, ilustração e animação. Meu objetivo é transformar
        ideias em realidade, criando experiências que não só funcionam bem, mas também são visualmente incríveis. Estou
        sempre aprendendo e pronto para criar algo novo e que cause um impacto positivo.
      </p>
      <div class="about-image-container">
        <div class="gray-box"></div>
        <div class="bakisune-info">バキスネ</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.new-section {
  position: relative;
  margin-top: -10vh;
  padding: 40px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/Papel.png");
  background-size: cover;
  background-position: calc(30% + 0px) center;
  background-repeat: no-repeat;
  z-index: 1;
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
  z-index: 2;
}

.about-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 80px;
  height: 4px;
  background-color: var(--roxo-claro);
  border-radius: 2px;
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
  font-size: 1.1em;
  text-align: justify;
  margin-right: 10%;
}

.about-image-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.gray-box {
  width: 400px;
  height: 350px;
  background-color: #e0e0e0;
  border: 4px solid var(--roxo-claro);
  border-radius: 10px;
  margin-bottom: 1%;
}

.bakisune-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--roxo-claro);
  font-weight: 600;
  font-size: 1.1em;
}

.bakisune-info::before {
  content: "";
  width: 12px;
  height: 12px;
  background-color: var(--roxo-claro);
  border-radius: 50%;
  display: inline-block;
}
</style>
