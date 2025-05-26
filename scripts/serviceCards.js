export default function initServiceCards(
    cardSelector = '.service__card',
    {
        threshold = 0.5,
        rootMargin = '0px 0px -50% 0px',
        activeClass = 'is-active'
    } = {}
) {
    const cards = document.querySelectorAll(cardSelector);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle(activeClass, entry.isIntersecting);
        });
    }, { threshold, rootMargin });
    cards.forEach(card => observer.observe(card));
    return {
        disconnect: () => observer.disconnect(),
        unobserve: (card) => observer.unobserve(card)
    };
}