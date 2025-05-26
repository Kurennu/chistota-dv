import Typewriter from 'typewriter-effect/dist/core';

export function initTypewriterCta() {
    const words = ['уборки', 'хлопот'];

    if (!document.getElementById('typewriterCta')) return;

    new Typewriter('#typewriterCta', {
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
        .start();
}
