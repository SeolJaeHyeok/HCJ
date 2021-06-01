"use strict";

// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let count = 2;
const preIncrement = ++count;
// 1) counter = counter + 1
// 2) preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, count : ${count}`);
const postIncrement = count++;
// 1) postIncrement = counter
// 2) counter = counter + 1
console.log(`postIncrement : ${postIncrement}, count : ${count}`);

const preDecrement = --count;
console.log(`preDecrement : ${preDecrement}, count : ${count}`);
const postDecrement = count--;
console.log(`postDecrement : ${postDecrement}, count : ${count}`);

// 4. if 조건문
// if, else if, else
// condition ? value1 : value2 <= 조건이 참이면 value1, 거짓이면 value2 실행

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}
for (let i = 0; i < 10; i++) {
  if (i === 8) break;
  console.log(i);
}
