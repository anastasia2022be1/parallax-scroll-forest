"use strict";

window.addEventListener('load', windowLoad);

function windowLoad() {
    document.documentElement.classList.add('loaded');

    const contentElement = document.querySelector('.content__container');
    const mountains = document.querySelector('.main-screen__mountains');
    const trees = document.querySelectorAll('.main-screen__trees');
    const birds = document.querySelectorAll('.main-screen__birds');

    let lastPosition = 0;
    let ticking = false;

    function updateAnimation(scrollY) {
        const windowHeight = window.innerHeight;
        const speedFactor = windowHeight / 800;
        const baseMultiplier = 60;

        const rawPosition = scrollY / (contentElement.offsetTop - windowHeight) * baseMultiplier;
        const finalPosition = Math.min(rawPosition / speedFactor, 100);

        // Горы
        const mountainsTranslate = 170 / 100 * finalPosition;
        const mountainsScale = 1 + 2 / 100 * finalPosition;
        mountains.style.transform = `translate3d(0, ${mountainsTranslate}%, 0) scale(${mountainsScale})`;

        // Деревья
        trees.forEach((tree, index) => {
            const treeTranslate = 20 * (trees.length - index) / 100 * finalPosition;
            const treeScale = 1 + 1.5 / 100 * finalPosition;
            tree.style.transform = `translate3d(0, ${treeTranslate}%, 0) scale(${treeScale})`;
        });

        // Птицы
        const birdsTranslate = 190 / 100 * finalPosition;
        const birdsScale = 1 + 2 / 100 * finalPosition;
        birds[0].style.transform = `translate3d(-${birdsTranslate}%, 0, 0) scale(${birdsScale})`;
        birds[1].style.transform = `translate3d(${birdsTranslate}%, 0, 0) scale(${birdsScale})`;
    }

    function onScroll() {
        lastPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateAnimation(lastPosition);
                ticking = false;
            });

            ticking = true;
        }
    }

    // Первоначальное обновление
    updateAnimation(window.scrollY);

    // Плавная анимация при скролле
    window.addEventListener('scroll', onScroll);
}
