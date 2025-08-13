//  Calculate Average of Numbers
function Average(arr) {
    if (arr.length === 0) return false;
    let sum = 0;
    for (let i = 0; i < arr.length;i++){
        sum +=arr[i]
    }
    return sum / arr.length;
}
console.log(Average([2,4,6,8]))