// let nestedArr = [1, 2, [3, 4], [[[5]]], [[6, 7], [8, 9]], 10]
// let arr1 = nestedArr.flat(2)
// let arr2 = nestedArr(Infinity)

// console.log(arr1);
// console.log(arr2);


// let nestedArr = [1, 2, [3, 4], [[[5]]], [[6, 7], [8, 9]], 10]

// let newArr = nestedArr.flatMap((value)=> typeof value == "number" ? value ** 2 : value)
// console.log(newArr);


// let arr = ["Olma","Uzum","Nok","Olcha","Gilos"]

// // copyWithin("Target","StartIndex","EndIndex")
// arr.copyWithin(0,3)

// console.log(arr);
// let arr = Array(2)
// let newArr = arr.fill("Salom")
// console.log(newArr);

// let arr = [
//     { id: 1, ism: "Eshmat", yosh: 20 },
//     { id: 2, ism: "Toshmat", yosh: 22 },
//     { id: 3, ism: "Abdukomil", yosh: 12 },
//     { id: 4, ism: "Gulmat", yosh: 18 },
//     { id: 5, ism: "Urgat", yosh: 10 }
// ]

// let newArr = arr.filter((value) => value.arr =<  18)

// console.log(newArr);


let arr = Array(10)
let newArr = arr.fill(5)
let yigindi = 0
for ( value of newArr){
    yigindi+=value
}

console.log(yigindi);


let arr1 = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]
arr1.copyWithin(0,5)
console.log(arr1);


