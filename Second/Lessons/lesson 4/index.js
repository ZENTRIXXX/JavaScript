let str = "Men Algoritmda oqiyman"
console.log(str.slice(4, 12).length);

if (str.length % 2 ) {
    console.log(str.length,"bu toq");
} else {
    console.log(str.length,"bu juft");

}


let str1 = "O'zbekiston"
let str2 = "Da yashayman"

console.log(str1.concat(str2).indexOf("n"));
console.log(str1.concat(str2).lastIndexOf("n"));

let a = "+7 998 90 111 22 33"
let b = "998 99 444 55 66"

function raqami(raqam1,raqam2) {
  if (raqam1.startsWith("998") && raqam2.startsWith("998")){
    console.log("Ozbekiston raqami");
  } else {
    console.log("Ozbekiston raqami emas");
  }
}

raqami(a, b);

