import Typewriter from 'typewriter-effect/dist/core';

export function initTypewriterHero() {
    const words = ['чисто', 'уютно', 'порядок', 'свежо'];

    const el = document.getElementById('typewriter');
    if (!el) return;

    const typewriter = new Typewriter(el, {
        loop: true,
        delay: 200,
        deleteSpeed: 50,
    });

    words.forEach(word => {
        typewriter
            .typeString(word)
            .pauseFor(1500)
            .deleteAll();
    });
    typewriter.start();
}
