function findMedian(arr) {
    if (arr.length === 0) return null; // handle empty array

    // Step 1: sort the array in ascending order
    let sorted = arr.slice().sort((a, b) => a - b);

    let mid = Math.floor(sorted.length / 2);

    // Step 2: check odd/even length
    if (sorted.length % 2 === 0) {
        // even → average of two middle values
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        // odd → middle value
        return sorted[mid];
    }
}

// Example usage
console.log(findMedian([5, 2, 9, 1, 7]));   // 5  (sorted: [1,2,5,7,9])
console.log(findMedian([4, 2, 8, 6]));      // 5  (sorted: [2,4,6,8])
console.log(findMedian([]));                // null
