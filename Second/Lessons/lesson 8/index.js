// Array 

// let arr1 = [];
// let arr2 = Array();
// let arr3 = new Array();  ❌

// let arr = ["Olma", "Nok"]f

// let arr  = []
// arr[0] = "Olma"
// arr[1] = "Uzum"
// arr[3] = "Nok"

// console.log(arr);

// let arr = Array(5,2)
// // arr[1] = "Oxford";
// // arr[3] = "Algoritm";
// console.log(arr);

// let arr2 = Array("");
// console.log(arr2);



// let arr = ["Olma", "Uzum", "Olcha", "Gilos"];

// // for, while, do while, for of

// for (let i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log("=======================");

// let j = 0 
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++
// }

// console.log("======================");
// let k = 0
// do {
//     console.log(arr[k]);
//     k++
// }while(k < arr.length)

// console.log("=======================");
// for (let value of arr){
//     console.log(value);
    
// }

// let nestedArr = [
//     ["uzum", 2, 3],
//     [4, "olma", 6],
//     [7, 8, "nok"],
// ]

// let sum = 0
// for(let arr of nestedArr){
//     for(let value of arr){
//         if (typeof(value) == "number"){
//             sum += value
//         }
//     }
// }
// console.log(sum);

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("============");
}
