
function setMini(A){
    let miniEle = Infinity;
    for(let i=0; i<A.length; i++) {
        if(A[i]< miniEle){
            miniEle = A[i];
        }
    }
    return miniEle;
}

function setMaxi(A){
    let maxEle = -Infinity;
    for(let i=0; i<A.length; i++) {
        if(A[i]>maxEle){
            maxEle = A[i];
        }
    }
    return maxEle;
}

// function main() {
//     const A = [4, 7, 2, 1, 9];
//     console.log("The min number is:", setMini(A));
//     console.log("The max element is:", setMaxi(A));
// }
// main();


let inputArray = [4, 7, 2, 1, 9];
let miniElement = setMini(inputArray);
let maxiElement = setMaxi(inputArray);

console.log("the mini element is", miniElement);
console.log("the maximum elemet is", maxiElement);