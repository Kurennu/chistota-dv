import '../styles/main.scss';

import { initTypewriterHero } from './typewriterHero.js';
import { initTypewriterCta } from './typewritterCta.js';
import initServiceCards from './serviceCards.js';
import { initCasesSlider } from './casesSwiper.js';
import { initBrandsCarousel } from './brandsCarousel.js';
import { initDropdown } from './dropdown.js'
import { initReviewsSlider } from './reviewsSlider.js';

document.addEventListener('DOMContentLoaded', () => {
    initTypewriterHero();
    initTypewriterCta();
    initServiceCards();
    initCasesSlider();
    initBrandsCarousel();
    initReviewsSlider();

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