
// CREATE

let arr = []

let add = (data) => {
    arr.push(data)
}

// 1
add({
    id: 1,
    ism: "Xojakbar",
    familiya: "Oqilov",
    yosh: 13,
    manzil: "Hamza",
    tel_raqam: "+998 88 622 77 37"
})

// 2
add({
    id: 2,
    ism: "Abdulloh",
    familiya: "Mamadaliyev",
    yosh: 13,
    manzil: "G'uncha",
    tel_raqam: "+998 77 326 00 18"
})

// 3
add({
    id: 3,
    ism: "Abdukomil",
    familiya: "Ahmadaliyev",
    yosh: 12,
    manzil: "Lola",
    tel_raqam: "+998 77 190 48 75"
})

// 4
add({
    id: 4,
    ism: "Abrorbek",
    familiya: "Ibragimov",
    yosh: 15,
    manzil: "Pahlavon",
    tel_raqam: "+998 77 777 55 54"
})

// 5
add({
    id: 5,
    ism: "Osimtoy",
    familiya: "Nasimov",
    yosh: 14,
    manzil: "Hamza",
    tel_raqam: "+998 77 008 17 67"
})


// 
// REA
// 

let read1 = (data) => {
    return data.filter(obj => obj.yosh < 13)
}
console.log( read1(arr))


let read2 = (data) => {
    return data.filter(obj => obj.manzil === "Hamza")
}
console.log(read2(arr))



let read3 = (data) => {
    return data.filter(obj => obj.ism === "Abdulloh")
}
console.log( read3(arr))


let read4 = (data) => {
    return data.sort((a, b) => a.yosh - b.yosh)
}
console.log( read4(arr))


let read5 = (data) => {
    return data.sort((a, b) => a.ism.localeCompare(b.ism))
}
console.log( read5(arr))