// forEach()


// // let arr = ["olma", "uzum", "shaftoli"]
// let arr = [1, 2, "3", 4, 5, "6", 7, 8, 9]

// // forEach
// // arr.forEach(Callback Function)
// let sum = 0
// arr.forEach((value) => {
//     sum += value
// })
// console.log(sum);

// // map() ---------------------------
// // arr.map(callBack Function)
// let newArr = arr.map((value) => {
//     return value * value
// })
// console.log(NewArr);

// let arr = [1, 2, 3, 4]

// let newArr = arr.map((value,index, a) => {
//     if (index % 2) return value ** 2
//     return value
// })
// console.log(newArr);



// filter() ----------------------------

// arr.filter(callback Function)
// let newArr = arr.filter((value) => value % 2)
// console.log(newArr);                                              

let arr = ["Olma", "Uzum", "Nok"]

let newArr = arr.filter((value) => value.length >= 4)
console.log(newArr);
