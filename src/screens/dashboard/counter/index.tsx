import React, { useReducer, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

enum UserAction {
    INCREASE = "increase",
    DECREASE = "decrease",
}
type State = {
    counter: number;
}
type Action = {
    type: UserAction;
}
const initialValue:State = {
    counter: 0,
}
const reducer = ( state:State, action:Action ):State => {
    return   {...state, counter: state.counter + ( (action.type === UserAction.INCREASE) ? 1 : -1 )  }
}

const CounterScreen: React.FC = () => {
    const [ state , dispatch ] = useReducer( reducer , initialValue)
    return (
        <View style={styles.container}>
            {
                Object.values(UserAction).map( value =>
                    <View style={styles.button}>
                        <Button 
                            title={value}
                            onPress={ () => { dispatch( {type: value} ) } }
                            color= "#fff"
                        />
                    </View>
                )
            }
            <Text style={styles.text}>{`Current Counter: ${ state.counter }`}</Text>
        </View>
    );
}

export default CounterScreen;