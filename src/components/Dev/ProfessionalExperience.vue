<script>

export default {
    name: 'ProfessionalExperience'
}
</script>

<template>
    <div class="coming-soon-container">
        <div class="content-box">
            <h1 class="title">Coming Soon</h1>
            <p class="subtitle">
                We're working on something amazing.
                <br>
                Check back soon!
            </p>
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <p class="subtitle-two">
                Learn more about us on our
                <a href="#" class="link">main website</a>.
            </p>
        </div>
    </div>
</template>

<style scoped>
.coming-soon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
}

.content-box {
    background-color: var(--roxo-escuro);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    width: 100%;
}

.title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 600;
    color: var(--roxo-claro);
    margin-bottom: 10px;
}

.subtitle {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--roxo-mais-claro);
    margin-bottom: 30px;
}

.subtitle-two {
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    color: var(--cor-branca);
}

.progress-bar {
    width: 80%;
    height: 10px;
    background-color: var(--roxo-desligado);
    border-radius: 5px;
    overflow: hidden;
    margin: 0 auto 30px;
}

.progress {
    width: 75%;
    height: 100%;
    background-image: linear-gradient(to right, var(--amarelo), var(--roxo-claro));
    animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
    0% {
        transform: scaleX(0.95);
        opacity: 0.8;
    }

    50% {
        transform: scaleX(1);
        opacity: 1;
    }

    100% {
        transform: scaleX(0.95);
        opacity: 0.8;
    }
}

.link {
    color: var(--amarelo);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.link:hover {
    color: var(--roxo-mais-claro);
}
</style>
