function prime(n) {
    if (n <= 1) return false;   // Not prime
    if (n <= 3) return true;    // 2 and 3 are prime

    if (n % 2 === 0 || n % 3 === 0) return false; // Eliminate multiples of 2 or 3

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

console.log(prime(16)); 

