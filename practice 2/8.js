// positive number
function positive(arr) {
    let positive = [];
    for (let i = 0; i < arr.length;i++){
        if (arr[i]>0) {
            positive.push(arr[i])
        }
    }
    return positive;
}
console.log(positive([2,5,8,9,0,-88,-5]))