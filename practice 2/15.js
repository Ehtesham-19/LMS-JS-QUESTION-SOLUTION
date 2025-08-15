// length of strings
function strings(arr) {
    let length = [];
    for (let i = 0; i < arr.length;i++){
        length.push(arr[i].length)
    }
    return length;
}
console.log(strings(['my','name','is','ehtesham']))