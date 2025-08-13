// Continue Statement - Skip Even Numbers
function Odd(n) {
    for (let i = 1; i <= n;i++){
        if (i % 2===0) {
            continue;
        }
        console.log(i);
    }
}
Odd(12)