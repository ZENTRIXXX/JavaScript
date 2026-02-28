let a1 = { name: "Ali" };
let b1 = { age: 20 };
Object.assign(a1, b1);
console.log(a1);

let a2 = { x: 5 };
let b2 = { y: 10 };
Object.assign(a2, b2);
console.log(a2);

let car = { brand: "BMW" };
let info = { year: 2020 };
Object.assign(car, info);
console.log(car);

let user = { login: "admin" };
let pass = { password: "1234" };
Object.assign(user, pass);
console.log(user);

let a3 = { one: 1 };
let b3 = { two: 2 };
let c3 = { three: 3 };
Object.assign(a3, b3, c3);
console.log(a3);


// 2

let obj1 = { a: 1 };
let copy1 = Object.assign({}, obj1);
console.log(copy1);

let user1 = { name: "Aziz" };
let copy2 = Object.assign({}, user1);
console.log(copy2);

let phone = { model: "iPhone" };
let phoneCopy = Object.assign({}, phone);
console.log(phoneCopy);

let data = { id: 10 };
let dataCopy = Object.assign({}, data);
console.log(dataCopy);

let settings = { darkMode: true };
let settingsCopy = Object.assign({}, settings);
console.log(settingsCopy);
