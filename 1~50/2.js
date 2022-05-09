// 문제 2 : 배열의 내장함수
// https://www.notion.so/2-788973aacbf949dc81e98db31036d458

let arr = [200, 100, 300];

arr.splice(2, 0, 10000);

console.log(arr);

// 배열의 내장 함수 splice를 통해 배열의 특정 위치에 있는 요소를 제거할 수 있다.

// array.splice(위치, 제거 건수, ["요소1", "요소2", ...])
// splice 함수는 해당 위치의 요소를 제거 후 그 위치에 새로운 요소를 추가할 수 있다.
