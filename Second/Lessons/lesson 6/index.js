let num = 2026;
// toString(num)
// '${num}'
// "" + num 
// num.toString();
console.log(num.toString.length);

let str1 = "Men O'zbekistonlikman";
console.log(str1.toUpperCase());

let str2 = "MEN O'ZBEKISTONLIKMAN"
console.log(str2.toLowerCase());

let s1 = "World"
let s2 = "Hello"
console.log(s1.localeCompare(s2));
console.log("Ba".localeCompare("Bb"));

let matn = "2+5*3-10"
console.log(eval(matn));

console.log("A".charCodeAt());
console.log(String.fromCharCode(65));

console.log(String.fromCharCode(65, 66));

console.log("🌃".charCodeAt());
console.log("🤹‍♂️".charCodeAt());
console.log(String.fromCodePoint(0x1f303));

let text = String.raw`
ewetrytut
trtwte
`

console.log(text);
