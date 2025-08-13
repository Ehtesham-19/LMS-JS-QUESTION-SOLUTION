//  for...in Loop with Object 
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}

// Example usage:
let per = {
  name: "Ehtesham",
  age: 25,
  country: "Pakistan"
};

console.log(countProperties(per)); // Output: 3
