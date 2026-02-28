// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]



// // let sum = 0
// // arr.forEach((value) =>  (sum += value))
// // console.log(sum);

// // reduce

// // arr.reduce("callBack", "InitialValue")

// // let sum = arr.reduce((acc, cur) => acc+cur, 0)
// // console.log(sum);
// // console.log(arr.reduce((a, b) => a +b, 0));

// let arr = [ 
//     {id: 1, ism: "Adukomil", oyligi: 1000},
//     {id: 2, ism: "Abror", oyligi: 1500},
//     {id: 3, ism: "Azizbek", oyligi: 2000},
//     {id: 4, ism: "Abdulloh", oyligi: 3000},
//     {id: 5, ism: "Xojakbar", oyligi: 0},
//     {id: 6, ism: "Osimbek", oyligi: 4000},
//     {id: 7, ism: "Madinabonu", oyligi: 5000}
// ]

// console.log(arr.reduce((a,b)=> a+=b.oyligi, 0 ));

// let data1 = [1, 2, 3]
// let data2 = {name: "Ali"}

// console.log(Array.isArray(data1));
// console.log(Array.isArray(data2));

// let str = "Algoritm"
// console.log(Array.from(str));

// let a = 12
// let b = "Salom"
// let c = {name: "Ali"}
// let d = true
// let e = Symbol()

// console.log(Array.of(a, b, c, d, e));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let toq = arr.reduce((a, b) => {
    if (b % 2 ) {
        return a + b;
    }
    return a;
}, 0);

console.log(toq); 

