// function getAverage(arr){
//   let summa = arr.reduce((a ,c )=>a+c ,0) 
//   return parseInt(summa / arr.lenght)
// }

// getAverage([2,2,2,2]) //2
// getAverage([1,2,3,4,5,]) //3 
// getAverage([1,1,1,1,1,1,1,2]) //1



// function sum (numbers) {
//   return numbers.reduce((a, c) => a+c,0)

// }

// console.log(sum([]));//0

// console.log(sum([1, 5.2, 4, 0, -1])); // 9.2


// function makeUpperCase(str) {
//   return str.toUpperCase(str)
// }
// console.log(makeUpperCase(""));
// console.log(makeUpperCase("hello"));
// console.log(makeUpperCase("Hello"));
// console.log(makeUpperCase("HELLO"));


console.log("Hom ==================================");


function findSmallestInt(arr) {
  return Math.min(...arr)

}


console.log(findSmallestInt([78,56,232,12,8]));
console.log(findSmallestInt([78,56,232,12,18]));
console.log(findSmallestInt([78,56,232,412,228]));
console.log((findSmallestInt([78,56,232,12,0])));
console.log(findSmallestInt([1,56,232,12,8]));



