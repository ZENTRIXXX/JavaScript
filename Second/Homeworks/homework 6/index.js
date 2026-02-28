
// find
let words1 = ["apple", "banana", "car", "dog"];
let find1 = words1.find((v) => v.length === 5);
console.log(find1); 

let nums1 = [3, 7, 12, 5, 20];
let find2 = nums1.find((v) => v > 10);
console.log(find2); 


// findindex

let words2 = ["apple", "car", "banana", "dog"];
let findIndex1 = words2.findIndex((v) => v.length === 3);
console.log(findIndex1); 

let nums2 = [5, 8, -3, 10];
let findIndex2 = nums2.findIndex((v) => v < 0);
console.log(findIndex2); 


// find lastindex

let nums3 = [1, 4, 7, 10, 3, 8];
let lastIndex1 = nums3.findLastIndex((v) => v % 2 === 0);
console.log(lastIndex1); 

let words3 = ["cat", "apple", "dog", "banana", "car"];
let lastIndex2 = words3.findLastIndex((v) => v.length === 3);
console.log(lastIndex2); 


// sort

let nums4 = [7, 3, 10, 1, 5];
nums4.sort((a, b) => a - b);
console.log(nums4);

let fruits = ["Olma", "Uzum", "Anor", "Gilos"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);


// every

let nums5 = [1, 5, 10];
let every1 = nums5.every((v) => v > 0);
console.log(every1); 

let data1 = ["a", "b", "c"];
let every2 = data1.every((v) => typeof v === "string");
console.log(every2); 


// some

let nums6 = [5, 8, 0, 3];
let some1 = nums6.some((v) => v === 0);
console.log(some1); 

let data2 = [true, true, false];
let some2 = data2.some((v) => v === false);
console.log(some2); 
