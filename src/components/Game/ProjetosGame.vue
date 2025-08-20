<script>

export default {
    name: 'ProjetosGame'
}

// const projetos = [
//     {
//         id: "01",
//         titulo: {
//             en: 'Sales Forecasting<br>Algorithm “ITAMIND”',
//             pt: 'Algoritmo de Previsão de Vendas “ITAMIND”',
//             es: 'Algoritmo de Pronóstico de Ventas<br>“ITAMIND”',
//             fr: 'Algorithme de Prévision des Ventes<br>“ITAMIND”'
//         },
//         descricao: {
//             en: 'This project solves the problem of wasted frozen products, such as chicken wings, in supermarkets. It uses an algorithm that predicts sales demand. The goal is to help determine the quantity and timing of thawing, ensuring they are sold within two days and thus avoiding losses due to excess stock or expiration dates.',
//             pt: 'Este projeto resolve o problema do desperdício de produtos congelados, como asinhas de frango, em supermercados. Ele utiliza um algoritmo que prevê a demanda de vendas. O objetivo é ajudar a determinar a quantidade e o momento do descongelamento, garantindo que sejam vendidos em até dois dias e evitando perdas por excesso de estoque ou vencimento.',
//             es: 'Este proyecto resuelve el problema del desperdicio de productos congelados, como las alitas de pollo, en los supermercados. Utiliza un algoritmo que predice la demanda de ventas. El objetivo es ayudar a determinar la cantidad y el momento de la descongelación, asegurando que se vendan en dos días y evitando pérdidas por exceso de inventario o fechas de vencimiento.',
//             fr: 'Ce projet résout le problème du gaspillage de produits surgelés, comme les ailes de poulet, dans les supermarchés. Il utilise un algorithme qui prédit la demande de ventes. L’objectif est d’aider à déterminer la quantité et le moment de la décongélation, afin qu’ils soient vendus en deux jours et éviter les pertes dues à un excès de stock ou aux dates d’expiration.'
//         },
//         link: 'https://github.com/eliascmendes/ItaMind',
//         imagem: './assets/images/projects/dev/itamind.png',
//         softwares: ['CSS', 'HTML 5']
//     },
//     {
//         id: "02",
//         titulo: {
//             en: 'The Secret<br>Number Game',
//             pt: 'O Jogo do<br>Número Secreto',
//             es: 'El Juego del<br>Número Secreto',
//             fr: 'Le Jeu du<br>Nombre Secret'
//         },
//         descricao: {
//             en: 'The "Secret Number" project is a guessing game developed with HTML, CSS, and JavaScript. The logic generates a random number between 1 and 100, and the player must discover what it is. With each attempt, the system provides hints to guide the user. This project is ideal for practicing concepts of DOM manipulation, flow control, and functions in JavaScript.',
//             pt: 'O projeto "Número Secreto" é um jogo de adivinhação desenvolvido com HTML, CSS e JavaScript. A lógica gera um número aleatório entre 1 e 100, e o jogador deve descobrir qual é. A cada tentativa, o sistema fornece dicas para orientar o usuário. Este projeto é ideal para praticar conceitos de manipulação do DOM, controle de fluxo e funções em JavaScript.',
//             es: 'El proyecto "Número Secreto" es un juego de adivinanzas desarrollado con HTML, CSS y JavaScript. La lógica genera un número aleatorio entre 1 y 100, y el jugador debe descubrir cuál es. Con cada intento, el sistema da pistas para guiar al usuario. Este proyecto es ideal para practicar conceptos de manipulación del DOM, control de flujo y funciones en JavaScript.',
//             fr: 'Le projet "Nombre Secret" est un jeu de devinette développé avec HTML, CSS et JavaScript. La logique génère un nombre aléatoire entre 1 et 100, et le joueur doit le découvrir. À chaque tentative, le système fournit des indices pour guider l’utilisateur. Ce projet est idéal pour pratiquer la manipulation du DOM, le contrôle du flux et les fonctions en JavaScript.'
//         },
//         link: 'https://github.com/EryckTorres/numero-secreto',
//         imagem: './assets/images/projects/dev/numero_secreto.png',
//         softwares: ['JavaScript', 'HTML 5', 'CSS']
//     }
// ];

// let indiceAtual = 0;

// const projetosContainer = document.querySelector(".projects-dev");
// const imgDemoContainer = projetosContainer.querySelector(".projects-dev-demo");
// const imgDemo = imgDemoContainer.querySelector("img"); // agora pegamos a imagem diretamente
// const titulo = projetosContainer.querySelector(".projects-dev-title");
// const subtitulo = projetosContainer.querySelector(".projects-dev-subtitle");
// const descricao = projetosContainer.querySelector(".textblock");
// const link = projetosContainer.querySelector(".bt-link");
// const textContainer = projetosContainer.querySelector(".projects-dev-text");
// const softwaresContainer = projetosContainer.querySelector(".dev-softwares");

// function atualizarProjeto(direcao, lang = "en") {
//     const slideOutClass = direcao === "left" ? "slide-out-left" : "slide-out-right";

//     imgDemoContainer.classList.add(slideOutClass);
//     textContainer.classList.add(slideOutClass);

//     setTimeout(() => {
//         const projeto = projetos[indiceAtual];

//         titulo.innerHTML = projeto.id;
//         subtitulo.innerHTML = projeto.titulo[lang];
//         softwaresContainer.innerHTML = projeto.softwares
//             .map(soft => <h4>${soft}</h4>)
//             .join('');
//         descricao.innerHTML = projeto.descricao[lang]; // usei innerHTML pq pode ter <br> ou <strong>
//         link.parentElement.href = projeto.link;
//         imgDemo.src = projeto.imagem;

//         imgDemoContainer.classList.remove(slideOutClass);
//         textContainer.classList.remove(slideOutClass);
//     }, 400);
// }

// document.querySelectorAll(".bt-seta")[0].addEventListener("click", () => {
//     indiceAtual = (indiceAtual - 1 + projetos.length) % projetos.length;
//     const mainFlag = document.querySelector(".main-flag");
//     const lang = langByAlt[mainFlag?.alt] || "en";
//     atualizarProjeto("left", lang);
// });

// document.querySelectorAll(".bt-seta")[1].addEventListener("click", () => {
//     indiceAtual = (indiceAtual + 1) % projetos.length;
//     const mainFlag = document.querySelector(".main-flag");
//     const lang = langByAlt[mainFlag?.alt] || "en";
//     atualizarProjeto("right", lang);
// });

// atualizarProjeto();
</script>
<template>
    <div class="projects-dev">
        <img src="#" class="bt-seta">
        <div class="projects-dev-demo"><img src="#"></div>
        <div class="projects-dev-text">
            <h1 class="projects-dev-title borda-texto-preto2">01</h1>
            <h2 class="projects-dev-subtitle">Sales Forecasting<br>Algorithm “ITAMIND”</h2>
            <div class="dev-softwares">
                <h4>CSS</h4>
                <h4>HTML 5</h4>
            </div>
            <p class="textblock">This project solves the problem of wasted frozen products, such as chicken wings, in
                supermarkets. It uses an algorithm that predicts sales demand. The goal is to help determine the
                quantity and timing of thawing, ensuring they are sold within two days and thus avoiding losses due to
                excess stock or expiration dates.</p>
            <a target="_blank" href="https://github.com/eliascmendes/ItaMind"> <img src="#" class="bt-link"> </a>
        </div>
        <img src="#" class="bt-seta">
    </div>
</template>

<style scoped>
.projects-dev {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    padding-bottom: 10%;
}

.projects-dev-demo {
    border-radius: 0.625rem;
    transition: transform 0.3s ease-in-out;
}

.projects-dev-demo img {
    border-radius: 0.625rem;
    width: 37.5rem;
    height: 36.25rem;
    object-fit: cover;
}

.projects-dev-demo:hover {
    transform: scale(1.02);
}

.projects-dev-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 31.25rem;
}

.bt-link {
    height: 1.75rem;
    transition: transform 0.1s ease-in-out;
}

.bt-link:hover {
    transform: scale(1.1);
}

.text-align {
    text-align: right;
}

.projects-dev-title {
    font-family: var(--fonte-destaque);
    color: var(--branco);
    font-size: 4.5rem;
    font-weight: 900;
    padding-bottom: 2rem;
}

.projects-dev-subtitle {
    font-family: var(--fonte-destaque);
    font-weight: 800;
    color: var(--preto);
    font-size: 2.25rem;
    padding-bottom: 0.5rem;
}

.dev-softwares {
    display: flex;
    gap: 0.625rem;
    padding-bottom: 0.625rem;
}

.dev-softwares h4 {
    font-family: var(--fonte-principal);
    color: var(--branco);
    font-size: 0.875rem;
    font-weight: 300;
    padding: 0.625rem 1.25rem 0.625rem 1.25rem;
    width: auto;
    text-align: center;
    background: var(--preto);
    border-radius: 3.125rem;
    transition: transform 0.1s ease, font-weight 0.1s ease;
}

.dev-softwares h4:hover {
    transform: scale(1.05);
    font-weight: 400;
}

.projects-dev-demo,
.projects-dev-text {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.slide-out-left {
    opacity: 0;
    transform: translateX(-3.125rem);
}

.slide-out-right {
    opacity: 0;
    transform: translateX(3.125rem);
}

.bt-seta {
    height: 1.875rem;
    transition: transform 0.1s ease-in-out;
    cursor: pointer;
    animation: wiggle-vertical 1.5s ease-in-out infinite;
}

@keyframes wiggle-vertical {
    0% {
        transform: translateY(0);
        /* Posição inicial */
    }

    50% {
        transform: translateY(-0.3125rem);
        /* Move 5 pixels para cima */
    }

    100% {
        transform: translateY(0);
        /* Volta para a posição inicial */
    }
}

.bt-seta:hover {
    animation: none;
    transform: scale(1.1);
}
</style>
