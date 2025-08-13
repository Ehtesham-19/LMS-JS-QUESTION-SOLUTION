// find the common element in array
function common(arr1,arr2) {
    set1 = new Set(arr1);
    set2 = new Set(arr2);
    return set1.intersection(set2)
}
console.log(common([1,2,4,5,6],[2,48,8,6,5]))