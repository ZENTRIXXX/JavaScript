// function removeDublicate(arr){
//   return Array.from(new Set(arr))
// }

// console.log(removeDublicate([1, 1, 2]));
// console.log(removeDublicate([1, 2, 1, 1, 3, 2]));

console.log("======================================================  1");

// function getASCII(c) {
//     let arr = c.charCodeAt()
//     return arr
// }

// console.log(getASCII("A")); // 65
// console.log(getASCII(" ")); // 32
// console.log(getASCII("!")); // 33

console.log("======================================================  2");

// function printArray(array) {
//     let a = array.toString()
//     return a
// }

// console.log(printArray([2, 4, 5, 2])); // "2,4,5,2"
// console.log(printArray([2.0, 4.2, 5.1, 2.2])); // "2,4.2,5.1,2.2"
// console.log(printArray(["2", "4", "5", "2"])); // "2,4,5,2"
// console.log(printArray([true, false])); // 'true,false'

console.log("======================================================  3");

// function positiveSum(arr) {
//     return arr.reduce((acc,cur)=>acc += (cur > 0 ? cur : 0 ), 0)

// }

// console.log(positiveSum([1, 2, 3, 4, 5])); // 15
// console.log(positiveSum([1, -2, 3, 4, 5])); // 13
// console.log(positiveSum([])); // 0
// console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
// console.log(positiveSum([-1, 2, 3, 4, -5])); // 9

console.log("======================================================  4");

// function reverse(string) {
//     return string.split(" ").reverse().join(" ")
// }

// console.log(reverse("I am an expert at this")); // "this at expert an am I"
// console.log(reverse("This is so easy")); // "easy so is This"
// console.log(reverse("no one cares")); // "cares one no"
// console.log(reverse("")); // ""
// console.log(reverse("CodeWars")); // "CodeWars"

console.log("======================================================  5");

// function ensureQuestion(s) {
//     return s.at(-1) === "?" ? s : s + "?"
// }
// console.log(ensureQuestion("")); // "?"
// console.log(ensureQuestion("Yes")); // "Yes?"
// console.log(ensureQuestion("No?")); // "No?"

console.log("======================================================  7");

// function squareSum(numbers) {
//     let sum = 0
//     numbers.forEach(go => sum += go * go); 
//     return sum
// }

// console.log(squareSum([1, 2])); // 5
// console.log(squareSum([0, 3, 4, 5])); // 50
// console.log(squareSum([])); // 0


console.log("======================================================  8");

function doubleChar(str) {
    let newStr = ""
    for (let s of str) newStr += s +s 
    return newStr
}

console.log(doubleChar("abcd")); // "aabbccdd"
console.log(doubleChar("Adidas")); // "AAddiiddaass"
console.log(doubleChar("1337")); // "11333377"
console.log(doubleChar("illuminati")); // "iilllluummiinnaattii"
console.log(doubleChar("123456")); // "112233445566"
console.log(doubleChar("%^&*(")); //  "%%^^&&**(("
