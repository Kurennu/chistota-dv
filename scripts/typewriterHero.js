import Typewriter from 'typewriter-effect/dist/core';

export function initTypewriterHero() {
    const words = ['чисто', 'уютно', 'порядок', 'свежо'];

    if (!document.getElementById('typewriter')) return;

    new Typewriter('#typewriter', {
        loop: true,
        delay: 100,
        deleteSpeed: 50,
    })

        .typeString(words[0])
        .pauseFor(1500)
        .deleteAll()
        .typeString(words[1])
        .pauseFor(1500)
        .deleteAll()
        .typeString(words[2])
        .pauseFor(1500)
        .deleteAll()
        .typeString(words[3])
        .pauseFor(1500)
        .deleteAll()
        .start();
}
