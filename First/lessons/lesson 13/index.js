let a = 100;
let b = 500;
let c = 300;

function taqqoslash1 (x, z, y) {
    let max = null;
    if (x > y && x > z) {
        max = x;
    } else if (z > x && z > y) {
        max = z;
    } else if (y > x && y > z) {
        max = y;
    } else {
        max = "hammasi teng"
    }
    console.log(max);
    
}

taqqoslash1(a, b, c);

let taqqoslash = function (x, z, y) {
    let max = null;
    if (x > y && x > z) {
        max = x;
    } else if (z > x && z > y) {
        max = z;
    } else if (y > x && y > z) {
        max = y;
    } else {
        max = "hammasi teng"
    }
    console.log(max);
    
}

taqqoslash(a, b, c);

let taqqoslash2 = (x, z, y) => {
    let max = null;
    if (x > y && x > z) {
        max = x;
    } else if (z > x && z > y) {
        max = z;
    } else if (y > x && y > z) {
        max = y;
    } else {
        max = "hammasi teng"
    }
    console.log(max);
    
}

taqqoslash2(a, b, c);