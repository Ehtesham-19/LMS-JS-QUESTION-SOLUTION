// For...in Loop - Iterate Object Properties 
function object(obj) {
    for (let x in obj){
        console.log(x + ": "+obj[x])
     }
}
let person = {
  name: "Ehtesham",
  age: 25,
  country: "Pakistan"
};
object(person)