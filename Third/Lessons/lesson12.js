// let obj = {
//     ism: "Algoritm",
//     guruh: "J / 9:30-11:30 / JS",
//     soni: 7
// }

// Object.preventExtensions(obj)

// obj.imtixon_soni = "7-aprel"

// console.log(Object.isExtensible(obj));


// Object.seal(obj)

// obj.ustoz = "Foziljon"
// obj.ism = "Oxford"
// delete obj.ism

// console.log(Object.isSealed(obj));


// Object.freeze(obj)

// obj.ism = "Oxford"
// obj.ustoz = "Fozil"
// delete obj.guruh

// console.log(obj);

// console.log(Object.isFrozen(obj));

// let newIsm = "Algoritm ta'lim"
// if (obj.ism.length < newIsm.length){
//     obj.ism = newIsm

// }
// console.log(obj);  


// let obj = {
//     ism: "Algoritm",
//     guruh: "J / 9:30-11:30 / JS",
//     soni: 7,
//     get getSetValue() {
//         return this.ism
//     },
//     set getSetValue(prop) {
//         if (prop.length > this.ism.length) {
//             obj.ism = prop

//         }
//     }
// }

// obj.getSetValue = "Algoritm ta'lim"
// console.log(obj.getSetValue);
 
function sayHello( name, city, state ) {
    console.log(`Hello ${name.join(" ")}! Welcome to ${city} ${state}!`);
    
}
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois')