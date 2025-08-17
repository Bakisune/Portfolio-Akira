<template>
    <HeaderGame id="HeaderResumo" />
    <SobreGame id="SobreResumo" />
    <ProjetosGame id="ProjetosResumo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderGame from '../components/Game/HeaderGame.vue';
import SobreGame from '../components/Game/SobreGame.vue';
import ProjetosGame from '../components/Game/ProjetosGame.vue';

export default defineComponent({
    name: 'GameDevDesign',
    components: {
        HeaderGame,
        SobreGame,
        ProjetosGame,
    }
});
</script>
