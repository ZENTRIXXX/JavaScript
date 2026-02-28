for (let i = 0; i < 5; i++) {
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    console.log(i * 2);
}


for (let i = 10; i >= 5; i--) {
    console.log(i);
}


for (let i = 0; i < 20; i += 5) {
    console.log(i);
}


for (let i = 1; i <= 5; i++) {
    console.log( i);
}



for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}


let arr = [-2, 5, -1, 7, -9];
for (let i = 0; i < arr; i++) {
    if (arr[i] < 0) continue;~
    console.log(arr[i]);
}


for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) continue;
    console.log(i);
}


let b = ["hi", "skip", "hello", "skip", "bye"];
for (let i = 0; i < b; i++) {
    if (b[i] === "skip") continue;
    console.log(b[i]);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}


let num = [2, 4, 8, -2, 10];
for (let i = 0; i < num; i++) {
    if (num[i] < 0) break;
    console.log(num[i]);
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) break;
    console.log(i);
}

let arr2 = ["hi", "ok", "go", "stop", "hello"];
for (let i = 0; i < arr2; i++) {
    if (arr2[i] === "stop") break;
    console.log(arr2[i]);
}

let valu = [10, 20, 50, 120, 130];
for (let i = 0; i < valu; i++) {
    if (values[i] > 100) break;
    console.log(valu[i]);
}