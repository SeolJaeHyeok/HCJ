// async & await
// celar style of using promis

// 1. async
async function fetchUser() {
  return "seol";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); // 정해진 ms가 지나면 resolve를 호출하는 Promise를 리턴
}

async function getApple() {
  await delay(2000); // await은 delay함수가 끝날때까지 기다린다
  return "Apple";
}

async function getBanana() {
  await delay(1800);
  return "Banana";
}

// 기존의 Promise방식을 이용한 비동기 호출 => 콜백 지옥
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
pickFruits().then(console.log);

// async await 사용 -> 위의 예와 같은 동작
async function pickFruits() {
  const apple = await getApple(); // 1초
  const banana = await getBanana(); // 1초
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// Promise를 만들면 만들자마자 코드가 실행되기 때문에 사과와 바나나를 병렬적으로 처리 가능
async function pickFruits() {
  const applePromise = getApple(); // Promise 생성
  const bananaPromise = getBanana(); // Promise 생성
  const apple = await applePromise; // 1초
  const banana = await bananaPromise; // 1초
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 위와 같은 await 병렬처리를 해주는 Promise APIs가 존재 => Promise.all()
// Promise배열을 전달하면 모든 Promise들을 병렬적으로 다 받아질때까지 모아주고 그런 다음 다 받아진 배열이 전달
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 배열로 전달된 Promise 중 순서상관없이 먼저 값을 리턴하는 Promise 리턴
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
