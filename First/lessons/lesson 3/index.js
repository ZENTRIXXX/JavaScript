// NonPrimitive -> Objects -> objects -> "object", "function", "array".

//Array

let arr1 = ["algoritm", 100, true, false, null, undefined,Symbol()];
let arr2 = Array("algoritm", 100, true, false, null, undefined,Symbol());
let arr3 = new Array("algoritm", 100, true, false, null, undefined,Symbol());

console.log(arr1);
console.log(arr2);
console.log(arr3);


