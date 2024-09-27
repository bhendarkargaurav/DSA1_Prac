// function duplicateNum(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         for(let j =0; j < arr.length; j++) {
//             if(arr[i] === arr[j]);
//             return arr[i];
//         }
//     }
// }


// let arr = [1,2,3,4,2,5,6];
// let out = duplicateNum(arr);
// console.log(out);



function duplicateNum(arr) {
    arr.sort((a, b) => a - b);

    for(let i=1; i<arr.length; i++) {
        if(arr[i] === arr[i - 1]) {
            return arr[i];
        }
    }
    return -1;
}

let arr = [1,3,2,3,1,5]
let out = duplicateNum(arr);
console.log("The duplicate number is", out);