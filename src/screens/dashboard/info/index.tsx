import { TypeofTypeAnnotation } from "@babel/types";
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
  // --------Anonymous Funtions---------
  const names: string[] = ["Alice", "Bob", "Eve"];
  names.forEach(function (s) {
    console.log(s.toUpperCase());
  })
  names.forEach( (s) => {
    console.log(s.toLowerCase());
  } )
  // ---------------------------

  // --------objec types---------
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
  console.log(dayToDisplay);
  console.log(day);



  return (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this page
      </Text>
    </View>
  );
};

export default Info;
