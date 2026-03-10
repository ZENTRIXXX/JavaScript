let obj = {
    ism: "Abubakr",
    status: "Boxchada oqiydi"
}


let jsonData = JSON.stringify(obj, {}, 4)
console.log("Backend ga yuborish uchun tayyor");
console.log(jsonData);
console.log("\n");
console.log("\n");
let parseData = JSON.parse(jsonData)
console.log("Backend dan kelgan json ni xaqiqiy data ga otkazildi");
console.log(parseData);
