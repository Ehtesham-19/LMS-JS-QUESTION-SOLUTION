function printSpecificProperty(arrayOfObjects, propertyName) {
    // Outer loop: normal for loop (index based)
    for (let i = 0; i < arrayOfObjects.length; i++) {
        let obj = arrayOfObjects[i];

        // Inner loop: for...of to iterate over [key, value] pairs
        for (let [key, value] of Object.entries(obj)) {
            if (key === propertyName) {
                console.log(`${propertyName}: ${value}`);
            }
        }
    }
}

// Example usage:
let people = [
    { name: "John", age: 25, city: "New York" },
    { name: "Alice", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" }
];

printSpecificProperty(people, "name");
