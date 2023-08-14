let inputPresentation = document.querySelector('.form__presentation');
let inputPresentationAdd = document.querySelector('.form__presentation-custom-add');
let inputPresentationRemove = document.querySelector('.form__presentation-custom-remove');
let inputPresentationRemoveBtn = document.querySelector('.form__presentation-custom-remove-img');
let inputPresentationRemoveText = document.querySelector('.form__presentation-custom-remove-text');


inputPresentation.addEventListener('change', (event) => {

  inputPresentationAdd.style.display = 'none';
  inputPresentationRemove.style.display = 'flex';
  inputPresentationRemoveText.innerHTML = event.target.files[0].name;

})


inputPresentationRemoveBtn.addEventListener('click', (event) => {
  inputPresentationRemove.style.display = 'none';
  inputPresentationAdd.style.display = 'flex';
  event.target.value = ''
})