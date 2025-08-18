function even(arr) {
    let even = [];
    for (let i of arr){
        if (i%2===0) {
            even.push(i);
        }
    }
    return even;
}
console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));