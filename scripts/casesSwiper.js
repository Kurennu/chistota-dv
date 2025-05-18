document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.cases__slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 28,

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
});