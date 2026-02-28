// 1
let user = { name: "Ali", age: 18 };
let copyUser = Object.assign({}, user);
console.log(copyUser);

// 2
let a = { x: 10 };
let b = { y: 20 };
let result = Object.assign({}, a, b);
console.log(result);



// 2️ structuredClone()

// 1
let car = { model: "BMW", year: 2020 };
let copyCar = structuredClone(car);
console.log(copyCar);

// 2
let student = {
  name: "Aziz",
  marks: { math: 90, english: 85 }
};
let copyStudent = structuredClone(student);
console.log(copyStudent);



// 3️ for in

// 1
let products1 = { non: 3000, sut: 7000, yog: 15000 };
let sum1 = 0;
for (let key in products1) {
  sum1 += products1[key];
}
console.log(sum1);

// 2
let products2 = { olma: 5000, banan: 8000 };
let sum2 = 0;
for (let key in products2) {
  sum2 += products2[key];
}
console.log(sum2);

// 3
let products3 = { shakar: 6000, tuz: 2000, choy: 12000 };
let sum3 = 0;
for (let key in products3) {
  sum3 += products3[key];
}
console.log(sum3);

// 4
let products4 = { daftar: 4000, ruchka: 2000 };
let sum4 = 0;
for (let key in products4) {
  sum4 += products4[key];
}
console.log(sum4);

// 5
let products5 = { telefon: 1500000, quloqchin: 200000 };
let sum5 = 0;
for (let key in products5) {
  sum5 += products5[key];
}
console.log(sum5);
