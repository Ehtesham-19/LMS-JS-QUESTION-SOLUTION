//  Parse Integer
function Integer(str) {
    try {
        let num = parseInt(str);
        if (isNaN(str)) {
            throw new Error("input is not a valid number")
        }
        return num;

    }
    catch (error) {
        return error.message;

    }
}
console.log(Integer(6))