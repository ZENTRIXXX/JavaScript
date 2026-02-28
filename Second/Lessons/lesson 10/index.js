// let arr = ["Algoritm", "Oxford", "Oxford (Kosonsoy filial)"]

// //  1
// let sum = 0
// for (let str of arr) {
//     sum += str.length
// }
// console.log(sum);


// // 2 

// console.log(arr.join("").length);

// let arr = [1, 3.2, 5, 4, 6.3, 7, 9, 1.4, 2.9]

// let sum = 0
// for (let num of arr){
//     if (!Number.isInteger(num)){
//         sum+=num
//     }
//     // if (num.toString().includes(".")){
//     //     sum += num
//     // }
// }
// console.log(sum);


let arr = [true, "20", { name: "Eshmat" }, false, null, undefined, 3.9, 10]
let sum = 0
for (let value of arr) {
    if (!isNaN(parseFloat(value))) {
        sum += parseFloat(value)
    }
}
console.log(sum);
