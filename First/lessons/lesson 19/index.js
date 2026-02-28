// let getName = function(num1, num2 = 0, num3 = 0,) {
//     console.log(num1 + num2+ num3);
    
// }
// getName( 1, 2)

// outerLoop: for (let i = 1; i <= 9; i++){
//     for (let j = 1; j <= 9; j++){
//         if (i === 5) break outerLoop;
//     console.log(i + "x" + j + "=" + i + j);
//     }
//     console.log("\n");
//     console.log("=========================");
//     console.log("\n");

// }

let baho1 = parseFloat(prompt("baho"))
let baho2 = parseFloat(prompt("baho"))
let baho3 = parseFloat(prompt("baho"))

// let son = (baho1+ baho2 + baho3) /3

function getResult (a, b, c) {
let son = (a + b + c) / 3
if (son >= 90) {
    console.log(" Alo");   
}
else if (son >= 70 && son < 90 ) {
    console.log("yaxshi");
}
else if (son >= 50 && son < 70){
    console.log("Qoniqarli");
}
else{
    console.log("Qoniqarsiz");
}
}

getResult(baho1, baho2, baho3)
