// let obj = {
//     name: "Ali",
//     age: 25
// }

// console.log(JSON.stringify(obj,["name"]));
// console.log(obj);

// const jsonString = '{"name":"Ali","age":25}';

// const obj = JSON.parse(jsonString);

// console.log(obj.name); // Ali   




// ====================================
// function getName(yosh, daraja) {
//     console.log(this.ism, yosh, daraja);
// }

// // getName()
// // getName.call({ ism: "Toshmat" }, 20, "Talaba")

// getName.apply({ism:"Toshmat"},[20, "Talaba"])

// getName.bind({ism:"Toshmat"},20, "Talaba")

// ======================================

// let obj = {
//     name:"Azizbek",
//     age:14
// }

// Object.defineProperty(obj,"name",{writable:false})

// console.log(Object.getOwnPropertyDescriptor(obj,"name"));

// let arr = [1,2,3,4,5,6,7,8,9]
// // console.log(arr.reduce((a,c)=> a+c,0));

// let newArr = arr.splice(0,4)
// console.log(newArr);
// console.log(arr);




// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout - 1");
// },1000)

// for (let i = 0; i<10;i++) {
//     console.log(i);
// }
// setTimeout(()=>{
//     console.log("setTimeout - 1"); 
// },0)
// console.log("End");

// let arr = [1,2,[3,4,[5,6,[7,8,[9,10]]]]]

// console.log(arr.flat(Infinity));


let people = [
    { id: 1, name: "Eshmat", age: 20, status: "student" },
    { id: 2, name: "Toshmat", age: 22, status: "student" },
    { id: 3, name: "Ali", age: 17, status: "oquvchi" },
    { id: 4, name: "Vali", age: 25, status: "student" },
    { id: 5, name: "Sali", age: 35, status: "Ishchi" },
]
// let students = people.filter(person => person.status === "student");

// console.log(students);


// let person = {
//   name: "Ali",
//   age: 25
// };

// let { name, age } = person;

// console.log(name); 

// // =================================

// let numbers = [10,11];

// let [a] = numbers;

// console.log(a); 


// console.log(people.sort((a, b) => a.name.localeCompare(b.name)));
// console.log(people.sort((a, b) => a.age -b.age));

// console.log(people.find(p => p.age > 20));

// console.log(people.filter(p => p.age > 20));

let arr = [3, 4];


console.log(arr.pop());

arr.unshift(1, 2);

console.log(arr); 

for (let i = 0; i < arr.length; i++) console.log(arr[i]);
