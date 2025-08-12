<template>
  <header class="header" :class="{ 'closed': !isSidebarOpen }">
    <nav class="nav">
      <!-- Ícone de lista que sempre fica visível para abrir/fechar a barra -->
      <div class="toggle-button" @click="toggleSidebar">
        <i class="bi bi-list"></i>
      </div>
      <!-- Itens da lista que são exibidos ou ocultados -->
      <ul class="nav-list" :class="{ 'hidden': !isSidebarOpen }">
        <li class="nav-group">
          <ul class="nav-list-grouped">
            <li><a href="#" @click.prevent="scrollToSection('HeaderResumo')"><i class="bi bi-house-fill"></i></a></li>
            <li><a href="#" @click.prevent="scrollToSection('SobreResumo')"><i class="bi bi-person-fill"></i></a></li>
            <li><a href="#" @click.prevent="scrollToSection('Especialidades')"><i class="bi bi-award-fill"></i></a></li>
            <li><a href="#" @click.prevent="scrollToSection('Skills')"><i class="bi bi-stars"></i></a></li>
            <li>
              <a href="#" @click.prevent="scrollToSection('Formacoes')"><i class="bi bi-book"></i>
                <!-- <i class="bi bi-book-fill"></i> -->
              </a>
            </li>
            <li><a href="#" @click.prevent="scrollToSection('Contatos')"><i class="bi bi-send-fill"></i></a></li>
          </ul>
        </li>
        <li><a href="#"><i class="bi bi-translate"></i></a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      // Estado para controlar se a barra lateral está aberta ou fechada
      isSidebarOpen: true,
    };
  },
  methods: {
    // Método para alternar o estado da barra lateral
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    // Método para rolar suavemente até a seção com o ID especificado
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped > 
/* Estilos para o contêiner principal da barra lateral */
.header {
  /* Posiciona a barra lateral de forma fixa na tela */
  position: fixed;
  /* Garante que ela apareça no topo das outras camadas */
  z-index: 1000; 
  /* Centraliza verticalmente a barra lateral */
  top: 50%;
  /* Afasta a barra da borda esquerda */
  left: 50px;
  transform: translateY(-50%);
  /* Largura fixa para manter a forma */
  width: 40px;
  /* Altura da barra quando está aberta */
  height: 340px;
  /* Adiciona um padding e bordas arredondadas */
  padding: 40px 2px;
  border-radius: 25px;
  /* Define a cor de fundo */
  background-color: var(--roxo-mais-claro);
  /* Adiciona a transição suave para as propriedades de tamanho e forma */
  transition: height 0.4s ease, border-radius 0.4s ease, padding 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Estilos quando a barra lateral está fechada */
.header.closed {
  /* Encolhe na vertical para virar um círculo */
  height: 40px; 
  padding: 0;
  border-radius: 50%; /* Vira uma bola */
  /* Remove o transform que deslocava o componente inteiro */
  transform: translateY(-50%);
}

/* Estilos para a navegação interna */
.nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.toggle-button {
  cursor: pointer;
  padding: 8px; /* Ajustado para caber no círculo fechado */
  font-size: 1.5em; 
  color: var(--roxo-desligado);
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Move o ícone ligeiramente para baixo quando o menu está fechado para centralizar */
.header.closed .toggle-button {
  margin-top: 2px;
}

.toggle-button:hover {
  color: var(--roxo-claro);
}

/* Esconde a lista quando a barra está fechada com transição de opacidade */
.nav-list.hidden {
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  padding: 0;
  /* Transição de opacidade mais lenta */
  transition: opacity 2s ease, visibility 2s ease;
}

/* Estilos para a lista de navegação principal */
.nav-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  opacity: 1;
  /* Transição de opacidade mais lenta e consistente */
  transition: opacity 2s ease, visibility 2s ease;
}

/* Estilos para o grupo de ícones do centro */
.nav-list-grouped {
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Estilos para os links (os ícones) */
.nav-list a {
  color: var(--roxo-desligado);
  text-decoration: none;
  font-size: 1.5em; /* Tamanho dos ícones foi ajustado */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}

/* Efeito hover nos ícones (apenas muda a cor) */
.nav-list a:hover {
  color: var(--roxo-claro); 
}

/* Estilos para o corpo da página, garantindo o espaçamento da barra lateral */
html, body {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}
</style>
