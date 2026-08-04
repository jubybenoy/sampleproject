let student1="Amal";
let student2="Anu";
let student3="Anju";
let students=["Amal","Anu","Anju"];
console.log(students[0]);  // Accessing the first student
console.log(students[1]);  // Accessing the second student
console.log(students[2]);  // Accessing the third student
let fruits=["apple","banana","grapes"];
console.log(fruits.length);   //length of array
fruits.push("orange");  //adding new element to the array
console.log(fruits);  // Displaying the updated array
fruits.pop();  //removing last element from the array
console.log(fruits);  // Displaying the array after removing the last element
fruits.unshift("kiwi");  //adding new element to the beginning of the array
console.log(fruits);  // Displaying the array after adding the new element
fruits.shift();  //removing first element from the array
console.log(fruits);  // Displaying the array after removing the first element
fruits.splice(0,1);  //removing element from specific index
console.log(fruits);// Displaying the array after removing the element from specific index
console.log(fruits.indexOf("grapes"));  //finding index of an element in the array
console.log(fruits.includes("banana"));  //checking if an element is present in the array
console.log(fruits.includes("adff"));

