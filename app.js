'use strict';

const containerEl = document.getElementById('container');

const createDiv = () => {
  for (let i = 0; i < 600; i++) {
    containerEl.innerHTML += `
		<div class="square"></div>
		`;
  }
};

createDiv();

const allSquares = document.querySelectorAll('.square');

const addBG = (e) => {
  const randomColor = Array.from(
    { length: 3 },
    () => Math.floor(Math.random() * 255) + 1
  );
  const boxShadow = [
    `rgb(${randomColor.join(',')}) 0 0 2px`,
    `rgb(${randomColor.join(',')}) 0 0 10px`,
  ];

  console.log(boxShadow);
  console.log(randomColor);

  e.target.style.backgroundColor = `rgb(${randomColor.join(',')})`;
  e.target.style.boxShadow = `${boxShadow.join(',')}`;
};

//////////////////////////////////////////////////////////
allSquares.forEach((square) =>
  square.addEventListener('mouseover', (e) => {
    setTimeout(() => {
      e.target.style.backgroundColor = '';
      e.target.style.boxShadow = '';
    }, 150);

    addBG(e);
  })
);
