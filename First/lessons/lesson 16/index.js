// let parent ={
//     id: 1,
//     name: "Ali",
//     age: 40,
//     work: "Teacher",
//     getData: function () {
//         console.log(this.name);
//     },
// };

// let cloneObj = parent;

// parent = null;

// cloneObj.getData();


//  Constructor Function

function Shablon(name, age) {
    this.name = name,
    this.age = age,
}

let obj1 = new Shablon("Eshmat", 20);
let obj2 = new Shablon("Toshmat", 25);

console.log(obj1);
console.log(obj2);