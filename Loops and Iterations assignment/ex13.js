// for...of Loop with Array of Strings 
function capitalizeStrings(arr) {
  let capitalized = [];
  for (let str of arr) {
    if (str.length > 0) {
      capitalized.push(str.charAt(0).toUpperCase() + str.slice(1));
    } else {
      capitalized.push(str); // keep empty strings as is
    }
  }
  return capitalized;
}

// Example usage:
let words = ["apple", "banana", "cherry", ""];
console.log(capitalizeStrings(words)); // Output: ["Apple", "Banana", "Cherry", ""]
