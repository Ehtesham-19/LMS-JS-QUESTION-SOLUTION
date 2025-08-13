// For...of Loop - Sum Array
function Sum(arr) {
    let sum = 0;
    for (let x of arr){
        sum += x;
    }
    return sum;
}
console.log(Sum([1,2,3,4]))