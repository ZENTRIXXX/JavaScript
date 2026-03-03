// let obj = {
//     id:1,
//     name: "EShmat",
//     age: 30,
//     child:{
//         id: 2,
//         name: "Toshmat",
//         age: 5,
//     }
// }
// let {name:pName, age:pAge, child:{name:chName, age:chAge}} = obj

// console.log(pName);
// console.log(pAge);
// console.log("=======");
// console.log(chName);
// console.log(chAge);



// function getSum({id:pId, name:pName, child: {id:chId, name:chName}}) {
//     console.log(pId, pName);
//     console.log(chId, chName);
// }

// getSum({id: 1, name:"Ali", child:{id:2, name:"Vali"}})

// let obj1 = {id: 1, name: "Ali"}
// let obj2 = {age: 20, location: "Namangan Chust"}

// // let obj = Object.assign(obj1, obj2)
// // console.log(obj);

// let obj = {...obj1, obj2}
// console.log(obj);

// let arr1 = [1,2,3,4,5]
// let arr2 = [1,2,3,4,5]

// let arr = [...arr1, ...arr2]
// console.log(arr);

// function data(...d){
//     let summa = d.reduce((a,c) => a+c,0)
//     console.log(summa);
// }

// data(1, 2, 3, 4, 5, 6, 7, 8, 9)


// ============================

let arr1 = [4, 7, 5, 1]
let arr2 = [10, 20, 15]
let arr = [...arr1, ...arr2]

function hisobla(a,b, ...value){
    let c = a+b
    let summa = value.reduce((a,c) => a+c,0)
    console.log(summa / c);
      
}

hisobla(...arr)