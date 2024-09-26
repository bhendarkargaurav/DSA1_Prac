// function findmaxEle(arr) {
//     if(arr.length === 0){
//         console.log('empty arr');
//     }

//     let maxElement = arr[0];

//     for (let i = 1; i < arr.length; i++) {
   
//         if(arr[i] > maxElement ){
//         maxElement = arr[i];
//         }
//     }
//         return maxElement
// }

// let inputArray = [20, 2, 40, 33, 109];
// let maxElement = findmaxEle(inputArray);
// console.log(maxElement);




function findmaxele(arr) {
    // if the arr is empth
    if(arr.length === 0){
        console.log("empty arr");
    }

    let maxElement = arr[0];
     
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > maxElement) {
            maxElement = arr[i];
        }
        
    }
    return maxElement;
    
}
let inputArray = [10,34,455,777];
let maxElement =  findmaxele(inputArray);
console.log(maxElement);





