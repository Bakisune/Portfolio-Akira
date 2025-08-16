<script lang="ts">
import { defineComponent } from 'vue';
import Contatos from './components/Contatos.vue';
import Rodape from './components/Rodape.vue';

export default defineComponent({
  name: 'App',
  components: {
    Contatos,
    Rodape
  }
});
</script>

<template>

  <router-view></router-view>
  <Contatos id="Contatos" />
  <Rodape />
</template>
