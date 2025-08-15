// count properties
function properties(obj) {
    let count = 0;
    for (let key in obj){
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}
console.log(properties({
    user: "tom",
    age: 25,
    identity:"usa"
}))