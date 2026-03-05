// let obj = {
//     id:1,
//     ism:"Ali",
//     child: {
//         id:2,
//         ism:"Vali"
//     }
// }
// let {
//     ism,child: {ism:ism2}
// } = obj
// console.log(ism, ism2);

// let arr = [1,2, [3,4]]
// let [a,b,[c,d]] =arr
// console.log(a,b,c,d);

// function getSum(obj){
//     console.log(
//         obj.a + obj.b
//     );    
// }


// function getSum(obj) {

//     console.log(obj.a + obj.b);
// }
// getSum({a:100,b:50})


// ============================================

// let arr1 = [2, 3, 1, 5]
// let arr2 = [9, 5, 7, 3]



// let summa = (a,b) => {
//     let arr = [...arr1, ...arr2]
//     let sum = arr.reduce((acc, curr)=>acc+curr,0) 
//     let result = [arr.length, sum]
//     console.log(result);
    
// }
// summa(arr1, arr2)

// ==================================================

// function hisobla(a,b,c,d,...arr){
//     let summa1 = a+b+c+d
//     let summa2 = arr.reduce((acc, curr)=>acc+curr,0)
//     console.log(summa2 / summa1);
    
// }

// hisobla(1, 2, 3, 4, 5, 6, 7, 8, 9)

//=====================================================

let obj = {
    id:1,
    name: "Macbook",
    price: 1000
}
 

let arr = [9, 1, 5, 3, 7,9]

let action = function(ob, ar) {
    let bol = parseInt(ob.price / ar.length)

    if (bol % 2) console.log(bol, "Bu juft son");
     else console.log(bol, "Bu toq son");
    
}

action(obj, arr)