<template>
    <HeaderGame id="HeaderResumo" />
    <SobreGame id="SobreResumo" />
    <SkillsDev id="SkillsResumo" />
    <ProfessionalExperience id="ExperienciaResumo" />
    <ProjetosDev id="ProjetosResumo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderGame from '../components/Game/HeaderGame.vue';
import SobreGame from '../components/Game/SobreGame.vue';
import ProfessionalExperience from '../components/Dev/ProfessionalExperience.vue';
import SkillsDev from '../components/Dev/SkillsDev.vue';
import ProjetosDev from '../components/Dev/ProjetosDev.vue';

export default defineComponent({
    name: 'GameDevDesign',
    components: {
        HeaderGame,
        SobreGame,
        ProfessionalExperience,
        SkillsDev,
        ProjetosDev
    }
});
</script>
