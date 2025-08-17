<template>
  <div class="main-container">
    <Loading v-if="showInitialLoading" :is-animating-out="isInitialAnimatingOut" />

    <div v-if="showPageTransition" :class="[
      'page-transition-overlay',
      isSlidingOut ? (isHomeTransition ? 'slide-left-animation' : 'slide-out-animation') : ''
    ]">
      <video ref="transitionVideo" :class="{ 'transition-video': true, 'video-mirrored': isHomeTransition }"
        preload="auto" autoplay muted playsinline @ended="onVideoEnd">
        <source src="/videos/Violet.webm" type="video/webm">
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>

    <div class="content-container">
      <router-view></router-view>
      <Contatos id="Contatos" />
      <Rodape />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import Contatos from './components/Contatos.vue';
import Rodape from './components/Rodape.vue';
import Loading from './components/Loading.vue';

export default defineComponent({
  name: 'App',
  components: {
    Contatos,
    Rodape,
    Loading,
  },
  setup() {
    const route = useRoute();
    const showInitialLoading = ref(true);
    const isInitialAnimatingOut = ref(false);
    const showPageTransition = ref(false);
    const isSlidingOut = ref(false);
    const isHomeTransition = ref(false);
    const transitionVideo = ref<HTMLVideoElement | null>(null);
    const canTransition = ref(false);

    onMounted(() => {
      setTimeout(() => {
        isInitialAnimatingOut.value = true;
      }, 1500);
      setTimeout(() => {
        showInitialLoading.value = false;
        canTransition.value = true;
      }, 2500);
    });

    const onVideoEnd = () => {
      isSlidingOut.value = true;
      setTimeout(() => {
        showPageTransition.value = false;
      }, 500);
    };

    watch(() => route.path, (newPath, oldPath) => {
      if (!canTransition.value) {
        return;
      }

      isHomeTransition.value = (newPath === '/');
      showPageTransition.value = true;
      isSlidingOut.value = false;

      nextTick(() => {
        const videoElement = transitionVideo.value;
        if (videoElement) {
          const playPromise = videoElement.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              onVideoEnd();
            });
          }
        }
      });
    });

    return {
      showInitialLoading,
      isInitialAnimatingOut,
      showPageTransition,
      isSlidingOut,
      isHomeTransition,
      transitionVideo,
      onVideoEnd,
    };
  },
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.main-container,
.content-container {
  width: 100%;
  height: auto;
}

.page-transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.slide-out-animation {
  animation: slideOut 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}

@keyframes slideOut {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}

.slide-left-animation {
  animation: slideLeft 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}

@keyframes slideLeft {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

.transition-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-mirrored {
  transform: scaleX(-1);
}
</style>
