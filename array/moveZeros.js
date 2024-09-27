function moveZeros(arr) {
    let index = 0;

    // loop through the array and move non-zero element to the frount
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }

    while(index < arr.length) {
        arr[index] = 0;
        index++;
    }

    return arr;
}


let arr = [0, 1, 0, 3, 12, 0, 5];
let result = moveZeros(arr);
console.log(result);