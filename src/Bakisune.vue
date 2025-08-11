<script lang="ts">
import Especialidades from './components/Especialidades.vue';
import Formações from './components/Formações.vue';
import HeaderResumo from './components/HeaderResumo.vue';
import Rodape from './components/Rodape.vue';
import Skills from './components/Skills.vue';
import SobreResumo from './components/SobreResumo.vue';
import SideBarResumo from './components/SideBarResumo.vue';


export default {
  name: 'App',
  components: {
    HeaderResumo, Rodape, SobreResumo, Especialidades, Skills, Formações, SideBarResumo
  }
};
</script>

<template>
  <SideBarResumo />
  <HeaderResumo />
  <SobreResumo />
  <Especialidades />
  <Skills />
  <Rodape />

</template>
