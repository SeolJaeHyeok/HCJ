"use strict";
// Object-oriented programming
// class: Template
// object: instance of class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // Constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const seol = new Person("jae hyeok", 27);

console.log(seol.name);
console.log(seol.age);
seol.speak();

// 2. Getter and setters ==> 헷갈리는 개념

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }

    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("seol", "jaehyeok", -1);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
  publicfield = 2;
  #privatefield = 3;
}
const experiment = new Experiment();
console.log(experiment.publicfield);
console.log(experiment.privatefield);

// 4. Inheritance (상속)
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // 부모 클래스 상속 받음
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모 클래스의 메소드 접근
    console.log("오버라이딩 된 메소드"); // 메소드 오버라이딩
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle's color is ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "red");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "blue");
triangle.draw();
console.log(triangle.getArea());

// 5. Instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
