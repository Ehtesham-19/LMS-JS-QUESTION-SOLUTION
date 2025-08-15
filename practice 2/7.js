function count(sent) {
    let word = sent.trim().split(/\s+/);
    return word.length;
}
console.log(count("this is india"))