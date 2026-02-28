
// for(let i= 1; i<11; i++){
//     if (i % 2 === 0) {
//         console.log(i + " - bu juft son");
//     } else {
//         console.log(i + " - bu toq son");
//     }
    
// }

// let a = 0;

// while (a++, a < 11) {
//     if (a % 2 === 0) {
//         console.log(a + " - bu juft son");
//     } else {
//         console.log(a + " - bu toq son");
//     }
// }

// let numz = 0;
// do{
//     if (numz % 2 === 0) {
//         console.log(numz + " - bu juft son");
//     } else {
//         console.log(numz + " - bu toq son");
//     }
// } while (numz++,numz<11);

// let data = [
//     {id:1, ism:"Abdukomil", yosh: 12},
//     {id:2, ism:"Abdulloh",yosh:12},
//     {id:3, ism:"Abrorbek", yosh: 14},
//     {id:4, ism:"Azizbek", yosh: 13},
//     {id:5, ism:"Abubakr", yosh:12},
//     {id:6, ism:"Hojiakbar", yosh:13},
//     {id:7, ism:"Osimbek", yosh: 14},
//     {id:8, ism:"Madinabonu", yosh: 12},
// ];

// let newData = data.filter(item => item.yosh >= 13);

// console.log(newData);

let data = [
    {id:1, ism:"Abdukomil", yosh: 12},
    {id:2, ism:"Abdulloh",yosh:12},
    {id:3, ism:"Abrorbek", yosh: 14},
    {id:4, ism:"Azizbek", yosh: 13},
    {id:5, ism:"Abubakr", yosh:12},
    {id:6, ism:"Hojiakbar", yosh:13},
    {id:7, ism:"Osimbek", yosh: 14},
    {id:8, ism:"Madinabonu", yosh: 12},
];

let newData = data.filter(value => value.ism.length >= 8);

console.log(newData);

let arr = [1,5,24,7,53,2,45,96,43,23,15,62,34,55]
 

let newArr = arr.map((value) => {
    if (value % 2 === 0) {
        return value / 2;
    }
    return value;
});

console.log(newArr);







let obj = {
    ism: "Macbook",
    narxi: "1000",
    soni: 20,
}

let total = 1;

for (let key in obj) {
    if (!isNaN(obj[key])) {
        total *= obj[key];
    }
}

console.log(total);