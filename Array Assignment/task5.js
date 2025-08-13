//  Find Common Elements
function CommonElements(arr1,arr2) {
    return arr1.filter(item=>arr2.includes(item))
}
console.log(CommonElements([1,2,3,4,5],[2,4,5,3]))