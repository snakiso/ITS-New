viewport = document.querySelector("meta[name=viewport]");



window.addEventListener('resize', () => {
  let screenWidth = window.innerWidth
  if (screenWidth < 768) {
    viewport.setAttribute('content', 'width=360, initial-scale=1.0');
  }
})

window.addEventListener('load', () => {
  let screenWidth = window.innerWidth
  if (screenWidth < 768) {
    viewport.setAttribute('content', 'width=360, initial-scale=1.0');
  }
})