
// function duplicateNum(arr) {
//     arr.sort((a, b) => a - b);

//     for(let i=1; i<arr.length; i++) {
//         if(arr[i] === arr[i - 1]) {
//             return arr[i];
//         }
//     }
//     return -1;
// }

// let arr = [1,3,2,3,1,5]
// let out = duplicateNum(arr);
// console.log("The duplicate number is", out);


function duplicateNum(arr) {
    arr.sort((a, b) => a - b);

    for(let i=1; i<arr.length; i++) {
        if(arr[i] === arr[i - 1]) {   // arr[i - 1] is the previous element
            return arr[i];
        }
    }
    return -1;
}


let arr = [1, 4, 3, 2, 9, 5];
let out = duplicateNum(arr);
console.log("the duplicate number from the arr is:", out);