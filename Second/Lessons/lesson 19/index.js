

let arr = [1, 1, 2, 3, 4, 4, 5, 6, 6]
let arr2 = [55, 55, 32, 110, 110, 99, 99]

function newArr(data) {
    let newArr = []
    for(let v of data){
        if(data.findIndex((n)=>n===v) === data.findLastIndex((n)=>n===v)) newArr.push(v)
    }
    return newArr
}

console.log(newArr(arr))
