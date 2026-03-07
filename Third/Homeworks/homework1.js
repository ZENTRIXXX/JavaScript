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
