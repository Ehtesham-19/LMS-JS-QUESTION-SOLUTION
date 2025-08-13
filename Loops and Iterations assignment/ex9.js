// While Loop with Break - Sum Numbers
function sum(n) {
    let sum = 0;
    let i = 1;
    while (true) {
        sum += i;
        i++;
        if (i> n) {
            break;

        }
    }
    return sum;
}
console.log(sum(2));