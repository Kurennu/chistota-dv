import { initTypewriter } from './typewriter.js';
import { onYouTubeIframeAPIReady } from './videoSlider.js';
import { initCarousel } from './carousel.js';


document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initCarousel();
    onYouTubeIframeAPIReady();
});