/*
//클래스속에 멤버변수 반복문을 이용해서 출력
const test = {
  subject: "영어",
  score: 90,
  grade: "A"
};

const testKeys = Object.keys(test);
//const personKeys = ['name', 'age', 'tall']
console.log(testKeys);

for (let index = 0; index < testKeys.length; index++) {
  const key = testKeys[index];
  console.log(` ${key} = ${test[key]}`);
}

const valueArray = Object.values(test);
console.log(valueArray);
for (let index = 0; index < valueArray.length; index++) {
  console.log(` ${valueArray[index]}`)
}
*/

 //1. forEach 
const score = [90, 100, 80, 95];
score.forEach((value)=>console.log(`${value}`));
console.log(score);

// 2. Map 
//값이 3개 => 리턴 변경된 3개 값이 나와야 된다.
// const arr = [3, 4, 5, 6];
// let newArr = arr.map((value)=> value + 10);
// console.log(newArr);

// //3. filter
// let array1 = [ 
// { subject: "영어", score: 100 }, 
// { subject: "영어", score: 80 }, 
// { subject: "수학", score: 80 }
// ];

// let newArray1 = [];
// for (let i = 0; i < array1.length; i++) {
//   let item = array1[i];
//   if(item.subject === "영어"){
//     newArray1.push(item);
//   }
// }
// console.log(newArray1);

// // const english = arr1.filter( 
// // (item) => item.subject === "영어" 
// // ); 
// // Console.log(english);    


// //4. find, findIndex ***************** 
// let arr = [ 
// { subject: "영어", score: 100 }, 
// { subject: "영어", score: 80 }, 
// { subject: "수학", score: 80 }
// ];

// let findItem = arr.find((value)=>value.subject === "수학");

// let findIndex = arr.findIndex((value)=>value.subject === "수학");

// console.log(findItem);
// console.log(findIndex);

// // 5. slice(start, end)***************
// let array = [ 
// { subject: "영어", score: 100 }, 
// { subject: "영어", score: 80 }, 
// { subject: "수학", score: 80 }, 
// { subject: "국어", score: 60 }, 
// { subject: "과학", score: 100 }, 
// { subject: "국어", score: 70 }
// ];

// let newArray = array.slice(2, 5);
// console.log(newArray);

// //6. concat *************************
// let arr1 = [ 
// { subject: "영어", score: 100 }, 
// { subject: "영어", score: 80 }, 
// { subject: "수학", score: 80 }
// ];
// let arr2 = [ 
// { subject: "국어", score: 60 }, 
// { subject: "과학", score: 100 }, 
// { subject: "국어", score: 70 } 
// ];

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// // 7. sort, sort().reverse() ***********
// // 배열을 사전순으로 내림차순 정렬하는 메서드 
// // 자바스크립트는 문자단위 정렬
// //숫자단위 정렬은 문제가 발생한다.
// let arr1 = [12, 7, 5, 20, 2, 34, 75]; 
// arr1.sort((num1, num2)=> num2 - num1);
// console.log(arr1);

// let arr2 = ["apple", "lemon", "bee", "tiger", "orange", "zebra"]; 
// arr2.sort(); 
// console.log(arr2);

// // 8. join, split **********************
// const arr = ["오늘","하루","고생","많았습니다"]; 
// const joined = arr.join("&"); 
// console.log(joined);

// const arr2 = joined.split("&");
// console.log(arr2);