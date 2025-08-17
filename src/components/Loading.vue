<template>
    <div class="loading-container" :class="{ 'fade-out-up': isAnimatingOut }">
        <div class="loading-box">
            <img src="https://placehold.co/100x100/9e14fa/ffffff?text=GIF" alt="GIF de carregamento"
                class="loading-gif" />

            <div class="loading-bar">
                <div class="progress-indicator"></div>
            </div>

            <transition name="fade" mode="out-in">
                <h1 v-if="!isLoaded" key="loading-text" class="title">
                    <span class="letter">L</span>
                    <span class="letter">o</span>
                    <span class="letter">a</span>
                    <span class="letter">d</span>
                    <span class="letter">i</span>
                    <span class="letter">n</span>
                    <span class="letter">g</span>
                    <span class="letter">.</span>
                    <span class="letter">.</span>
                    <span class="letter">.</span>
                </h1>
                <h1 v-else key="welcome-text" class="title welcome-text">
                    <span>Welcome!</span>
                </h1>
            </transition>
        </div>

        <img src="https://placehold.co/100x100/9e14fa/ffffff?text=LOGO" alt="Logo de carregamento"
            class="loading-image" />
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        isAnimatingOut: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isLoaded: false,
        };
    },
    watch: {
        isAnimatingOut(newValue) {
            if (newValue) {
                setTimeout(() => {
                    this.$emit('animation-end');
                }, 1000);
            }
        },
    },
    mounted() {
        setTimeout(() => {
            this.isLoaded = true;
        }, 2500);
    },
};
</script>

<style scoped>
:root {
    --roxo-claro: #9e14fa;
    --cor-branca: #ffffff;
    --roxo-desligado: #574a68;
    --cor-fundo-loading: #f0f0f0;
}

.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--cor-branca);
    font-family: 'Poppins', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    transition: transform 1s ease-in-out;
    transform: translateY(0);
}

.loading-container.fade-out-up {
    transform: translateY(-100%);
}

.loading-box {
    text-align: center;
    padding: 3rem 4rem;
    background-color: var(--cor-branca);
    border-radius: 30px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    width: 90%;
    max-width: 600px;
    position: relative;
}

.loading-image {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background-color: var(--cor-branca);
    padding: 10px;
}

.loading-container.fade-out-up .loading-image {
    animation: image-fade-out 0.3s forwards 0.7s;
}

@keyframes image-fade-out {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.loading-gif {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background-color: var(--cor-branca);
    padding: 10px;
}

.title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--roxo-claro);
    margin-top: 1.5rem;
    margin-bottom: 0;
}

.welcome-text {
    animation: fade-in 0.5s ease-in-out forwards;
}

.letter {
    display: inline-block;
    animation: jump-in 2.5s infinite forwards;
    opacity: 0;
    transform: translateY(20px);
}

.letter:nth-child(1) {
    animation-delay: 0.1s;
}

.letter:nth-child(2) {
    animation-delay: 0.2s;
}

.letter:nth-child(3) {
    animation-delay: 0.3s;
}

.letter:nth-child(4) {
    animation-delay: 0.4s;
}

.letter:nth-child(5) {
    animation-delay: 0.5s;
}

.letter:nth-child(6) {
    animation-delay: 0.6s;
}

.letter:nth-child(7) {
    animation-delay: 0.7s;
}

.letter:nth-child(8) {
    animation-delay: 0.8s;
}

.letter:nth-child(9) {
    animation-delay: 0.9s;
}

.letter:nth-child(10) {
    animation-delay: 1.0s;
}

@keyframes jump-in {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    50% {
        opacity: 1;
        transform: translateY(-5px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.loading-bar {
    width: 100%;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 0;
}

.progress-indicator {
    height: 100%;
    background-color: var(--roxo-claro);
    width: 100%;
    animation: loading-animation 2s linear infinite;
}

@keyframes loading-animation {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
