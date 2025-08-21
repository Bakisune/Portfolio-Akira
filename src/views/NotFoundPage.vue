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
.not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    padding: 1.25rem;
    box-sizing: border-box;
    background-color: var(--cor-fundo);
    color: var(--cor-branca);
    font-family: 'Poppins', sans-serif;
}

.content-box {
    background-color: var(--roxo-escuro);
    padding: 2.5rem;
    border-radius: 1.25rem;
    box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.3);
    max-width: 37.5rem;
    width: 100%;
}

.title {
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 600;
    color: var(--roxo-claro);
    margin: 0;
    text-shadow: 0.125rem 0.125rem 0.3125rem rgba(0, 0, 0, 0.5);
}

.subtitle {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--roxo-mais-claro);
    margin: 0 0 0.625rem;
}

.description {
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    color: var(--cor-branca);
    margin-bottom: 1.875rem;
}

.home-button {
    display: inline-block;
    background-color: var(--amarelo);
    color: var(--roxo-escuro);
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 0.625rem;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 0.25rem 0.9375rem rgba(255, 186, 96, 0.4);
}

.home-button:hover {
    background-color: var(--roxo-claro);
    color: var(--cor-branca);
    transform: translateY(-0.1875rem);
    box-shadow: 0 0.375rem 1.25rem rgba(158, 20, 250, 0.4);
}

/* --- REGRAS PARA TELAS MAIORES (garante proporção em telas de alta resolução) --- */
@media (min-width: 1920px) {
    .content-box {
        padding: 5rem;
        max-width: 50rem;
    }

    .title {
        font-size: 10rem;
    }

    .subtitle {
        font-size: 2.5rem;
    }

    .description {
        font-size: 1.5rem;
    }

    .home-button {
        font-size: 1.25rem;
        padding: 1rem 2rem;
    }
}
</style>
