function firstNonRepeating(arr) {
    let map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (let num of arr) {
        if (map.get(num) === 1) return num;
    }
    return null;
}

console.log(firstNonRepeating([4, 5, 1, 2, 5, 2, 4])); // 1
