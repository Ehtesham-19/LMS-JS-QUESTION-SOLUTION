function divide(a,b) {
    try {
        if (b === 0) {
            throw new Error("divide by zero is not allowed ");
            
        }
        return a / b;
        
    }
    catch (error)
     {
        return error.mesage;
    }
    
}
console.log(divide(2,10))