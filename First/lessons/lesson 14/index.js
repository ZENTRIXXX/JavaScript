// //  Object

// let obj = {};
// let obj2 = Object();
// let obj3 = new Object(); //Constructor --

// //=================================-
// let person = {
//     name: "Azizbek"
//     age:  12,
//     adress: "Namangan shahar"
// }


// let a = "type";


// let obj = {
//     name: "Olma",
//     color: "REd",
//     kg: 1,
//     type: "5 yulduz",
// };

// console.log(obj[a]);  //dinamik ✅

// let obj = {
//     name: "Toshmat",
//     age: 20,
// }


// //  Object assign()

// let cloneObj = Object.assign({}, obj)

// cloneObj.name = "Eshmat";

// console.log(obj);
// console.log(cloneObj);

let obj1 = {id: 5, name: "Ali"};
let obj2 = {age: 20, address: "Namangan", name: "Vali"};
let obj3 = {status: "Talaba", gender: "Male", name: "SAlim"};

let fullObj = Object.assign(obj1, obj2, obj3);

console.log(fullObj);













