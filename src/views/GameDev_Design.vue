<template>
    <HeaderGame id="HeaderResumo" />
    <SobreGame id="SobreResumo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderGame from '../components/Game/HeaderGame.vue';
import SobreGame from '../components/Game/SobreGame.vue';

export default defineComponent({
    name: 'GameDevDesign',
    components: {
        HeaderGame,
        SobreGame,
    }
});
</script>
