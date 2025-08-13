// forEach Loop - Double Array Elements
function doubleArray(arr) {
  let doubled = [];
  arr.forEach(num => {
    doubled.push(num * 2);
  });
  return doubled;
}

// Example usage:
let numbers = [1, 2, 3, 4];
console.log(doubleArray(numbers)); // Output: [2, 4, 6, 8]
