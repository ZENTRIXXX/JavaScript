let date = new Date()

// let d = date.toISOString()
// d = d.split("T")[0]
// let [year,month,day] = d.split("-")
// console.log(`${day} / ${month} / ${year}`);

// let d = date.toUTCString()
// let arr = d.split(" ")

// let day = arr[1]
// let month = arr[2]
// let year = arr[3]
// console.log(`bugun ${day} - ${month} , ${year} -yil, Soat = ${d.toLocaleDateString} `);

let data = JSON.stringify(date)
data = data.slice(1,11).replaceAll("-", ".").split(".").reverse().join(".")
let a = date.toTimeString();
a = a.slice(0,5)
console.log(`bugun ozbekistonda sana ${data}, soat = ${a}`);
