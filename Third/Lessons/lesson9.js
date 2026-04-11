// ADVENCED FUNCTION

// 1.function declaration
// 2.function expression
// 3.arrow function
// 4.call back function
// 5.recursion function
// ====================
// // call, apply,bind

// function getName(yosh, daraja) {
//     console.log(this.ism, yosh, daraja);
// }

// getName.call({ ism: "Toshmat" }, 20, "Talaba")

// Apply
// function getData(yil, joylashuv) {
//     console.log(this.brend, yil, joylashuv);
// }

// getData.apply({ brend: "Algoritm" }, [2016, "NamDU roparasida, DXA binosi"])

// // Bind
// function getData(yil, joylashuv) {
//     console.log(this.brend, yil, joylashuv);
// }
// getData.bind({ brend: "Algoritm" }, 2016, "NamDU roparasida, DXA binosi")()

// // =========================================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function xisobla (arr){
//     let sum = arr.reduce((acc,curr) => acc + curr, 0)
//     console.log(sum / arr.length);

// }

// xisobla.call({ len: arr.length }, arr)    

// const reverseSeq = (n) => {
//     let arr = []
//     for (let a = 1; a <= n; a++) {
//         arr.push(a)
//     }
//     return arr.reverse()
// }

// console.log(reverseSeq(10));



// function addLength(str) {
//   return str.split(" ").map(word => word + " " + word.length);
// }

// console.log(addLength("apple ban")); // ["apple 5", "ban 3"]

// console.log(addLength("you will win")); // ["you 3", "will 4", "win 3"]




function arro (stt) {
    let arr = stt.split(" ")
    console.log(arr);
    
}

arro("robin ss kk aaa")