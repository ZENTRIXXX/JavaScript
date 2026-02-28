let str = "Men Algoritm IT markazida tahsil olaman"

// console.log(str.lastIndexOf("n") - str.indexOf("n"));

// let str = "A1g0r1tm"
// let s = ""
// let n = ""

// for (let v of str){
//     if(v !== v.toUpperCase() || v !== v.toLowerCase()) {
//         s += v;
//     }else{
//         n += v;
//     }
// };


// console.log(s,n);


// let count = 0
// for (let c of str.toLowerCase()){
//     if (c === "a") {
//         ++count
//     }
// }
// console.log(count);

let newStr = str.slice(4,12).concat(str.slice(23,26),str.slice(26))

console.log(newStr);

