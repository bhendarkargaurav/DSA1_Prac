function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // Update currentSum to be the maximum between the current number
        // or adding the current number to the previous subarray sum
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update maxSum if the currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Sample array
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Call the function and print the result
console.log("The maximum subarray sum is:", maxSubArray(nums));
