// // setTimeout | setInverval

// // console.log("Start");

// // setTimeout(() => {
// //     console.log("Men SetTimeout man");
// // }, 3000)

// // console.log("End");

// // //  ==========================================================

// // let count = 1
// // setInterval(()=> {
// //     console.log(count++);
// // }, 1000)

// // let date = new Date
// // soat = (date.getHours());
// // minut = (date.getMinutes())
// // sekund = (date.getSeconds())


// // setInterval(() => {
// //     let date = new Date
// //     soat = (date.getHours());
// //     minut = (date.getMinutes())
// //     sekund = (date.getSeconds())

// //     console.log(`${soat}:${minut}:${sekund}`);
// // }, 1000)

// let count = 0
// let interval = setInterval(() => {
//     console.log(++count);
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 11000)


let matn = "8 j 8   mBliB8g  imjB8B8  jl  B";
let result = "";

function sort(str) {

  for (let value of str) {
    if (value !== " ") {
      result += value;
    }
  }
  return result;
}

console.log(sort(matn));