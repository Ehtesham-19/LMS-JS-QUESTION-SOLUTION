function occurence(str, char) {
    let count = 0;
    for (let i of str){
        if (i===char) {
            count++
        }
    }
    return count;
}
console.log(occurence("football","l"))