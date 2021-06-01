"use strict";
// Q1. make a string out of an array : join() => param으로 String타입 추가 가능, 없으면 알아서 ','로 구분해준다.
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(" and ");
  console.log(result);
}

// Q2. make an array out of a string : split(구분자, 제한할 수)
{
  const fruits = "apple, banana, orange";
  const result = fruits.split(",", 2);
  console.log(result);
}
// Q3. make this array look like this [5, 4, 3, 2, 1] : reverse() => 배열자체를 변화시키고 리턴값도 변화된 값을 리턴
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}
// Q4. make new array without the first two elements : slice(start, end) => 시작 인덱스 값과 종료 인덱스 값를 입력하면 원래 배열에서 인덱스에 해당하는 값을 리턴, 배열 자체 삭제 x
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 22, false, 68),
  new Student("C", 18, true, 29),
  new Student("D", 31, false, 90),
  new Student("E", 27, true, 100),
];

// Q5. find a student with the score 90 : find() => 배열의 요소를 하나씩 탐색하고 해당하는 요소가 있다면 (즉, true라면) 해당하는 요소를 리턴
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}
// Q6. make and array of enrolled students : filter() => 배열의 요소 중 (조건에 만족하는) 우리가 원하는 요소 리턴
{
  const result = students.filter((students) => students.enrolled);
  console.log(result);
}
// Q7. make an array containing only the students' scores : map() => 배열 안의 요소를 우리가 전달한 콜백함수(사용자가 정의)에 따라 다른 값으로 변환시켜서 새로운 배열로 리턴
//result should be: [45, 68, 29, 90, 100]
{
  const result = students.map((students) => students.score);
  console.log(result);
}
// Q8. check if there is a student with the score lower than 50 : some() => 배열의 요소 중에서 콜백함수(사용자 정의 조건)에 만족하는(true)요소가 하나라도 있다면 true 리턴
// every()는 배열의 모든 요소가 콜백함수(사용자 정의 조건)에 만족하면 true, 아니면 false
{
  console.clear();
  const result = students.some((students) => students.score < 50);
  console.log(result);

  const result2 = students.every((students) => students.score > 50);
  console.log(result2);
}
// Q9. compute students' average score : reduce(prev, curr, ?init) => 이전의 콜백함수에서 리턴하는 값이 다음 호출의 prev로 전달, init에서 초깃값 설정 가능
{
  console.clear();
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}
// Q10. make a string containing all the scores
// result should be: '45, 68, 29, 90, 100'
{
  const result = students
    .map((students) => students.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}
// Bonus do Q10 sorted in ascending order
//result should be: '29, 45, 68, 90, 100'
{
  const result = students
    .map((students) => students.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
