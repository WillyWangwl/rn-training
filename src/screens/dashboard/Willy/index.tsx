import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./style"
import HelloWorld from "./hello";
import * as maths from "./maths"
import ArrayScreen from "./ArrayList/ArrayScreen";



const Willy: React.FC = () => {

    const myName = "Willy"
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome To
          </Text>
          <Text style={styles.myName}>
            {myName} screen
          </Text > 
          <ArrayScreen />
        </View>
        
    );


}

export default Willy;