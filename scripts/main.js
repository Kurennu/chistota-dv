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
import { initHeroSlider } from "./heroSplide";
import { initMobileHeroSlider } from "./mobileHeroSlider";
import { initTeamSlider } from "./teamSlider";
import { initServiceSliders } from "./serviceSlider";
import { initModal } from "./modal.js"

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
    initHeroSlider();
    initMobileHeroSlider();
    initTeamSlider();
    initServiceSliders();
    initModal();

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
});