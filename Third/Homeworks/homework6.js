function findAverage(array) {
  if (array.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(findAverage([1,1,1])); 
console.log(findAverage([1,2,3])); 
console.log(findAverage([1,2,3,4])); 


console.log("======================");


function sum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}
  
console.log(sum([])); 
console.log(sum([1, 5.2, 4, 0, -1])); 


// ==================================================

function findAveragee(array){
  let sum = array.reduce((acc,curr) => acc + curr, 0)
  return sum / array.length
}

console.log(findAveragee([1,1,1])); 
console.log(findAveragee([1,2,3])); 
console.log(findAveragee([1,2,3,4])); 
