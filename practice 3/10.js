function perfect(n) {
    if (n < 0) return false;
    let sqrt = Math.sqrt(n);
    return sqrt=== Math.floor(sqrt)
}
console.log(perfect(25))