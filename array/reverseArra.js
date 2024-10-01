// // reverse the arr;
// function reverseArr(arr) {
//     if(arr.length === 0){
//         console.log("empty array");
//     }
//     return arr.reverse();
//   }
//   const inputArray = [1, 2, 3, 4, 5, 6];
//   const reversedArr = reverseArr(inputArray);
//   console.log(reversedArr);


// even num
// for(let i = 0; i<=100; i++) {
//   if( i%2 === 0){
//   console.log("even number is: ", i);
//   }
// } 
//odd num
// for(let i = 0; i<=100; i++) {
//   if( i%2 !== 0){
//   console.log("odd number is: ", i);
//   }
// } 



function doReverse (arr) {
     return arr.reverse();
}

let inputArr = [1, 2, 3, 4, 5, 6];
let reversedArr = doReverse(inputArr);
console.log(reversedArr);

