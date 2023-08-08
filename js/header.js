let dropdown = document.querySelector('.header__dropdown');
let dropdownBtn = document.querySelector('.header__item_dropdown');
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')

dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle('active')
})

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active')
  if (menu) {
    menu.classList.toggle('is-active')
  }
})