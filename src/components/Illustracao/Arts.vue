<script>

export default {
    name: 'Arts'
}
</script>

<template>
    <div class="projects-draw">
        <!-- <img src="./assets/images/icons/seta-esquerda.png" class="bt-seta"> -->

        <div class="grid-container2">
            <div class="box box-img" style="grid-area: box-1">
                <img src="#" alt="raiden_shogun" class="gallery__img img-top pointer">
            </div>
            <div class="box box-img" style="grid-area: box-2">
                <img src="#" alt="eileen" class="gallery__img pointer">
            </div>
            <div class="box box-img" style="grid-area: box-3">
                <img src="#" alt="one_piece" class="gallery__img pointer">
            </div>
            <div class="box box-img" style="grid-area: box-4">
                <img src="#" alt="naruto" class="gallery__img pointer">
            </div>
            <div class="box box-img" style="grid-area: box-5">
                <img src="#" alt="scott_pilgrim" class="gallery__img pointer">
            </div>
            <div class="box box-img" style="grid-area: box-6">
                <img src="#" alt="akira" class="gallery__img pointer">
            </div>
            <div class="box box-img" style="grid-area: box-7">
                <img src="#" alt="goku" class="gallery__img img-bot pointer">
            </div>
            <div class="box box-img" style="grid-area: box-8">
                <a target="_blank" class="bt-see-more" href="https://www.instagram.com/kyukiewk">
                    <span class="bt-content">
                        <span class="bt-text">SEE MORE</span>
                        <img src="#">
                    </span>
                </a>
                <img src="#" alt="overthegarden" class="gallery__img">
            </div>

            <div id="lightbox" class="lightbox">
                <span class="close">&times;</span>
                <span class="prev">&#10094;</span>
                <img class="lightbox-img" id="lightbox-img">
                <span class="next">&#10095;</span>
            </div>
        </div>

        <!-- <img src="./assets/images/icons/seta-direita.png" class="bt-seta"> -->
    </div>
</template>

<style scoped>
.box {
    display: flex;
    border-radius: 0.625rem;
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
}

.box:hover {
    transform: scale(1.02);
}

.box-img {
    align-items: flex-end;
    justify-content: end;
}

.projects-draw {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10%;
}

.bt-see-more {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 0.625rem 0.625rem 0rem;
    position: absolute;

    width: 2.5rem;
    height: 7.5rem;
    border-radius: 0.3125rem;
    background: var(--branco);
    text-decoration: none;
}

.bt-content {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    transform: rotate(-90deg);
    font-family: var(--fonte-principal);
    font-weight: 300;
    font-size: calc(2.5rem * 0.40);
    color: var(--preto);
    white-space: nowrap;
    /* impede quebra */
}

.bt-content img {
    height: 1em;
    width: auto;
}

.bt-see-more:hover {
    background: white;
}

.grid-container2 {
    display: grid;
    grid-template-columns: 8.75rem 8.75rem 8.75rem 8.75rem 8.75rem 8.75rem 8.75rem 8.75rem;
    grid-template-rows: 8.75rem 8.75rem 8.75rem 8.75rem;
    gap: 0.625rem;
    grid-template-areas:
        'box-1 box-1 box-2 box-2 box-3 box-3 box-4 box-4'
        'box-5 box-5 box-2 box-2 box-3 box-3 box-4 box-4'
        'box-5 box-5 box-6 box-6 box-3 box-3 box-8 box-8'
        'box-5 box-5 box-6 box-6 box-7 box-7 box-8 box-8';
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.625rem;
}

.pointer {
    cursor: pointer;
}

.img-top {
    object-position: top;
}

.img-bot {
    object-position: bottom;
}

/* Lightbox escondido por padrão */
.lightbox {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
}

.lightbox-img {
    max-width: 90%;
    max-height: 90%;
}

.close,
.prev,
.next {
    position: absolute;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    user-select: none;
}

.close {
    top: 1.25rem;
    right: 2.5rem;
}

.prev,
.next {
    top: 50%;
    transform: translateY(-50%);
    padding: 0.625rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 3.75rem;
    text-align: center;
}

.prev {
    left: 1.875rem;
}

.next {
    right: 1.875rem;
}
</style>
