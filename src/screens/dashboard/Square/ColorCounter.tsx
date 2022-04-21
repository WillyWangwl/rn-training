import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    color: string,
    onIncrease: Function;
    onDecrease: Function;
}

const ColorCounter:React.FC<Props> = (props) => {
    return (
        <View style={ styles.container }>
            <Text style={ [ styles.text, {color: "#000"} ] }>{props.color}</Text>
            <TouchableOpacity style={ styles.btn } onPress={ ()=>props.onIncrease()}>
                <Text style={ styles.text }>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.btn } onPress={ () =>props.onDecrease()}>
                <Text style={ styles.text }>-</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 15,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
        color: "#fff",
        width:"20%"
    },
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        borderRadius: 25,
        backgroundColor: "#808080"
    }
    
    
})

export default ColorCounter;