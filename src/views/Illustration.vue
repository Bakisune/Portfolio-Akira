<template>
    <HeaderGame id="HeaderResumo" />
    <SobreGame id="SobreResumo" />
    <SkillsDev id="SkillsResumo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderGame from '../components/Game/HeaderGame.vue';
import SobreGame from '../components/Game/SobreGame.vue';
import SkillsDev from '../components/Dev/SkillsDev.vue';

export default defineComponent({
    name: 'GameDevDesign',
    components: {
        HeaderGame,
        SobreGame,
        SkillsDev,
    }
});
</script>
