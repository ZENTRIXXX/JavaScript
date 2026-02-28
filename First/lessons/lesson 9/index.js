
// let kopaytma = 1;
// let yigindi = 0;

// for (let num = 1; num <= 10; num++) {
//     num % 2 === 1;
//     num % 2 === 0;
//     kopaytma *= num;

// }


// console.log(kopaytma);


let tk = 1;
let jk = 1;
let ty = 0;
let jy = 0;

for (let num = 1; num <= 10; num++) {
    if (num % 2 === 1) {
        tk *= num;
        ty += num;
    }else {
        jk *= num;
        jy += num;
    }
}

console.log((tk + jk) / (ty - jy));
