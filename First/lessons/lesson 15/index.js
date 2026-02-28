// let obj = {
//     name: "Eshmat",
//     age: 40,
//     child: {
//         name: "Toshmat",
//         age: 20,
//     },
// };

// let cloneObj = structuredClone(obj);

// cloneObj.child.name = "Toshmat";

// console.log(obj);
// console.log(cloneObj);


//for in 

// let obj = {
//     id: 1,
//     name: "Ali",
//     surname: "Valiyev",
//     status: "student",
//     age: 22,
//     adress: "Tashkent",
// }

// for (let key in obj) {
//     console.log(key, "=", obj[key]);
    
// }


let sum = 1;
let laptop = {
    name: "Mac",
    price: 1000,
    chip: "M4",
    count: 5,
};

for (let key in laptop){
    if(typeof laptop[key] === "number") sum *= laptop[key];
}

console.log(sum);
