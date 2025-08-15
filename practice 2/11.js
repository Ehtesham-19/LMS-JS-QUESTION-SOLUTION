function printStringProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// Example usage:
let person = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Developer",
    isMarried: false
};

printStringProperties(person);
