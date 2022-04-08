import React from "react";

const Logger = ( constructor : Function) =>{
    console.log("loading......");
    console.log(constructor);
}

// @Logger
class Person {
    name = "willy";

    constructor(){
        console.log("2nd step.....");
    }
}


export default Person;