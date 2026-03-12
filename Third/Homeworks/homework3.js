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




let monthCount = [31,28,31,30,31,30,31,31,30,31,30,31]
let data = new Date()
function getDay(arr,d){
  let daySum = 0
  for(let i = 0; i< d.getMonth(); i++){
    daySum += arr[i]
  }
  daySum += Number(d.toDateString().split(" ")[2])
  return daySum
}

console.log(getDay(monthCount,date));
