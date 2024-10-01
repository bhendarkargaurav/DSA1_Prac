
// function setMini(A){
//     let miniEle = Infinity;
//     for(let i=0; i<A.length; i++) {
//         if(A[i]< miniEle){
//             miniEle = A[i];
//         }
//     }
//     return miniEle;
// }

// function setMaxi(A){
//     let maxEle = -Infinity;
//     for(let i=0; i<A.length; i++) {
//         if(A[i]>maxEle){
//             maxEle = A[i];
//         }
//     }
//     return maxEle;
// }

// // function main() {
// //     const A = [4, 7, 2, 1, 9];
// //     console.log("The min number is:", setMini(A));
// //     console.log("The max element is:", setMaxi(A));
// // }
// // main();


// let inputArray = [4, 7, 2, 1, 9];
// let miniElement = setMini(inputArray);
// let maxiElement = setMaxi(inputArray);

// console.log("the mini element is", miniElement);
// console.log("the maximum elemet is", maxiElement);



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

