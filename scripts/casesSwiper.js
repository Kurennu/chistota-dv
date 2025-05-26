import { Swiper } from 'swiper';
import 'swiper/css';

export function initCasesSlider() {
    new Swiper('.cases__swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,

        navigation: {
            nextEl: null,
            prevEl: null
        },

        pagination: {
            el: null
        },

        effect: 'slide',
        speed: 500,
    });
}