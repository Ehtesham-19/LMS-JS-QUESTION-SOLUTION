function vowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let chr of str){
        if (vowels.includes(chr)) {
            count++;
        }
    }
    return count;
}
console.log(vowels("i love pakistan"))