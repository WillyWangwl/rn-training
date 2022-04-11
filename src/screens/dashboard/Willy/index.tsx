import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./style"
import HelloWorld from "./hello";
// import RandomNumberGenerator, {pi, phi, squareTwo} from "./maths";
import * as maths from "./maths"



const Willy: React.FC = () => {

    // HelloWorld();
    // console.log(maths.pi);
    // const circlePi : number = maths.pi;
    // maths.RandomNumberGenerator();
    // console.log( maths.addNumber(10, 15));
    const myName = "Willy"
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome To
          </Text>
          <Text style={styles.myName}>
            {myName} screen
          </Text > 
          <Text>
            10 * 10 = { 10 * 10}
          </Text>
        </View>
        
    );


}

export default Willy;