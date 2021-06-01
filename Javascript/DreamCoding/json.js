"use strict";

// JSON
//JavaScript Object Notation

// 1. Object to JSON
// stringify(obj, replacer?) => 객체를 파라미터로 넣으면 JSON으로 변환된 값 리턴, 원하는 property만 변환하고 싶으면 replacer 파라미터에 원하는 property 입력
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit); // 객체 내 모든 properties 들 JSON으로 리턴
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]); // 객체 내 원하는 property만 JSON으로 리턴
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key} value : ${value}`);
  return key === "name" ? "seol " : value;
}); // 객체 내 원하는 property만 JSON으로 리턴
console.log(json);

// 2. JSON to Object
// parse(json) => 원래 객체에서 변환된 JSON은 객체 내의 data들(함수 포함 x)만으로 이루어져 있기 떄문에 그 JSON값을 다시 객체로 바꾼다면 원래 객체 내의 함수는 바뀐 객체에 포함되지 않는다.
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key} value : ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump(); //
// obj.jump();
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); => 오류 why? JSON으로부터 만든 객체의 birthDate는 객체가 아닌 String이기 떄문에 Date객체의 api사용 x -> 콜백함수를 이용해 해결 가능
console.log(obj.birthDate.getDate());
