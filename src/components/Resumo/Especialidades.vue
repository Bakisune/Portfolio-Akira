<template>
    <section class="expertizes">
        <h2 class="about-title">Specialities</h2>
        <p class="expertizes-description">
            Here you can learn more about my core competencies. Click each card
            for more details!
        </p>
        <div class="expertise-cards-container">
            <!-- Card para UX/UI Design -->
            <div class="expertise-card">
                <router-link to="/soon" class="expertise-card-link">
                    Programming and UX/UI Design
                </router-link>
            </div>
            <!-- Card para Illustration -->
            <div class="expertise-card">
                <router-link to="/soon" class="expertise-card-link">
                    Illustration and Animation
                </router-link>
            </div>
            <!-- Card para Game Dev and Design -->
            <div class="expertise-card">
                <router-link to="/soon" class="expertise-card-link">
                    Game Dev and Design
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
.expertizes {
    margin-top: 20px;
    padding: 40px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cor-fundo);
    color: var(--cor-branca);
}

.expertizes .about-title {
    color: var(--roxo-mais-claro);
}

.expertizes .about-title::after {
    background-color: var(--roxo-mais-claro);
}

.expertizes-description {
    font-family: poppins, sans-serif;
    font-style: bold;
    color: var(--cor-branca);
    text-align: center;
    max-width: 800px;
    margin: 0 auto 50px auto;
    font-size: 1.1em;
    line-height: 1.6;
    opacity: 0.8;
}

.about-title {
    font-family: 'Poppins', sans-serif;
    color: var(--roxo-claro);
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 40px;
    position: relative;
    padding-bottom: 10px;
    align-self: flex-start;
    margin-left: 10%;
}

.expertise-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 35px;
    margin-top: 0px;
    max-width: 1200px;
    width: 80%;
}

.expertise-card {
    width: 350px;
    height: 250px;
    background-color: var(--roxo-escuro);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, background-color 0.3s ease;
    padding-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.expertise-card:hover {
    transform: scale(1.05);
    background-color: var(--roxo-claro);
}

.expertise-card-link {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: var(--cor-branca);
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    text-decoration: none;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    transition: color 0.3s ease;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 20px;
}

.expertise-card:hover .expertise-card-link {
    color: var(--amarelo);
}
</style>

<script>
export default {
    name: 'Especialidades',
};
</script>
