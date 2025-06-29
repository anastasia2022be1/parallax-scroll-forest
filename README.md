# Forest Parallax

**Forest Parallax** is a lightweight parallax scrolling effect built with pure HTML, CSS, and JavaScript. It showcases how layered backgrounds (mountains, trees, birds) can move at different speeds to simulate depth and perspective.

## Live Demo

👉 [View Live Demo](https://anastasia2022be1.github.io/parallax-scroll-forest/)

## Features

- Pure HTML, CSS, and vanilla JS (no libraries)
- Scroll-based animation with `requestAnimationFrame`
- Adaptive animation speed based on screen size
- Layered scene: mountains, forest, birds
- Clean structure and reusable logic


## How It Works

As the user scrolls down, JavaScript calculates a `finalPosition` value depending on the scroll position and screen height. This value determines how each layer transforms using `translate3d` and `scale`. The animation is smooth and efficient thanks to `requestAnimationFrame`.

Instead of triggering updates directly inside the scroll event, the project uses requestAnimationFrame() for optimized and fluid animations. This ensures the animations remain synchronized with the browser’s refresh rate and are less likely to stutter during rapid scrolling.

## Use Cases

- Landing pages
- Visual storytelling
- UI experiments
- Portfolio animation effects

Enjoy the forest! 🌲🌿🕊️


