let myimage = document.querySelector('img');
myimage.onclick = function () {
  let mySrc = myimage.getAttribute('src')
  if(mySrc === 'img/торт.jpg') {
    myimage.setAttribute('src', 'img/02.jpg')
  } else {
    myimage.setAttribute('src', 'img/торт.jpg')
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Введите свое имя')
  localStorage.setItem('Имя', myName)
  myHeading.textContent = 'торты это круто, ' + myName
};
if (!localStorage.getItem('Имя')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('имя')
  myHeading.textContent = 'торты это круто, ' + storedName
};

myButton.onclick = function () {
  setUserName()
};
