import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';


const CounterScreen: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Button 
                title="Increase"
                onPress={ () => { setCount( count + 1) }}
            />
            <Button 
                title= "Decrease" 
                onPress={ () => { setCount( count - 1) }}
            />
            <Text style={styles.text}>{`Current Counter: ${ count }`}</Text>
        </View>
    );
}

export default CounterScreen;