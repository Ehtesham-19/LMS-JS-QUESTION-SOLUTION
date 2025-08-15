function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimesUpTo(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    console.log(`Prime numbers up to ${limit}:`, primes.join(", "));
}

// Example usage:
let number = parseInt(prompt("Enter a number:"));
printPrimesUpTo(number);
