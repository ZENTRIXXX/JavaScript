let date = new Date();

let soat = date.getHours();
let minut = date.getMinutes();
let sekund = date.getSeconds();

let kun = date.getDate();
let oy = date.getMonth() +1 ;
let yil = date.getFullYear();

let haftalar = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba"
];

let haftaKuni = haftalar[date.getDay()];

console.log(
  `Hozir: ${soat}:${minut}:${sekund} | Sana: ${kun}-${oy}-${yil} | Haftaning kuni: ${haftaKuni}`
);