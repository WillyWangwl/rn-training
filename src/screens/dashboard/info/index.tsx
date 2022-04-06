import { restElement, TypeofTypeAnnotation } from "@babel/types";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Info: React.FC = () => {
  // -------- Testing 1---------
  const birthdayGreeter = ( name:string, age?:number = 15, job?:string = "ssssss"): string => {
    return `happy birthday ${name}, you are now ${age} years old! and your job is ${job}`;
  };

  let birthdayHero:string;
  birthdayHero = "jean User";
  let age : number = 22;
  console.log(birthdayGreeter(birthdayHero));
  // ---------------------------

  // -------- type for own types---------
  type operator = 1 | 2 | 3;

  const calculator = (a: number, b:number , op: operator): any => {
    switch(op) {
      case 1:
        return a + b;
        break;
      case 2:
        return a * b;
        break;
      case 3:
        if( b === 0) return "Can't divide by 0";
        break;
      default:
        return "Operation unknow";
    }
  }
  console.log(calculator(10,0,4));
  // ---------------------------
  // -------- Annotations---------
  const myName : string = "Alice"

  function greet(name :string) {
    console.log(`Hello, ${name.toLowerCase()} !!`);
  }
  greet(myName)
  // ---------------------------
  // --------Anonymous Functions---------
  const names: string[] = ["Alice", "Bob", "Eve"];
  names.forEach(function (s) {
    console.log(s.toUpperCase());
  })
  names.forEach( (s) => {
    console.log(s.toLowerCase());
  } )
  // ---------------------------

  // --------object types---------
  function printCoord(pt: { x:number; y:number}) {
    console.log(`x: ${pt.x}; y:${pt.y}`)
  }
  printCoord( { x : 3, y : 4 } )
  // ---------------------------

  // --------Type Aliase---------
  type Point = {
    x: number;
    y: number;
  }
  function printCoord1(pt: Point) {
    console.log(`x: ${pt.x}; y:${pt.y}`)
  }
  printCoord( { x : 30, y : 40 } )
  // ---------------------------

  // --------Interface---------
  interface Point1 {
    x: number;
    y: number;
  }
  function printCoord2(pt: Point1) {
    console.log(`x: ${pt.x}; y:${pt.y}`)
  }
  printCoord( { x : 300, y : 400 } )
  // ---------------------------

  // --------Enums---------
  enum DayOfTheWeek {
    SUN,
    MON,
    TUE,
  }
  let day:DayOfTheWeek;
  day = DayOfTheWeek.MON;
  type dayToDisplay = keyof typeof DayOfTheWeek; 
  console.log(day);
  // ---------------------------

  // --------Literal Types---------
  function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
  ) {
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
      result  = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString()
    }
    return result;
  }
  console.log(combine(30,26,"as-number"));
  console.log(combine("30","26","as-number"));
  console.log(combine("Hello","World","as-text"));
  // ---------------------------

  // --------Narrowing---------
  const formatErrorMessage = (value: string | Warning ): string => {
    const prefix = "Error: ";
    if ( typeof value === "string") {
      return prefix + value;
    }
    if ( 'text' in value ) {
      return prefix + value.text
    }
    return prefix;
  } 
  interface Warning {
    text: string;
  }
  console.log(formatErrorMessage( {text: "What is the error"}));
  // ---------------------------

  // --------Function---------
  function add(n1: number, n2:number) {
    return n1 + n2;
  }
  function printResult(num: number): void {
    console.log(`Result : ${num}`);
  }
  // call back function
  function addAndHandle(n1:number, n2: number, cb: (num:number) => void ) {
    const result = n1 + n2
    cb(result);
  }

  printResult( add( 5 , 12 ) );
  // let combineValues:Function;
  let combineValues: ( a: number, b: number ) => number;
  combineValues = add;
  console.log( combineValues ( 8, 8 ) ); 
  addAndHandle(10,30, (result) =>{
    console.log(result);
  })

  const greeting = ( firstName: string, lastName: string ="James" ) : string => `Hello ${firstName} ${lastName}`;
  
  console.log(greeting("Willy"));
  console.log(greeting("Willy", "Wang"))
  
  const combineAdd = <A,>(input1 : A, input2: A) : A => {
    return input1 + input2;
  }
  console.log(combineAdd(30,26));
  console.log(combineAdd("30","26"));
  console.log(combineAdd("Hello"," World"));

  type GreetFunction1 = ( name: string ) => string ;
  const greeter: GreetFunction1 = (fn ) => {return  "hello " + fn ;}
  type GreetFunction2 = ( name: string ) => void ;
  const goodbye: GreetFunction2 = ( bye ) => console.log( "Bye " + bye );
  console.log(greeter("John"))
  goodbye("John");
   // ---------------------------

  // --------Call Signatures---------
  type SignatureFunction = {
    nameA : string;
    ( isAdult: number ) : boolean;
  };
  const mySignatureX: SignatureFunction = ( age :number) => age > 18
  mySignatureX.nameA = "Age is bigger than 18 ";
  
  const doSomething1 = ( fn: SignatureFunction ):void => {
    console.log( fn.nameA + " : " + fn(18))
  }
  doSomething1(mySignatureX);
  // ---------------------------

  // --------REST Parameter---------
  const printRest = (first: number, ...others: number[]) => {
    console.log("first:", first);
    console.log("rest:", others);
  };
  printRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  const array1 = [1, 2, 3]
  const array2 = [...array1, 4 ,5]
  console.log(array2)
  // ---------------------------

  // --------Parameter Destructuring---------
  const displayDetail = ( { stdName, stdAge, stdAddress} : 
    { stdName : string ; stdAge: number; stdAddress : string }):void => {
      console.log(` Name: ${stdName}, Age: ${stdAge}, Address: ${stdAddress}`)
  }
  displayDetail({stdName: "willy",stdAge: 35,stdAddress: "Singapore"});

  type NumberToSum = {
    x: number;
    y: number;
    z: number;
  }
  const sum = ({ x, y, z }:NumberToSum): void => {
    console.log(x + y + z);
   }
   const sumNumber = {x: 10, y: 20, z:30};
   sum(sumNumber);
   


 


  






  return (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this page
      </Text>
    </View>
  );
};

export default Info;
