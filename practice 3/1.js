function avg(n) {
    if (n.length === 0) return 0;
    let sum = 0;
    for (let  num of n){
        sum += num;
    }
    return sum / n.length;
}
console.log(avg([5,5]))