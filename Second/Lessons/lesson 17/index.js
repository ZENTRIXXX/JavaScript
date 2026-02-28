// let obj1 = {
//     name: "Ali",
//     age: 20,
// }

// let obj2 = {
//     status: "Talaba",
//     location: "Namangan shahar"
// }

// let action = (a, b) => {
//     let obj = Object.assign(a, b)
//     return obj.age % 2 ? `${obj.age} - bu Toq son,` : `${obj.age} - bu Juft son`
// }

// console.log(action(obj1, obj2));           


let str = "A190r1tm"


let fact = (a) => {
    let matn = ""
    let raqam = ""
    for(let value of a) isNaN(value) ? (matn += value) : (raqam += value)
    return `matn = ${matn}, raqam = ${raqam}`
} 

console.log(fact(str));

