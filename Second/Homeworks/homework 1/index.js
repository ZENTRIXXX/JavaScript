
// Optional Chaining  — 5 ta


let user = {
    id: 1,
    name: "Ali",
    age: 22,
    address: {
        city: "Toshkent"
    }
};

console.log(user.address?.city);
console.log(user.address?.street);
console.log(user.job?.name);
console.log(user?.name);
console.log(user.friends?.[0]);


// Comparision - 5
console.log("=============================================");

console.log(5 > 3);
console.log(10 < 7);
console.log("A" > "a");
console.log("Ali" == "Ali");
console.log(100 === "100");


// Loop — 5 ta

console.log("=============================================");
// 1
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2
let arr = [10, 20, 30];
for (let i = 0; i < arr; i++) {
    console.log(arr[i]);
}

// 3
for (let value of arr) {
    console.log(value);
}

// 4
let text = "JS";
for (let harf of text) {
    console.log(harf);
}

// 5
let i = 1;
while (i <= 3) {
    console.log("Salom");
    i++;
}



// \n — 5 ta

console.log("=============================================");
console.log("Salom\nDunyo");
console.log("Ism: Ali\nYosh: 22");

let text1 = "Bir\nIkki\nUch";
console.log(text1);

console.log("JS\nReact\nNode");
console.log("Assalomu\nalaykum");


// \t — 5 ta
console.log("=============================================");


console.log("Ism:\tAli");
console.log("Yosh:\t22");
console.log("Fan:\tJavaScript");

let text2 = "JS\tReact\tNode";
console.log(text2);

console.log("Salom\tDunyo");
