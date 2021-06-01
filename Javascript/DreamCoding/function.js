"use strict";

function printHello() {
  console.log("Hello");
}

function log(message) {
  console.log(message);
}
log("hello");
log(1234);

function changeName(obj) {
  obj.name = "coder";
}
const hyeok = { name: "jaehyeok", age: "27" };
changeName(hyeok);
console.log(hyeok);

// Rest parameter
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  } // Same result
  for (const arg of args) {
    console.log(arg);
  }
}
printAll("hello", "my name is", "jaehyeok");

// Function expression
const print = function () {
  console.log("print");
}; //함수 자체를 변수에 선언 가능

print(); // 변수명() 형태로 사용
const printAgain = print; // 다른 변수에 할당 가능
printAgain();

// Callback function using function expression
function randomQuiz(answer, printyes, printno) {
  if (answer === "i love you") {
    printyes();
  } else {
    printno();
  }
}

// Anonymous function
const printYes = function () {
  console.log("Yes!");
};

// Named function
const printNo = function print() {
  console.log("No!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("i love you", printYes, printNo);

//Arrow function
//always anonymous

// const simplePrint = function () {
//   console.log("simple Print!");
// };

const simplePrint = () => console.log("simple Print");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  //do something
  return a * b;
};

// 일반적인 함수 호출법
function hello() {
  console.log("hello");
}
hello();
//IIFE : Immeadiately Invoked Function Expression, 선언과 동시에 호출
(function hello() {
  console.log("hello");
})();

function calculator(command, a, b) {
  if (command === add) return a + b;
  else if (command === subtract) return a - b;
  else if (command === divide) return a / b;
  else if (command === multiply) return a * b;
  else if (command === remainder) return a % b;
  else return "fuck";
}
