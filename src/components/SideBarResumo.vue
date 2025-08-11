<template>
    <header class="header">
        <nav class="nav">
            <ul class="nav-list">
                <li><a href="#"><i class="bi bi-house-fill"></i></a></li>
                <li><a href="#"><i class="bi bi-person-fill"></i></a></li>
                <li><a href="#"><i class="bi bi-award-fill"></i></a></li>
                <li><a href="#"><i class="bi bi-stars"></i></a></li>
                <li><a href="#"><i class="bi bi-book"></i>
                        <!-- <i class="bi bi-book-fill"></i> -->
                    </a></li>
                <li><a href="#"><i class="bi bi-send-fill"></i></a></li>
                <li><a href="#"><i class="bi bi-translate"></i></a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: opacity 0.3s ease;
    background-color: var(--roxo-mais-claro);
}

.header.scrolled {
    opacity: 0.2;
}

.nav-list {
    display: flex;
    gap: 32px;
    list-style: none;
}

.nav-list a {
    color: var(--roxo-desligado);
    padding-block: 16px;
    text-decoration: none;
}

/* Efeito hover */

.nav:hover {
    opacity: 1 !important;
}

.header:hover {
    opacity: 1 !important;
}

.nav-list a:hover {
    color: var(--roxo-claro);
    transform: scale(1.1);
}

html {
    scroll-behavior: smooth;
}
</style>