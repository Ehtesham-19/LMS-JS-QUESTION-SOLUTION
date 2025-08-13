//  Do-While Loop - Repeat Input 
function repeatInput() {
  let num;
  while (true) {
    num = prompt("Enter a valid number:");
    if (!isNaN(num) && num.trim() !== "") {
      console.log("You entered:", Number(num));
      break;
    } else {
      alert("Invalid input! Please enter a number.");
    }
  }
}

// Example usage:
repeatInput();
