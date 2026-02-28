let str = "Algoritm and Oxford"

console.log(str.slice(9, 12));

console.log(str.slice(str.length - 5));

console.log(str.slice(-5));

console.log(str.substring(-1)); // manfiy qiymat qabul qilmaydi

// ["A", "L", ]

console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split("and"));

console.log("   Salom   ".trim(), "Alik");
console.log("   Salom   ".trimStart(), "Alik");    
console.log("   Salom   ".trimEnd()," Alik");