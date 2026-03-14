let products = new Map([
  ["olma", 80],
  ["anor", 120],
  ["uzum", 150],
  ["banan", 90]
]);

let newProducts = new Map()
products.forEach((value,key) => {
    if(value > 100){
        let sum = value - value * 0.1
        newProducts.set(key,sum)
    }else newProducts.set(key,value)
})
console.log(newProducts);

// =====================================================================
let numbers = [3, 4, 7, 4, 10, 7, 12, 3, 15];
let newNumbers = new Set(numbers)
let newArr = Array.from(newNumbers).filter((num) => !(num % 2))
console.log(new Set(newArr));
