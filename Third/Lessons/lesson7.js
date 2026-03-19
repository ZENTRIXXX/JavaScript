// let wmap = new WeakMap()

// let obj = {}
// wmap.set(obj,"Osimbek")
// console.log(wmap.get(obj));
// console.log(wmap.get(obj));

// // ================================================

// let wset = new WeakSet()

// let obj1 = {name:"Ali"}
// let obj2 = {name:"Vali"}
// wset.add(obj1)
// wset.add(obj2)
// console.log(wset.has(obj1));
// console.log(wset.has(obj2));
// wset.delete(obj1)
// console.log(wset.has(obj1));
// console.log(wset.has(obj2));

let obj = {
  olma: 100,
  uzum: 120,
  nok: 90,
  anor: 150
}
let map = new Map()
for(let key in obj){
    map.set(key,obj[key])
}
console.log(map);
