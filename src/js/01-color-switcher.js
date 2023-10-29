

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
  
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }



  












// const startBtn = document.querySelector(".data-start");
// const stopBtn = document.querySelector(".data-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     //console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   //console.log(`Interval with id ${timerId} has stopped!`);
// });





// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//   }




//   const colorChangeBtn = document.querySelector('.change-color');
// const spanEl = document.querySelector('.color');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// colorChangeBtn.addEventListener('click', changeColorButtonHandler)

// function changeColorButtonHandler() {
//   const color = getRandomHexColor();
//   document.body.style.backgroundColor = color;
//   spanEl.textContent = color;
// }