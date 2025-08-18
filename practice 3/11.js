function sum(arr) {
    let sum = 0;
    for (let i of arr){
        sum += i;
    }
    return sum;
}
console.log(sum([2,5,4,6,4,7]))