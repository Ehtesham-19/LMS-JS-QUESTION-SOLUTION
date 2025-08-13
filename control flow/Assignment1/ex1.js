function Grade(marks) {
    if (marks>90||marks==90) {
        console.log("A")
    } else if (marks>80<90) {
        console.log("B")
    } else if (marks>70<79) {
        console.log("C")
    } else if (marks>60<69) {
        
    } else {
        console.log("F")
    }
}
Grade(80)