
function setMini(arr) {
    let miniEle = Infinity;
    for(let i=0; i < arr.length; i++) {
        if(arr[i] < miniEle) {
            miniEle = arr[i];
        }
    }
    return miniEle;
}

function setMax(arr) {
    let maxEle = -Infinity;
    for(let i=0; i < arr.length; i++) {
        if(arr[i] > maxEle) {
            maxEle = arr[i];
        }
    }
    return maxEle;
}

let inputArr = [2, 4, 1, 7, 3, 9];
let miniElement = setMini(inputArr);
let maxElement = setMax(inputArr);

console.log("the min element of the arrray is:", miniElement);
console.log("The max element of the array is:", maxElement);



// let arr = [1,2,4,7,4,9];
// const sort = arr.sort((a,b) => a-b);

// let length = arr.length-1;

// for(let i=0; i<arr.length-1; i++){
//     let max_ele = (sort[i+length]);
//     console.log("max ele is", max_ele);

//     let min_ele = (sort[i]);
//     console.log("min ele is", min_ele);
//     break;
// }
