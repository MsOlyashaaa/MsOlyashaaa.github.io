const ex1ById = document.getElementById('ex1');
const ex1querySelector = document.querySelector('.ex1');

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}

function getRandomColorStyle() {
  return 'rgb(' + getRandomInt() + ',' + getRandomInt() + ',' + getRandomInt() + ')';
}

const changeColorsById = () => {
  ex1ById.style.background = getRandomColorStyle();
  ex1ById.style.color = getRandomColorStyle();
};

const changeColorsQuerySelector = () => {
  ex1querySelector.style.background = getRandomColorStyle();
  ex1querySelector.style.color = getRandomColorStyle();
};
/*---------------------------------------------------*/

const onClickAdd = () => {
  const imgElement = document.getElementById('additionalImg');
  if (!imgElement) {
    const imgElement = document.createElement('img');
    imgElement.id = 'additionalImg';
    imgElement.src = 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg';
    imgElement.style.width = '250px';
    imgElement.style.height = '250px';
    bodyElem.appendChild(imgElement);
  }
};

const onClickIncrease = () => {
  const imgElement = document.getElementById('additionalImg');
  if (imgElement) {
    imgElement.style.width = String(imgElement.offsetWidth + 10) + 'px';
    imgElement.style.height = String(imgElement.offsetHeight + 10) + 'px';
  }
};

const onClickReduce = () => {
  const imgElement = document.getElementById('additionalImg');
  if (imgElement) {
    imgElement.style.width = String(imgElement.offsetWidth - 10) + 'px';
    imgElement.style.height = String(imgElement.offsetHeight - 10) + 'px';
  }
};

const onClickRemove = () => {
  const imgElement = document.getElementById('additionalImg');
  imgElement && bodyElem.removeChild(imgElement);
};


const bodyElem = document.querySelector('body');
const divButtons = document.createElement('div');

const addButton = document.createElement('button');
addButton.innerHTML = 'Додати';
addButton.onclick = onClickAdd;

const increaseButton = document.createElement('button');
increaseButton.innerHTML = 'Збільшити';
increaseButton.onclick = onClickIncrease;

const reduceButton = document.createElement('button');
reduceButton.innerHTML = 'Зменшити';
reduceButton.onclick = onClickReduce;

const removeButton = document.createElement('button');
removeButton.innerHTML = 'Видалити';
removeButton.onclick = onClickRemove;

divButtons.appendChild(addButton);
divButtons.appendChild(increaseButton);
divButtons.appendChild(reduceButton);
divButtons.appendChild(removeButton);
divButtons.appendChild(removeButton);
bodyElem.appendChild(divButtons);