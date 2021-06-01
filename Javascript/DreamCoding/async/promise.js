"use strict";

// Promise is a JavaScript for asynchronous operation
// state : pending => fulfilled or rejected
//Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  //doing something heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("seol"); // 성공
    //reject(new Error("no network")); // 실패
  }, 2000);
});

// 2. Consumers : then, catch, finally를 이용해 값을 받아옴
promise
  .then((value) => {
    // value는 Promise가 성공적으로 끝나서 마지막으로 resolve 콜백함수에서 전달된 값
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 성공, 실패 상관없이 무조건 수행
    console.log("finally");
  });

// 3. Promis chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error ${hen} => 달걀`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
  });

getHen() // 콜백함수를 전달할 때 받아오는 value를 다른 함수로 바로 호출하는 경우는 생략 가능
  .then((hen) => getEgg(hen)) // === .then(getEgg)
  // .catch((error) => { // 발생하는 에러를 처리하고 싶으면 then 바로 아래 catch를 작성
  //   return "빵";
  // })
  .then((egg) => cook(egg)) // === .then(cook)
  .then((meal) => console.log(meal)) // === .console.log
  .catch((error) => console.log(error));
