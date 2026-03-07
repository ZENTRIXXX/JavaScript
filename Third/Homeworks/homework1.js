let arr =[
 {name: "Telefon", price: 200},
 {name: "Laptop", price: 900},
 {name: "Sichqoncha", price: 50},
 {name: "Monitor", price: 300}
]

let mahsulot = (data) => {
    let obj = {}
    let newArr = data.filter((obj) => obj.price > 200)
    let names = newArr.map((obj) => obj.name)
    obj.names = names
    let minPriceArr = data.filter((obj) => obj.price <= 200)
    let totalPrice = minPriceArr.reduce((acc,curr) => acc + curr.price, 0)
    obj.totalPrice=totalPrice
    return obj
}

console.log(mahsulot(arr));

let str = "javascript dasturlash"

let analiz = function(data){
    let arr = data.split("")
    let unliHarflar = ["a", "e", "i", "u", "o"]
    let count = arr.filter((s) => unliHarflar.includes(s)).length
    let upper = data.toUpperCase()
    return {vowels: arr, count,upper}
}

console.log(analiz(str));
