function findMissEle(arr, N) {
    // sum of first N natural numbers
    let totalSum = (N * (N + 1))/2;

    // sum of element in the array
    let arrSum = arr.reduce((acc, curr) => acc + curr);

    // the differnce is the missing element
    return totalSum - arrSum;

}

let arr = [0,1,2,3,5,6];
let N = 6;
// console.log(findMissEle(arr, N));
let missingEle = findMissEle(arr, N);
console.log(missingEle);