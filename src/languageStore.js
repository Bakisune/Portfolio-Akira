import { ref } from 'vue';

// O estado global para o idioma ativo.
export const activeLanguage = ref('en');

// Função para alterar o idioma global.
export function setGlobalLanguage(lang) {
  activeLanguage.value = lang;
}
