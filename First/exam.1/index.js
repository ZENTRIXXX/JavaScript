// 1. 
let a = "5"
let b = 2
console.log( a + b);
console.log(a * b);

// 2.
console.log("============================================================");
let num = 7
if (num % 2 ===1){
    console.log("toq ");
} else {
    console.log("juft");
    
}
    
// 3.
console.log("============================================================");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        console.log(i," - toq");
    }
} 

// 4. 

console.log("============================================================");


let l = 4
let k = 9

function max(a, b) {
    if(a < b) {
        console.log(b,"katta");
        
    } else{
        console.log(a, "katta");
        
    }
};
max(4,9);

// 5.
console.log("============================================================");

let username = ""
let defoultName = "Guest"
console.log(username || defoultName);
console.log(username ?? defoultName);

// 7. 
console.log("============================================================");


let user = {
    name: "Ali",
    age: 20
}

let key ="age"

console.log(user[key]);

// 8. 
console.log("============================================================");

let obj1 = {a: 1,b:2};
let obj2 = Object.assign({},obj1);
obj2.a = 100
console.log(obj1);
console.log(obj2);

// 9.
console.log("============================================================");

function User(name, age){
    this.name = name
}
let ul = new User("Ali",20)
console.log(ul.name);

// 10.

console.log("============================================================");

function createUser(){
    let user = {name: "Ali"}
    return user
}
let x = createUser()
x = null

createUser()