import { Splide } from '@splidejs/splide';

export function initHeroSlider() {
    const splide = new Splide('.hero__splide', {
        type: 'slide',
        rewind: false,
        fixedWidth: 473,
        fixedHeight: 689,
        perMove: 1,
        arrows: false,
        pagination: false,
        trimSpace: false,
        // gap: '-200px',
        classes: {
            slide: 'hero__splide-slide splide__slide',
            active: 'is-active',
            visible: 'is-visible',
        },
    });

    // function updateSlidePositions() {
    //     const slides = document.querySelectorAll('.hero__splide-slide');
    //     const activeIndex = splide.index;
    //
    //     slides.forEach((slide, index) => {
    //         slide.classList.remove('slide-offset', 'slide-previous');
    //
    //         if (index < activeIndex) {
    //             slide.classList.add('slide-previous');
    //         } else if (index > activeIndex) {
    //             slide.classList.add('slide-offset');
    //         }
    //     });
    // }

    function playActiveVideo() {
        const allVideos = document.querySelectorAll('.splide__slide video');
        allVideos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });

        const activeSlide = splide.Components.Slides.getAt(splide.index).slide;
        const activeVideo = activeSlide.querySelector('video');
        if (activeVideo) {
            activeVideo.play();
        }
    }

    splide.on('mounted move', () => {
        // updateSlidePositions();
        playActiveVideo();
    });

    splide.mount();
    return splide;
}