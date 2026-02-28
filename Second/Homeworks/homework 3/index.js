// 1
let str1 = "Men Algoritm IT markazida tahsil olaman";
let unli = "aeiouAEIOU";
let undosh = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

let firstUnli = -1;
let lastUndosh = -1;

for (let i = 0; i < str1.length; i++) {
  if (unli.includes(str1[i])) {
    firstUnli = i;
    break;
  }
}

for (let i = str1.length - 1; i >= 0; i--) {
  if (undosh.includes(str1[i])) {
    lastUndosh = i;
    break;
  }
}

console.log(lastUndosh - firstUnli);



// 2
let str2 = "A1g0r1t9m8";
let raqam = "";
let harf = "";

for (let i = 0; i < str2.length; i++) {
  if (!isNaN(str2[i])) {
    raqam += str2[i];
  } else {
    harf += str2[i];
  }
}

console.log(raqam + harf);



// 3
let str3 = "men algoritm markazida oqiyman";
let orta = Math.floor(str3.length / 2);

while (!(str3[orta] >= "a" && str3[orta] <= "z")) {
  orta++;
}

let natija3 =
  str3.slice(0, orta) +
  str3[orta].toUpperCase() +
  str3.slice(orta + 1);

console.log(natija3);



// 4
let str4 = "Algoritm IT Markazi";
let natija4 = "";

for (let i = 0; i < str4.length; i++) {
  if (str4[i] >= "A" && str4[i] <= "Z") {
    natija4 += str4[i].toLowerCase();
  } else if (str4[i] >= "a" && str4[i] <= "z") {
    natija4 += str4[i].toUpperCase();
  } else {
    natija4 += str4[i];
  }
}

console.log(natija4);



// 5

let str5 = "a3b2c1d4";
let natija5 = "";

for (let i = 0; i < str5.length; i++) {
  if (isNaN(str5[i])) {
    natija5 += str5[i].repeat(Number(str5[i + 1]));
  }
}

console.log(natija5); 
