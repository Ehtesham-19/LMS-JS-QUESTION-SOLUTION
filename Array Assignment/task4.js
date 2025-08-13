// Merge Arrays and Remove Duplicates
function mergeunique(arr1,arr2) {
    return [...new Set([...arr1, ...arr2])];

}
console.log(mergeunique([1,2,3,4,5],[5,6,7,8,2]))