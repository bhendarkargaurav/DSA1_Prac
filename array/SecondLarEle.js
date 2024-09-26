function FindSecondLargest(arr) {
    if(arr.length < 2){
        return null;
    }

    let largest = arr[0];
    let secondLargest = null;

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] < largest && (secondLargest === null || arr[i] > secondLargest)){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let inputArray = [1,2,5,9,8,6];
let Element = FindSecondLargest(inputArray);
console.log(Element);