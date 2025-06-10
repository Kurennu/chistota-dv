import MomentumSlider from "momentum-slider";
import photo1 from '../images/reviews/user1.png';
import photo2 from '../images/reviews/user2.png';
import photo3 from '../images/reviews/user3.png';

import icon2gis from '../icons/2gis.png';
import iconYandex from '../icons/Yandex.png';
import starIcon from '../icons/star.svg';
import commasIcon from '../icons/commas.svg';

import reviewImg1 from '../images/reviews/image1.png';


const reviewsData = [
    {
        name: "Анна",
        service: "Послеремонтная уборка",
        text: "Заказывали уборку после переезда — квартира засияла! Спасибо за бережное отношение к моей техник.",
        photo: photo1,
        score: 5,
        link: {
            url: "https://2gis.ru/",
            text: "Читать на 2GIS",
            icon: icon2gis,
            image: reviewImg1
        }
    },
    {
        name: "Петр",
        service: "Послеремонтная уборка",
        text: "Заказывали уборку после переезда — квартира засияла! Спасибо за бережное отношение к моей техник.",
        photo: photo2,
        score: 4,
        link: {
            url: "https://2gis.ru/",
            text: "Читать на Яндекс",
            icon: iconYandex,
        }
    },
    {
        name: "Евгений",
        service: "Послеремонтная уборка",
        text: "Заказывали уборку после переезда — квартира засияла! Спасибо за бережное отношение к моей техник.",
        photo: photo3,
        score: 5,
        link: {
            url: "https://2gis.ru/",
            text: "Читать на 2GIS",
            icon: icon2gis,
            image: reviewImg1
        }
    }
];

function createReviewSlide(review) {
    const starsCount = review.score;
    const starsHtml = Array(5).fill(0).map((_, i) => {
        return `<img src="${starIcon}" class="reviews__stars_img" width="20" height="20" style="opacity:${i < starsCount ? 1 : 0.3}">`;
    }).join('');

    const reviewImageBlock = review.link.image
        ? `
          <div class="reviews__photo-wrapper">
              <img src="${review.link.image}" alt="" class="reviews__photo" width="288" height="152">
          </div>
        `
        : '';

    return `
      <div class="reviews__swiper-slide">
        <div class="reviews__swiper-slide-inner">
          <div class="reviews__user-wrapper">
            <div class="reviews__user-info">
              <div class="reviews__img-wrapper">
                <img src="${review.photo}" alt="" class="reviews__img" width="64" height="64">
              </div>
              <div class="reviews__user">
                <div class="reviews__user-top">
                  <p class="reviews__score">${review.score}.0</p>
                  <div class="reviews__stars">${starsHtml}</div>
                </div>
                <div class="reviews__user-bottom">
                  <p class="reviews__user-name">${review.name}</p>
                  <p class="reviews__user-service">${review.service}</p>
                </div>
              </div>
            </div>
            <div class="reviews__user-commas  hidden-tablet">
              <img src="${commasIcon}" alt="" class="reviews__commas" width="48" height="48">
            </div>
          </div>
          <div class="reviews__content">
            <div class="reviews__body-wrapper">
              <div class="reviews__body">
                <span>${review.text}</span>
              </div>
              <button class="reviews__button" onclick="window.open('${review.link.url}', '_blank')">
                <img src="${review.link.icon}" alt="" class="reviews__commas" width="40" height="40">
                <span class="reviews__button-title">${review.link.text}</span>
              </button>
            </div>
            ${reviewImageBlock}
          </div>
        </div>
      </div>
    `;
}


export function initReviewsSlider() {
    const slidersContainer = document.querySelector('.ms-slide__container');
    const prevButton = document.querySelector('.reviews__controls-prev');
    const nextButton = document.querySelector('.reviews__controls-next');
    const currentSlideIndicator = document.querySelector('.reviews__controls-current');

    const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

    const getSliderConfig = (isMobile) => ({
        el: slidersContainer,
        cssClass: 'ms-slides',
        range: [0, reviewsData.length - 1],
        rangeContent: (index) => createReviewSlide(reviewsData[index]),
        change: (newIndex) => {
            const formatNumber = (num) => num.toString().padStart(2, '0');
            currentSlideIndicator.innerHTML = `${formatNumber(newIndex + 1)}/<span>${formatNumber(reviewsData.length)}</span>`;
            prevButton.disabled = newIndex === 0;
            nextButton.disabled = newIndex === reviewsData.length - 1;
            prevButton.classList.toggle('is-disabled', newIndex === 0);
            nextButton.classList.toggle('is-disabled', newIndex === reviewsData.length - 1);
        },
        style: {
            '.reviews__swiper-slide': {
                transform: [{ scale: isMobile ? [0.95, 1] : [0.85, 1] }],
                opacity: [0.5, 1]
            },
        },
    });

    let msImages = new MomentumSlider(getSliderConfig(mobileMediaQuery.matches));

    const handleMediaChange = (e) => {
        msImages.destroy();
        msImages = new MomentumSlider(getSliderConfig(e.matches));
    };


    mobileMediaQuery.addEventListener('change', handleMediaChange);

    prevButton.addEventListener('click', () => {
        const currentIndex = msImages.getCurrentIndex();
        if (currentIndex > 0) {
            msImages.select(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        const currentIndex = msImages.getCurrentIndex();
        if (currentIndex < reviewsData.length - 1) {
            msImages.select(currentIndex + 1);
        }
    });

    const formatNumber = (num) => num.toString().padStart(2, '0');
    currentSlideIndicator.innerHTML = `${formatNumber(1)}/<span>${formatNumber(reviewsData.length)}</span>`;
    prevButton.disabled = true;
    if (reviewsData.length <= 1) {
        nextButton.disabled = true;
    }
}