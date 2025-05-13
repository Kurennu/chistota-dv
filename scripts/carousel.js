function initCarousel() {
    const carousel = document.querySelector('.carousel__track');
    if (!carousel) return;

    const speed = 0.1;
    let offset = 0;
    let animationId;

    const clone = carousel.innerHTML;
    carousel.innerHTML += clone;

    const animate = () => {
        offset -= speed;
        if (Math.abs(offset) >= carousel.scrollWidth / 2) {
            offset = 0;
        }
        carousel.style.transform = `translateX(${offset}px)`;
        animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
}

export { initCarousel };