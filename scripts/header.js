export function initHeader() {
    const root = document.querySelector('.header')
    if (!root) return

    const overlay = root.querySelector('.header__overlay')
    const burgerButton = root.querySelector('.header__burger-button')

    const STATE_CLASSES = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    const onBurgerButtonClick = () => {
        burgerButton.classList.toggle(STATE_CLASSES.isActive)
        overlay.classList.toggle(STATE_CLASSES.isActive)
        document.documentElement.classList.toggle(STATE_CLASSES.isLock)
    }

    burgerButton.addEventListener('click', onBurgerButtonClick)
}
