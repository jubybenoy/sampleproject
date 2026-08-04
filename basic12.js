//stringify and parse JSON data
let students={
    name:"Amal",
    age:20,
    course:"JavaScript",
    grade : "A"
};
console.log(students);
console.log(typeof students);

//takes object and flattens it into a standard text format called JSON
let jsondata=JSON.stringify(students);
console.log(jsondata);
console.log(typeof jsondata);

const jsondata1='{"name":"george","age":30,"course":"playwright","grade":"B"}';
console.log(jsondata1);
console.log(typeof jsondata1);

//takes JSON and converts it back into an object
const student=JSON.parse(jsondata1);
console.log(student);
console.log(typeof student);