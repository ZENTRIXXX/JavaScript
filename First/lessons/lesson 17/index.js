// let salom = "hi";


// let user = {
//     name: "Ali",
//     [salom]: 15,
//     [Symbol("phone")]: "+998 99 123 45 67",
// };

// //for in 
// for (let key in user) {
//     console.log(key);
// }


// let parent = {
//     name: "Eshmat",
//     age: 60,
//     child: {
//         name: "Toshmat",
//         age: 40,
//         Subchild: {
//             name: "Gulmat",
//             age: 20,
//         },
//     },
// };

// //  Nested Object 

// let { name, age, child: {name: name2, Subchild: {name: name3 }}} = parent;

// // console.log(parent.name);
// console.log(name, age);
// //console.log(parent.child.name);
// console.log(name2);
// //console.log(parent.child.subChild.name);
// console.log(name3);


const obj ={
    name: "Eshmat",
    age: 20,
}

obj.name = "Ali";
obj.age = 60;

console.log(obj);

