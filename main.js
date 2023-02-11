const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('.burger-menu')
const menuClose = document.querySelector('.button-close')

burgerButton.addEventListener('click', this.burgerMenuOpen)
menuClose.addEventListener('click', this.closeBurgerMenu)

function burgerMenuOpen() {
    burgerMenu.style.display = 'block'
}

function closeBurgerMenu() {
    burgerMenu.style.display = 'none'
}