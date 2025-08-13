function greet(hour) {
    if (hour>0 && hour<12) {
        console.log("good morning")
    } else if (hour>12&& hour<18) {
        console.log("good after noon")
    } else if (hour>18 && hour<23) {
        console.log("good night")
    }
    
}
greet(21);