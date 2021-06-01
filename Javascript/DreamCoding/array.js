"use strict";

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits
// a. for..of
for (let value of fruits) {
  console.log(value);
}
// b. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy

// push : add and item to the end
fruits.push("딸기", "바나나");
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beggining
fruits.unshift("딸기", "복숭아");
console.log(fruits);

// shift : remove and item from the beggining
fruits.shift();
fruits.shift();
console.log(fruits);

// Note!! shift, unshift are slower than pop, push
// splice : remove an item by index position
fruits.push("딸기", "복숭아", "메론");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(0, 5);
console.log(fruits);
fruits.push("딸기", "복숭아", "메론");
console.log(fruits);
fruits.splice(0, 2, "사과", "바나나");
console.log(fruits);

// concat : combine two or more arrays
const fruits2 = ["배", "포도"];
const fruits3 = ["레몬", "감"];
const newFruits = fruits.concat(fruits2, fruits3);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.clear();
console.log(newFruits);
console.log(newFruits.indexOf("바나나"));
console.log(newFruits.indexOf("레몬"));
console.log(newFruits.indexOf("샤인머스켓"));

// includes :
console.log(newFruits.includes("바나나"));
console.log(newFruits.includes("샤인머스켓"));

// lastIndexOf
console.clear();
newFruits.push("메론");
console.log(newFruits);
console.log(newFruits.indexOf("메론"));
console.log(newFruits.lastIndexOf("메론"));
