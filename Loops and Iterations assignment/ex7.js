//   Break Statement - Stop at Specific Number
function findNumber(arr, target) {
  for (let num of arr) {
    if (num === target) {
      console.log(`Found: ${target}`);
      break; // stop the loop
    }
  }
}

// Example usage:
findNumber([3, 7, 2, 9, 5], 2);
