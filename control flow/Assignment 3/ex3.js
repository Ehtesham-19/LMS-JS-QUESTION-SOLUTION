// custom error handling
function Area(length,width) {
    if (length<=0 || width<=0) {
        throw new Error("length and width must be positive")
    }
    return length * width;
}
console.log(Area(8,5))