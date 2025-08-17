<template>
    <div class="not-found-container">
        <div class="content-box">
            <h1 class="title">404</h1>
            <p class="subtitle">
                Oops! Page not found.
            </p>
            <p class="description">
                It seems like the page you're looking for doesn't exist.
                <br>
                You can return to the homepage by clicking the button below.
            </p>
            <a href="/" class="home-button">
                Back to Homepage
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage',
}
</script>

<style scoped>
:root {
    --roxo-escuro: #332b45;
    --roxo-claro: #9e14fa;
    --roxo-mais-claro: #d3b9ee;
    --amarelo: #ffba60;
    --cor-fundo: #342c3c;
    --cor-branca: #ffffff;
    --roxo-desligado: #574a68;
    --container: #69209b;
}

.not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: var(--cor-fundo);
    color: var(--cor-branca);
    font-family: 'Poppins', sans-serif;
}

.content-box {
    background-color: var(--roxo-escuro);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    width: 100%;
}

.title {
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 600;
    color: var(--roxo-claro);
    margin: 0;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.subtitle {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--roxo-mais-claro);
    margin: 0 0 10px;
}

.description {
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    color: var(--cor-branca);
    margin-bottom: 30px;
}

.home-button {
    display: inline-block;
    background-color: var(--amarelo);
    color: var(--roxo-escuro);
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 10px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 15px rgba(255, 186, 96, 0.4);
}

.home-button:hover {
    background-color: var(--roxo-claro);
    color: var(--cor-branca);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(158, 20, 250, 0.4);
}
</style>
