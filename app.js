"use stirct";
// getting elements from html
const container = document.getElementById("container");
const maxNum = document.getElementById("maxNum");
const set = document.getElementById("set");
const reset = document.getElementById("reset");
const choose = document.getElementById("choose");
const resultPart = document.getElementById("resultPart");
const randNum = document.getElementById("randomNum");
const error = document.getElementById("error");

// hiding result part
// resultPart.remove();
resultPart.style.display = "none";

// max Number
let maxNumber = 0;

// counting and random result
let randCount = 0;

// setting max number
set.addEventListener("click", function () {
  maxNumber = maxNum.value;

  // choosing proccess
  choose.addEventListener("click", function () {
    console.log(maxNum.value);
    if (maxNum.value == "") {
      error.textContent = "Please write a max number";
    } else {
      error.textContent = "";
      randomFunc(maxNumber, 1);
      randNum.textContent = randCount;
      // container.appendChild(resultPart);
      resultPart.style.display = "block";
    }
  });
});

// straight choose click error
choose.onclick = function () {
  error.textContent = "Please write a max number";
};

// random number setter
function randomFunc(max, min) {
  randCount = Math.floor(Math.random() * (max - min + 1) + min);
}

// reset
reset.addEventListener("click", function () {
  maxNum.value = "";
  maxNumber = 0;
  randCount = 0;
  resultPart.style.display = "none";
});
