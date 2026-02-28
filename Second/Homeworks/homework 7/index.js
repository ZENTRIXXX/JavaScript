// 1. flat()
let nestedArr = [1, 2, [3, 4], [[[5]]], 6]
let flatArr = nestedArr.flat(Infinity)
console.log(flatArr)


// 2. flatMap()
let arrFlatMap = [1, 2, 3, 4]
let flatMapArr = arrFlatMap.flatMap(value => value * 2)
console.log(flatMapArr)


// 3. copyWithin()
let fruits = ["Olma", "Uzum", "Nok", "Olcha", "Gilos"]
fruits.copyWithin(0, 3)
console.log(fruits)


// 4. fill()
let fillArr = Array(5).fill("Salom")
console.log(fillArr)


// 5. filter()
let users = [
  { ism: "Eshmat", yosh: 20 },
  { ism: "Toshmat", yosh: 22 },
  { ism: "Abdukomil", yosh: 12 }
]
let filteredUsers = users.filter(user => user.yosh <= 18)
console.log(filteredUsers)


// 6. map()
let mapArr = [1, 2, 3, 4]
let mappedArr = mapArr.map(value => value ** 2)
console.log(mappedArr)


// 7. reduce()
let reduceArr = Array(10).fill(5)
let sum = reduceArr.reduce((total, value) => total + value, 0)
console.log(sum)


// 8. find()
let numbers = [5, 12, 8, 130, 44]
let found = numbers.find(value => value > 10)
console.log(found)


// 9. some()
let someArr = [3, 5, 7, 9]
let hasEven = someArr.some(value => value % 2 === 0)
console.log(hasEven)


// 10. every()
let everyArr = [2, 4, 6, 8]
let allEven = everyArr.every(value => value % 2 === 0)
console.log(allEven)

