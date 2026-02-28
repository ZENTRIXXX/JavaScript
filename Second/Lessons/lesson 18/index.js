let sum = 0
// for(let i= 1; i<10; i++){
//     sum += i
// }
// console.log(sum);

// let num = 1;
// let sum = 0;
// while (num <= 9)  {
//     sum += num
//     num++
// }

// console.log(sum);


// let num = 1;
// do{
//     sum +=num 
//     num++;
// } while (num <= 9);

// console.log(sum);


// let obj = {
//     ism: "Ali",
//     yosh: 20
// }



// let cloneObj = structuredClone(obj);

// cloneObj.yosh = 22;

// console.log(obj);
// console.log(cloneObj);

function Person(ism, yosh, shahar) {
    this.ism = ism
    this.yosh = yosh 
    this.shahar = shahar
}

let obj = new Person("Ali", 20, "Namangan shahr")

for(let key in obj){
    console.log(obj[key]);
    
}

let {ism, yosh, shahar} = obj
console.log(ism, yosh, shahar);
