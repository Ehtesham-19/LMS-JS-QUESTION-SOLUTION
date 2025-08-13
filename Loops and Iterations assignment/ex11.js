// Do-While Loop with Break - Sum Input Numbers
function sumInputNumbers() {
  let sum = 0;

  while (true) {
    let input = prompt("Enter a number (negative number to stop):");
    let num = Number(input);

    if (isNaN(num)) {
      alert("Please enter a valid number!");
      continue;
    }

    if (num < 0) {
      break; // stop if negative number is entered
    }

    sum += num;
  }

  return sum;
}

// Example usage:
let total = sumInputNumbers();
console.log("Sum of positive numbers:", total);
