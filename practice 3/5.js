function longest(sent) {
    let words = sent.split(" ");
    let long = "";
    for (let word of words){
        if (word.length>long.length) {
            long = word;
        }
    }
    return long;
}
console.log(longest("football is my love"));