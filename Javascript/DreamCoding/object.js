"use strict";
// Objects
// one of the JavaScript's data type
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; 키와 값의 집합체

// 1. Literals and properties
const obj1 = {}; // object literal syntax
const obj2 = new Object(); // object constructor syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const seol = { name: "jae hyeok", age: 27 };
print(seol);

// can add properties later
seol.hasjob = true;
console.log(seol.hasjob);
// can delete properties
delete seol.hasjob;
console.log(seol.hasjob);

// 2. Computed properties
console.log(seol.name);
console.log(seol["name"]); // key는 항상 string타입으로
seol["hasjob"] = true;
console.log(seol["hasjob"]);

function printValue(obj, key) {
  console.log(obj.key); // undefined => why? object의 'key' 라는 property가 있냐라고 판단
  console.log(obj[key]); // 제대로 출력 어떨 때 사용하냐? 동적으로 key값을 받아야 할 때 Computed properties를 사용한다.
}
printValue(seol, "name");
printValue(seol, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 20 };
const person2 = { name: "mike", age: 25 };
const person3 = { name: "chris", age: 30 };
const person4 = new Person("hyeok", 27);
console.log(person4);
// 4. Constructor function => this로 생성하고 this를 리턴
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

// 5. in operator => 객체 안에 해당 key값이 있는지 확인 하는 연산자
console.log("name" in seol);
console.log("age" in seol);
console.log("born" in seol);
console.log(seol.born);

// 6. for..in vs for..of
console.clear();
//for in => 객체 안 탐색
for (key in seol) {
  console.log(key);
}
//for of => 배열 안 탐색
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. cloning
//Object.assign(dest, [obj1, obj2, obj3...]);
const user = { name: "seol", age: 27 };
const user2 = user;
console.log(user2);

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);
//Object.assign
const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
