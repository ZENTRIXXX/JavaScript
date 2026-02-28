
// =========== inmutable methods =======

let arr1 = [1, 2, 3, 4];

// reduce
console.log(arr1.reduce((a, b) => a + b, 0)); 

// Array.isArray
console.log(Array.isArray(arr1))

// Array.from
console.log(Array.from("123")); 

// Array.of
console.log(Array.of(5, 6, 7));

// forEach
arr1.forEach(x => console.log(x));

// map
console.log(arr1.map(x => x * 2)); 

// filter
console.log(arr1.filter(x => x > 2));

// find
console.log(arr1.find(x => x > 2));

// findIndex
console.log(arr1.findIndex(x => x > 2)); 

// findLastIndex
console.log([1,2,3,2].findLastIndex(x => x === 2)); 

// every
console.log(arr1.every(x => x > 0)); 

// some
console.log(arr1.some(x => x > 3)); 

// flat
console.log([1,[2,3]].flat()); 

// flatMap
console.log(arr1.flatMap(x => [x, x*2]));

// at
console.log(arr1.at(-1)); 

// indexOf
console.log(arr1.indexOf(3)); 

// lastIndexOf
console.log([1,2,1].lastIndexOf(1)); 

// includes
console.log(arr1.includes(2)); 

// join
console.log(arr1.join("-")); 

// concat
console.log(arr1.concat([5,6])); 

// slice
console.log(arr1.slice(1,3)); 

// split (string method)
console.log("a,b,c".split(",")); 

console.log( arr1); 


// ================== mutable methods ========== 


let arr2 = [1, 2, 3, 4];

// sort
arr2.sort((a,b) => b-a);
console.log( arr2);

// fill
arr2.fill(0, 1, 3);
console.log( arr2);

// copyWithin
arr2 = [1,2,3,4];
arr2.copyWithin(1,2);
console.log( arr2);

// push
arr2.push(5);
console.log( arr2);

// pop
arr2.pop();
console.log( arr2);

// unshift
arr2.unshift(0);
console.log( arr2);

// shift
arr2.shift();
console.log( arr2);

// splice
arr2.splice(1,1);
console.log( arr2);

// reverse
arr2.reverse();
console.log( arr2);

// length
arr2.length = 2;
console.log( arr2);

// delete
let arr3 = [1,2,3];
delete arr3[1];
console.log( arr3);
