<script lang="ts">
import Especialidades from './components/Especialidades.vue';
import Formações from './components/Formações.vue';
import HeaderResumo from './components/HeaderResumo.vue';
import Rodape from './components/Rodape.vue';
import Skills from './components/Skills.vue';
import SobreResumo from './components/SobreResumo.vue';
import SideBarResumo from './components/SideBarResumo.vue';
import Contatos from './components/Contatos.vue';


export default {
  name: 'App',
  components: {
    HeaderResumo, Rodape, SobreResumo, Especialidades, Skills, Formações, SideBarResumo, Contatos
  }
};
</script>

<template>
  <SideBarResumo />
  <HeaderResumo id="HeaderResumo" />
  <SobreResumo id="SobreResumo" />
  <Especialidades id="Especialidades" />
  <Skills id="Skills" />
  <Formações id="Formacoes" />
  <Contatos id="Contatos" />
  <Rodape />

</template>

