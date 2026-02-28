// CRUD

// Create , Read, Update, Delete

// =============================

// Create


let arr = []

let obj1 = {
    id: 1,
    ism: "Xojakbar",
    familiya: "Oqilov",
    yosh: 13,
    manzil: "Hamza",
    tel_raqam: "+998 88 622 77 37",
};
let obj2 = {
    id: 2,
    ism: "Abdulloh",
    familiya: "Mamadaliyev",
    yosh: 13,
    manzil: "G'uncha",
    tel_raqam: "+998 77 326 00 18",
};
let obj3 = {
    id: 3,
    ism: "Abdukomil",
    familiya: "Ahmadaliyev",
    yosh: 12,
    manzil: "Lola",
    tel_raqam: "+998 77 190 48 75",
};
let obj4 = {
    id: 4,
    ism: "Abrorbek",
    familiya: "Ibragimov",
    yosh: 15,
    manzil: "Pahlavon",
    tel_raqam: "+998 77 777 55 54",
};
let obj5 = {
    id: 5,
    ism: "Osimtoy",
    familiya: "Nasimov",
    yosh: 14,
    manzil: "Hamza",
    tel_raqam: "+998 77 008 17 67",
};
let obj6 = {
    id: 6,
    ism: "Azizbek",
    familiya: "Kerezov",
    yosh: 14,
    manzil: "Paxtakor",
    tel_raqam: "+998 99 645 82 87",
};



let add = (data) => {
    arr.push(data)
}

add(obj6)
add(obj5)
add(obj4)
add(obj3)
add(obj2)
add(obj1)
// console.log(arr);


// let read = (data) => {
//     let newArr = data.filter((obj) => {
//         if (obj.yosh <= 13) return obj
//     })
//     return newArr
// }

// console.log(read(arr));


// let read = (data) => {
//     let newArr = data.filter((obj) => obj.manzil === "Hamza")
//     return newArr
// }
// console.log(read(arr));


// let read = (data) => {
//     let newArr = data.filter((obj) => obj.manzil === "Hamza")
//     return newArr
// }
// console.log(read(arr));

let read = (data) => {
    let newArr = data.sort((a,b) => a.ism.localeCompare(b.ism))
    return newArr
}
console.log(read(arr));