function intersection(arr1,arr2) {
    let common = [];
    for (let item of arr1 ){
        if (arr2.includes(item)&& !common.includes(item)) {
            common.push(item)
        }
    }
    return common;
}
console.log(intersection([1,2,3,4,5],[2,4,5,6]))