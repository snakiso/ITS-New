let dropdown = document.querySelector('.header__dropdown');
let dropdownBtn = document.querySelector('.header__item_dropdown');
let hamburger = document.querySelector('.hamburger')
let body = document.querySelector('.body')
let menu = document.querySelector('.menu')

// dropdownBtn.addEventListener("click", () => {
//   dropdown.classList.toggle('active')
// })

// dropdownBtn.addEventListener("mouseover", () => {
//   dropdown.classList.add('active')
// })

// dropdown.addEventListener("mouseout", () => {
//   dropdown.classList.remove('active')
// })

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active')
  if (menu) {
    menu.classList.toggle('is-active')
  }
  if (menu.classList.contains('is-active')) {
    body.classList.add('body_hidden')
  } else {
    body.classList.remove('body_hidden')
  }
})