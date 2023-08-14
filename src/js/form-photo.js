let photoInput = document.querySelectorAll('.input-photo');
let photoBox = document.querySelectorAll('.form__photo-box');
let imagesForUpload = [];



for (let i = 0; i < photoInput.length; i++) {

  photoInput[i].addEventListener('dragenter', (e) => {
    e.preventDefault()
  })
  photoInput[i].addEventListener('dragleave', (e) => {
    e.preventDefault()
  })
  photoInput[i].addEventListener('dragover', (e) => {
    e.preventDefault()
  })

  photoInput[i].addEventListener('drop', (e) => { //перетягивание
    e.preventDefault()
    const files = e.dataTransfer.files
    createImg(files, i)
  })

  photoInput[i].addEventListener('change', () => {
    let file = photoInput[i].files;
    createImg(file, i)
  })
}

function createImg(files, index) {  //функция создания изображения

  imagesForUpload.push(files[0])

  let imageName = '';

  if (files[0].name.length < 8) { 
    imageName = files[0].name
  } else {
    imageName = `${files[0].name.slice(0, 5)}.${files[0].name.slice(-3)}`;
  }

  let img = document.createElement('img'); //Создание изображения 
  img.className = 'form__photo-box-img';
  img.src = URL.createObjectURL(files[0]);
  photoBox[index].style.border = 'none';
  photoBox[index].appendChild(img);


  let topLine = document.createElement('div');//Cоздание полоски с информацией
  topLine.className = 'form__photo-box-info';
  photoBox[index].appendChild(topLine);

  let topLineInner = document.createElement('div'); //Cоздание внутреннего контейнера с отступами
  topLineInner.className = 'form__photo-box-info-inner';
  topLine.appendChild(topLineInner);

  let name = document.createElement('span'); //Создание имени картинки
  name.className = 'form__photo-box-info-name';
  name.innerHTML = imageName;
  topLineInner.appendChild(name);

  let close = document.createElement('span'); //Создание кнопки удаления
  close.className = 'form__photo-box-img-remove';
  topLineInner.appendChild(close);

  removeImg(img, topLine, index)
}

function removeImg() { //Удаление изображения
  let removeButton = document.querySelectorAll('.form__photo-box-img-remove');
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', () => {
      let parent = removeButton[i].parentNode.parentNode.parentNode;
      let input = parent.querySelector('.input-photo');
      let info = parent.querySelector('.form__photo-box-info');
      let image = parent.querySelector('.form__photo-box-img');
      input.value = '';
      info.remove();
      image.remove();
      parent.style.border = '2px dashed #dfdfdf';
    })
  }

}


