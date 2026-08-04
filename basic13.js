function login(username, password) {
    try{
        if(username===" "|| password===" "){
            console.log("username and password cannot be empty)")
    }
    else if(username==='admin' && password==='admin123'){
    console.log("login successful");
    }
    else(console.log("login failed"));
}

catch(error){
    console.log("Error: "+error.message);
}
finally{
    console.log("Execution completed");
}
}
login('admin', 'admin1233');