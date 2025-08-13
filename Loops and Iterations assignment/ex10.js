//  While Loop with Continue - Skip Negative Numbers
function Positive(n) {
    let i = 0;
    while (i<n.length) {
        if (n[i]<=0) {
            i++;
            continue;

        }
        console.log(n[i]);
        i++;
    }
}
Positive([2,3,4,0,-5])