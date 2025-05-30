import '../styles/main.scss';

import { initTypewriterHero } from './typewriterHero.js';
import { initTypewriterCta } from './typewritterCta.js';
import { initCasesSlider } from './casesSwiper.js';
import { initBrandsCarousel } from './brandsCarousel.js';
import { initDropdown } from './dropdown.js'
import { initReviewsSlider } from './reviewsSlider.js';
import { initServiceCarouselR } from './serviceCarouselRight.js';
import { initServiceCarouselL } from './serviceCarouselLeft.js';
import { initScrollWordAnimation } from'./splittingHeaders';
import { initHeader } from'./header.js';
import { initExpandableText } from "./serviceCardText";

document.addEventListener('DOMContentLoaded', () => {
    initTypewriterHero();
    initTypewriterCta();
    initCasesSlider();
    initBrandsCarousel();
    initReviewsSlider();
    initServiceCarouselR();
    initServiceCarouselL();
    initScrollWordAnimation();
    initHeader();
    initExpandableText();

    initDropdown({
        containerSelector: '.dropdown',
        placeholder: 'Выбор услуги',
        options: [
            { value: 'cleaning', label: 'Генеральная уборка' },
            { value: 'repairment', label: 'Уборка после ремонта' },
            { value: 'window', label: 'Мойка окон' },
        ],

        onSelect: (value) => {
            //тут например fetch
        }
    });
    initDropdown({
        containerSelector: '.dropdown-cases',
        options: [
            { value: 'private', label: 'Частная недвижимость' },
            { value: 'simple', label: 'Недвижимость' },
            { value: 'public', label: 'Общественное пространство' },
        ],
        onSelect: (value) => {
        }
    });
    initDropdown({
        containerSelector: '.dropdown-faq',
        options: [
            { value: 'cleaning', label: 'Помыть окна' },
            { value: 'repairment', label: 'Уборка после ремонта' },
            { value: 'window', label: 'Уборка' },
        ],
        onSelect: (value) => {
        }
    });
});