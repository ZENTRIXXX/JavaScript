// 1
let y = 5;
while (y <= 50) {
  console.log(y);
  y++;
}

// 2
let t = 10;
let sum1 = 0;
while (t <= 20) {
  sum1 += t;
  t++;
}
console.log(sum1);

// 3
let r = 10;
while (r >= 1) {
  console.log(r);
  r--;
}

// 4
let e = 1;
do {
  console.log(e * e);
  e++;
} while (e <= 5);

// 5
let w = 1;
do {
  console.log(w * w * w);
  w++;
} while (w <= 5);

// 6
let q = 1;
let only5 = 1;
while (q <= 50) {
  if (q % 5 === 0) {
    only5 *= q;
  }
  q++;
}
console.log(only5);

// 7
let a = 1;
let sum = 0;
while (a <= 100) {
  if (a % 3 === 0 && a % 5 === 0) {
    sum += a;
  }
  a++;
}
console.log(sum);
