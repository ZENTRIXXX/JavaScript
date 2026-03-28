let obj = {
    ism: "Abubakr",
    age: 12,
}

Object.defineProperty(obj, "ism", {writable: false})
let flag = Object.getOwnPropertyDescriptor(obj,"ism")
console.log(flag);
obj.ism = "Muhammad"
console.log(obj);

// ==================================================

let obj2 = {
    ism: "Abubakr",
    age: 12,
}

Object.defineProperty(obj2, "ism", {enumerable: false})
let flag2 = Object.getOwnPropertyDescriptor(obj2,"ism")

console.log(flag2);

for (let key in obj){
    console.log(key);
}
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(obj2);

// ============================================

let obj3 = {
    ism: "Abubakr",
    age: 12,
}

Object.defineProperty(obj3, "ism", {configurable: false})
let flag3 = Object.getOwnPropertyDescriptor(obj3,"ism")

console.log(flag3);
delete obj3.ism
console.log(obj);


// ==============================================

let obj = {
    ism: "Ali",
    yosh: 20
}

Object.defineProperty(obj, "ism", {writable: false})
Object.defineProperty(obj, "yosh", {writable: false})
let clone = Object.getOwnPropertyDescriptors(obj)
// clone.ism = "Vali"
// clone.yosh = 25

Object.defineProperty(clone, "ism", {value: "Vali"})
Object.defineProperty(clone, "yosh", {value: 25})
console.log(clone);

// ===============================================

let obj2 = {
    ism: "Abror"
}
Object.defineProperty(obj2, "ism", {writable: false})
obj2.ism = "Azizbek"
Object.defineProperty(obj2, "ism", {value: "Azizbek"})
console.log(obj2);

// ==============================================

let obj = {
    ism: "Abdulloh",
    yosh: 13
}

// Object.defineProperty(obj, "ism", {writable: false})
// Object.defineProperty(obj, "yosh", {writable: false})

Object.defineProperties(obj, {
    ism: {configurable: false},
    yosh: {configurable: false}
})

console.log(Object.getOwnPropertyDescriptors(obj));

// 1. getOwnPropertyDescriptor - Object ning 1 ta kalitini "flag" (Bayroq) larini korish uchun kerak

// Flags
// 1. value
// 2. writable
// 3. enumerable
// 4. configurable

// getOwnPropertyDescriptors - object ning flag larini ozgartirish xolatda clone olib beradi

// defineProperty - object flag larini qiymatini ozgartirish uchun kerak (true => false)

// defineProperties - bu koplikda variantda ishlatiladi. Objectning barcha kalitlari flaglarini qiymatini ozgartirib beradi