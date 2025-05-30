import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';

export function initCasesSlider() {
    const splide = new Splide('.cases__splide', {
        type: 'slide',
        rewind: false,

        perPage: 2,
        perMove: 1,
        gap: 28,

        speed: 500,
        arrows: false,
        pagination: false,


        breakpoints: {
            1023: {
                perMove: 1,
                gap: 16,
            },
            768: {
                perPage: 1,
                fixedWidth: 320,
                fixedHeight: 273,
                trimSpace: false,
            }
        }
    });

    splide.mount();
    return splide;
}

