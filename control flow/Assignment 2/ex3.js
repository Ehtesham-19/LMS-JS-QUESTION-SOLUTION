function square(num) {
    if (num<0) {
       throw new Error("calculating square for negative number is not allowed");
       
    } 
    return Math.sqrt(num);
}
try {
    console.log(square(25))
} catch (error) {
    console.log(error.message)
}