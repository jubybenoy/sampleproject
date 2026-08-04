const welcome=()=>{   //without parameter
    console.log("Welcome");
}
welcome();

const square=num=>{   //with 1 parameter
    return num*num;
}
console.log(square(5));

const add=(a,b)=>{   //with 2 parameter
    return a+b;
}
console.log(add(10,20));

const add1=(a,b)=>a+b;   //with 2 parameter and without return statement
console.log(add1(5,6));

