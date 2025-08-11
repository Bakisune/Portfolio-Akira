<template>
  <!-- ARRUMAR -->
  <!-- Seção de Educação (Linha do Tempo) inserida aqui -->
  <section class="education-section">
    <h2 class="education-title">Educação</h2>
    <div class="timeline-wrapper">
      <!-- Item da Linha do Tempo: Design e Web Design -->
      <div class="timeline-item">
        <p class="course-title">Design and Web Design</p>
        <p class="institution-info">Zion • 2018-2020</p>
      </div>
      <!-- Item da Linha do Tempo: Bacharelado em Engenharia de Software -->
      <div class="timeline-item">
        <p class="course-title">Bacharelado em Engenharia de Software</p>
        <p class="institution-info">Uninter • 2022-atual</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- Estilos da Seção de Educação (adicionados) --- */
.education-section {
  padding: 40px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cor-fundo);
  color: var(--cor-branca);
  max-width: 800px;
  width: 90%;
  margin: 80px auto 40px;
  padding-top: 0;
}

/* Estilo do título "Educação" */
.education-section .education-title {
  color: var(--roxo-mais-claro);
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 10px;
  align-self: center;
  text-align: center;
}

.education-section .education-title::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 80px;
  height: 4px;
  background-color: var(--roxo-mais-claro);
  border-radius: 2px;
}

/* Container da linha do tempo */
.education-section .timeline-wrapper {
  position: relative;
  width: 100%;
  padding-left: 20px;
  /* Espaço para a linha vertical */
}

/* Linha vertical da linha do tempo */
.education-section .timeline-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: var(--roxo-escuro);
  z-index: 0;
}

/* Item individual da linha do tempo */
.education-section .timeline-item {
  position: relative;
  padding: 20px;
  margin-bottom: 30px;
  background-color: var(--roxo-escuro);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efeito de hover no item */
.education-section .timeline-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Ponto de marcação da linha do tempo */
.education-section .timeline-item::after {
  content: '';
  position: absolute;
  top: 25px;
  left: -32px;
  /* Posição do ponto na linha vertical */
  width: 12px;
  height: 12px;
  background-color: var(--roxo-claro);
  border: 2px solid var(--cor-fundo);
  border-radius: 50%;
  z-index: 1;
}

/* Título do curso */
.education-section .course-title {
  color: var(--roxo-mais-claro);
  font-weight: 600;
  font-size: 1.2em;
  margin: 0;
}

/* Instituição e ano */
.education-section .institution-info {
  color: var(--cor-branca);
  font-size: 0.9em;
  font-weight: 400;
  margin-top: 5px;
}
</style>