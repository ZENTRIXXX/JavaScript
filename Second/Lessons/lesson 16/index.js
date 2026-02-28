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

add(obj1)
add(obj2)
add(obj3)
add(obj4)
add(obj5)
add(obj6)

const update = (data) => {
    let newArr = data.map((obj) => {
        if (obj.id === 1){
            obj.ism = "Abubakr"
            obj.familiya = "Bahodirov"
            obj.manzil = "Lola"
            obj.tel_raqam = "+998 99 111 22 33"
        }
        return obj
    })
    return newArr
}

console.log(update(arr));


// delete  

const deleteUser =(data,userId) => {

    let newArr = data.filter((odam) => odam.id !== userId)
    return newArr
}
// console.log(deleteUser(arr, 6));



// const telArr = update(arr);

// const tel = telArr.filter((obj) =>
//   obj.tel_raqam.startsWith("+998 99")
// );

// console.log(tel);



// const read1 = ((obj) => {
//     let newarr = obj.filter((value) => {
//         if (value.tel_raqam.slice(15)%2 === 0) return obj
//     })
//     return newarr
// })
// console.log(read1(arr));

const ev = ((obj) => {
    let newArr = obj.filter((value) => (value.familiya.endsWith("ev")))
    return newArr
})
console.log(ev(arr));
