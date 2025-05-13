let players = [];
let currentSlideIndex = 0;

function onYouTubeIframeAPIReady() {
    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach((slide, index) => {
        const placeholder = slide.querySelector('.player-placeholder');
        const videoId = slide.getAttribute('data-video-id');

        players[index] = new YT.Player(placeholder, {
            width: '100%',
            height: '100%',
            videoId: videoId,
            playerVars: {
                autoplay: 0,
                controls: 1,
                showinfo: 0,
                rel: 0,
            },
            events: {
                onReady: (event) => {
                    if (index === 0) event.target.playVideo();
                }
            }
        });
    });

    const swiper = new Swiper('.swiper-container', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: () => {
                const previousIndex = swiper.realIndex;
                const currentIndex = swiper.activeIndex;

                if (players[previousIndex] && players[previousIndex].pauseVideo) {
                    players[previousIndex].pauseVideo();
                }

                if (players[currentIndex] && players[currentIndex].playVideo) {
                    players[currentIndex].playVideo();
                }

                currentSlideIndex = currentIndex;
            }
        }
    });
}

export { onYouTubeIframeAPIReady };