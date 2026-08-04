function greet(){
    console.log("Hello, Welcome to javascript");
}
greet();  //function will execute only when we call it. otherwise it will not execute.


function greet1(name)
{
    console.log(name);
}
greet1("juby"); //if same function name is used in same class, the second function will override the first function. it will print juby instead of Hello, Welcome to javascript.

function add(a,b) 
{
    return a+b;
}
let result=add(10,20);
console.log(result);

function square(number)
{
    return number*number;
}
console.log(square(5));

/*function sample()
{
    let x=10; // if inside function it is local variable, it will not be accessible outside the function. it will give error. if variable is outside function it is global variable, it will be accessible inside the function. if variable is declared outside it is global variable.

}*/