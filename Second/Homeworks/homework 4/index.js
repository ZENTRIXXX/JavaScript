// 1
let mevalar = [];
mevalar[0] = "Olma";
mevalar[1] = "Banan";
mevalar[3] = "Gilos";

console.log(mevalar);
``

// 2 
let nestedArray = [[2, 3], [4, 5], [1, 2]];
let natija = 1;

for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        natija *= nestedArray[i][j];
    }
}

console.log(natija); 

