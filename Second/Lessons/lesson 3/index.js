let str = "Algoritm"

// console.log(str.length);
console.log(str[-1]);
console.log(str.charAt(-1));
// ========================
console.log(str.at(-1));

console.log("A".charCodeAt());
console.log(str.charCodeAt(1));
console.log("A".charCodeAt().toString(2));
console.log(str.at(-1 ).charCodeAt());

console.log("Salom" + "Alik");
console.log("Assalomu ".concat("alaykum", " o'quvchilar"));


console.log(str.includes("0"));

console.log(str.startsWith("Al"));
console.log(str.endsWith("tm"));

console.log(str.search("A"));
console.log(str.search(/a/i));

console.log(str.indexOf("r"));
console.log(str.indexOf("W"));

console.log(str.lastIndexOf("r"));
console.log(str.lastIndexOf("w"));

console.log(str.indexOf("l"));
console.log(str.lastIndexOf("(l"));
