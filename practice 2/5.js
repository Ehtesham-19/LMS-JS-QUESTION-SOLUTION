//  smallest and largest
function small(arr) {
    if (arr.length === 0) return "invalid input";
    let small = [0];
    let large = [0];
    for (let i = 0; i < arr.length;i++){
        if (arr[i]>large) {
            large=arr[i]
        }
        if (arr[i]<small) {
            small=arr[i]
        }
    }
    return {
        small: small,
        large: large
    };
}
console.log(small([1,2,3,4,5]))