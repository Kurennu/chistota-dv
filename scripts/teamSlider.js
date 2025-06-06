import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';

export function initTeamSlider() {
    const splide = new Splide('.team__splide', {
        type: 'slide',
        rewind: true,

        perPage: 4,
        perMove: 1,
        gap: 24,
        autoplay: true,
        interval: 2000,
        pauseOnHover: true,
        arrows: false,
        pagination: false,
        speed: 800,
    });

    splide.mount();
    return splide;
}
