// let mapObj = new Map()
// mapObj.set("name", "Ali")
// mapObj.set("age", 20)
// mapObj.set("status", "Talaba")
// console.log(mapObj.get("age"));
// console.log(mapObj.has("name"));
// console.log(mapObj.has("status"));
// console.log(mapObj.size);
// mapObj.delete("age")
// // mapObj.clear()
// // console.log(mapObj);

// let arr = ["Olma", "Uzum", "Nok"]
// let mapObj = new Map()
// arr.forEach((value,index) => {
//     mapObj.set(index,value)
// })
// console.log(mapObj.get(0));


let setArr = new Set()
setArr.add(1)
setArr.add(2)
setArr.add(3)
setArr.add(1)
setArr.add(4)
setArr.add(5)
setArr.add(1)
console.log(setArr);


let arr = [1,2,3,1,4,5,1,6,7,1]
let setArr2 = new Set(arr)
console.log(Array.from(setArr2));

