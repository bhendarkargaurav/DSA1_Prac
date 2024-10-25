// To generate all permutations of an array in JavaScript, you can use a recursive approach. Here's 
//an example function that generates all permutations of an array:

function permute(arr) {
    let result = [];

    const permuteRec = (currentArr, remainingArr) => {
        if (remainingArr.length === 0) {
            result.push(currentArr);
            return;
        }

        for (let i = 0; i < remainingArr.length; i++) {
            let newCurrentArr = currentArr.concat(remainingArr[i]);
            let newRemainingArr = remainingArr.slice(0, i).concat(remainingArr.slice(i + 1));
            permuteRec(newCurrentArr, newRemainingArr);
        }
    };

    permuteRec([], arr);
    return result;
}

// Example usage:
const array = [1, 2, 3];
const permutations = permute(array);
console.log(permutations);
