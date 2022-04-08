import React from "react";
import { Text, View } from "react-native";
import styles from "./style"
import HelloWorld from "./hello";
// import RandomNumberGenerator, {pi, phi, squareTwo} from "./maths";
import * as maths from "./maths"
import Person from "./decorator";


const Willy: React.FC = () => {

    // HelloWorld();
    // console.log(maths.pi);
    // const circlePi : number = maths.pi;
    // maths.RandomNumberGenerator();
    // console.log( maths.addNumber(10, 15));
    const person1 = new Person();
    console.log(person1);
    


    return (
        <View style={styles.container}>
          <Text>
            Willy Screen
          </Text>
          <Text>
            {/* {circlePi} */}
          </Text>
        </View>
    );


}

export default Willy;