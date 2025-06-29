"use strict";

window.addEventListener('load', windowLoad);

function windowLoad() {
    document.documentElement.classList.add('loaded');
    createPosition();
    window.addEventListener('scroll', createPosition);

    function createPosition() {
        const contentElement = document.querySelector('.content__container');
        const windowHeight = window.innerHeight;

        // Коэффициент скорости: чем выше экран — тем медленнее эффект, поэтому уменьшаем масштаб
        const speedFactor = windowHeight / 800; // 800 — базовая референсная высота
        const baseMultiplier = 60;

        // finalPosition адаптирован к высоте экрана
        const rawPosition = scrollY / (contentElement.offsetTop - windowHeight) * baseMultiplier;
        const finalPosition = Math.min(rawPosition / speedFactor, 100);

        forestAnimation(finalPosition);
    }

    function forestAnimation(finalPosition) {
        const mountains = document.querySelector('.main-screen__mountains');
        const trees = document.querySelectorAll('.main-screen__trees');
        const birds = document.querySelectorAll('.main-screen__birds');

        const mountainsTranslate = 170 / 100 * finalPosition;
        const mountainsScale = 1 + 2 / 100 * finalPosition;

        mountains.style.cssText = `transform: translate3d(0, ${mountainsTranslate}%, 0) scale(${mountainsScale});`;

        trees.forEach((tree, index) => {
            const treeTranslate = 20 * (trees.length - index) / 100 * finalPosition;
            const treeScale = 1 + 1.5 / 100 * finalPosition;

            tree.style.cssText = `transform: translate3d(0, ${treeTranslate}%, 0) scale(${treeScale});`;
        });

        const birdsTranslate = 190 / 100 * finalPosition;
        const birdsScale = 1 + 2 / 100 * finalPosition;

        birds[0].style.cssText = `transform: translate3d(-${birdsTranslate}%, 0, 0) scale(${birdsScale});`;
        birds[1].style.cssText = `transform: translate3d(${birdsTranslate}%, 0, 0) scale(${birdsScale});`;
    }
}
