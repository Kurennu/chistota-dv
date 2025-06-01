import { Splide } from '@splidejs/splide';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';


export function initHeroSlider() {

    const splide = new Splide('.hero__splide', {
        rewind: false,
        // cover : true,
        mute : true,
        hideControls: false,
        // autoplay: true,
        perPage: 3,

        perMove: 1,
        gap: 10,

        arrows: false,
        pagination: false,

    });

    splide.mount({ Video });
    return splide;
}
