<template>
    <SideBarResumo id="SideBarResumo" />
    <HeaderResumo id="HeaderResumo" />
    <SobreResumo id="SobreResumo" />
    <Especialidades id="Especialidades" />
    <SkillsResumo id="Skills" />
    <Formacoes id="Formacoes" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBarResumo from '../components/Resumo/SideBarResumo.vue';
import HeaderResumo from '../components/Resumo/HeaderResumo.vue';
import SobreResumo from '../components/Resumo/SobreResumo.vue';
import SkillsResumo from '../components/Resumo/SkillsResumo.vue';
import Formacoes from '../components/Resumo/Formacoes.vue';
import Especialidades from '../components/Resumo/Especialidades.vue';

export default defineComponent({
    name: 'Home',
    components: {
        SideBarResumo,
        HeaderResumo,
        SobreResumo,
        SkillsResumo,
        Formacoes,
        Especialidades,
    }
});
</script>
