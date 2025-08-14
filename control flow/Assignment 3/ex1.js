// divide number
function divide(a,b) {
    try {
        if (b === 0) {
            throw new Error("divide by zero is not allowed")
        }
return a / b;
    }
    
    catch(error)
     {
        return error.message;
    } finally {
        console.log("successfull")
    }
   
}
console.log(divide(5,25))