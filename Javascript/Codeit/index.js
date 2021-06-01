const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const myNumber = document.querySelector("#myNumber");

let number = myNumber.innerText;

decreaseBtn.onclick = function () {
  number--;
  myNumber.innerText = number;
};

increaseBtn.onclick = function () {
  number++;
  myNumber.innerText = number;
};
