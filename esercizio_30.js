function sayHelloName(name){
    console.log("Hello " + name)
}

sayHelloName("Silvano");

// oppure
function sayHelloName(name){
    return ("Hello " + name);
}

console.log(sayHelloName("Silvano"));

// oppure
function sayHelloName(name){
    return ("Hello " + name);
}

let printName = sayHelloName("Silvano")
console.log(printName);
