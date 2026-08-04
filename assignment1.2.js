// 1. Function declaration
function greet(name) {
  console.log("Hello, " + name);
}
// 2. Function expression
var divide= function (a, b) {
  console.log("A/B= " + a / b);
};
// 3. Arrow function
const multiply = (a, b) => {
  console.log("A*B= " + a * b);
};
// 4. Function with parameters and arguments
function showDetails(name, age) {   // name, age = parameters
  console.log(name + " is " + age + " years old");
}
// 5. Function with a return value
function square(num) {
  return ("num * num= " + num * num);
}

// Calling all functions
greet("juby");                      
divide(6, 3);                        
multiply(4, 2);                 
showDetails("Miguel", 11);    
var result = square(4);         
console.log(result);  