"use strict";

let globalName = "globalName";

{
  let name = "jaehyeok";
  console.log(name);
  name = "seol";
  console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
// has no block scope

age = 4;
var age;
{
  console.log(name);
}

// 3. Constant , read only
// favor immutable(변경불가) data type always for a few reasons:
// - security
// thread safety
// reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : primitive types, frozen objects(i.e object.freeze())
// Mutable data types : all objects by default are mutable in JS
// 4. Variable Types
// primitive, single item: number, string, boolean, null, undefined
// object, box container
// function, first-class function

const count = 17;
const size = 17.1;

console.log(`value: ${count} type: ${typeof count}`);
console.log(`value: ${size} type: ${typeof size}`);

//number - infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "Not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// boolean
// false : 0, null, NaN, undefined, ''
// true : any other value

// symbol. create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true

//object, real-life object, data sturctue
const jaehyeok = { name: "seol", age: "27" };
console.log(`value : ${jaehyeok.name} type : ${typeof jaehyeok}`);

//5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(`value: ${text} type: ${typeof text}`);
text = 1;
console.log(`value: ${text} type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text} type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text} type: ${typeof text}`);
