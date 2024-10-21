const arr = [1, 2, 3];

const nestedArr = arr.flatMap(x => [x * 2]);
console.log(nestedArr);