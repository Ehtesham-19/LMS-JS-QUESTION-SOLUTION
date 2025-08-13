// COUNT THE NUMBER of string
function count(str) {
    let charc = new Set(str);
    return charc.size;
}
console.log(count("hello"))