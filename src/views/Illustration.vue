<template>
    <HeaderIllustration />
    <SobreIllustration />
    <ProjetosArte />
    <Arts />
    <SocialMedias />
    <Characters />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderIllustration from '../components/Illustracao/HeaderIllustration.vue';
import SobreIllustration from '../components/Illustracao/SobreIllustration.vue';
import ProjetosArte from '../components/Illustracao/ProjetosArte.vue';
import Arts from '../components/Illustracao/Arts.vue';
import SocialMedias from '../components/Illustracao/SocialMedias.vue';
import Characters from '../components/Illustracao/Characters.vue';


export default defineComponent({
    name: 'Illustration',
    components: {
        HeaderIllustration
        , SobreIllustration
        , ProjetosArte
        , Arts
        , SocialMedias
        , Characters
    }
});
</script>
