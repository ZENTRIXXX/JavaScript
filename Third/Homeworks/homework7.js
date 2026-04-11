// // function findSmallestInt(arr) {
// //   return Math.min(...arr)

// // }


// // console.log(findSmallestInt([78,56,232,12,8]));
// // console.log(findSmallestInt([78,56,232,12,18]));
// // console.log(findSmallestInt([78,56,232,412,228]));
// // console.log((findSmallestInt([78,56,232,12,0])));
// // console.log(findSmallestInt([1,56,232,12,8]));


// // ex 2


// function betterThanAverage(classPoints, yourPoints) {
//   let clas = classPoints.reduce((a,c)=> a+c, 0)
//   return (clas / classPoints.length) <= yourPoints
  
// }



// console.log((betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)));   // true
// console.log((betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)));  /// false
// console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)); // false
// console.log(betterThanAverage([50, 50, 50], 50)); // false 


// // ex 3

// function findAverage(array) {
//   return array.reduce((a,c)=> a+c / array.length,0)
// }

// console.log(tester([1,1,1]));   // 1
// console.log(tester([1,2,3]));  // 2
// console.log(tester([1,2,3,4]));   // 2.5

// // ex 4

// function playerRankUp (points) {
//   if ( points >= 100){
//     return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
//   } else {
//     return false
//   }
// }

// console.log(playerRankUp(64)); // false
// console.log(playerRankUp(101));  // "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."

// // ex 5 

// function getAverage(marks){
//   return parseInt(marks.reduce((a,c)=> a+c / marks.length , 0))
// }

// console.log(getAverage([2,2,2,2])); // 2
// console.log(getAverage([1,2,3,4,5,])); // 3
// console.log(getAverage([1,1,1,1,1,1,1,2])) // 1

// // ex 6

// function findAverage(nums) {
//   return nums.reduce((a,c)=> a+c / nums.length,0)
// }


// console.log(findAverage([1])); // 1
// console.log(findAverage([1, 3, 5, 7])); // 4


function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number;) {
        newArray.push(counter);
    }
    return newArray;
}

console.log(createArray(1));
