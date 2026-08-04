function database(){
let user = {Name: "Miguel",
    isOnline: true};                         //OBJECT: A collection of key-value pairs.
console.log("Name:", user.Name);
console.log("datatype:", typeof user); 
console.log("Type of name:", typeof user.Name); //string datatype
console.log("Is online:", user.isOnline);       //boolean datatype
var mark=85;
console.log("Mark is: " + mark);
console.log("Type of mark:", typeof mark);     //number datatype
let age;
console.log("Age is: " + age);
console.log("Type of age:", typeof age);       //undefined
let languages=["Java","Python","playwright"];    //ARRAY
console.log("Languages:", languages);
console.log("Type of languages:", typeof languages); //object
status = null;
console.log("Status is: " + status);
console.log("status= ", status);       //null
const phonenumber=1234567890889887665565n;
console.log("Phone number is: " + phonenumber);
console.log("Type of phonenumber:", typeof phonenumber);   //bigint
let mySymbol = Symbol("unique_id");
console.log("Type of symbol:", typeof mySymbol);   }  //symbol
database();








