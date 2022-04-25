import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import ColorCounter from './ColorCounter';
import styles from './style';

const INCREMENT = 10; 
type RGB = {
    red: number;
    green: number;
    blue: number;
}
type Action = {
    color: string,
    amount: number,
}
type Reducer<RGB, Action> = (rgb:RGB, action:Action) => RGB;

const initialRGB:RGB = {
    red: 0 ,
    green: 0 ,
    blue: 0,
}

const reducer = ( rgb:RGB ,  action:Action ):RGB => {
    return ( action.amount > 255 ) ?  { ...rgb, [action.color as keyof RGB ]: 255 } :
            ( action.amount < 0 ) ? { ...rgb, [action.color as keyof RGB ]: 0 } : 
            { ...rgb, [action.color as keyof RGB ]: action.amount};
}

const SquareScreen:React.FC = () => {
    const [rgb, runMyReducer] = useReducer< Reducer< RGB, Action > >(reducer, initialRGB )
    const { red, green, blue } = rgb;
    return (
        <View style={styles.container}>
            <View>
                {   
                    Object.entries(rgb).map( ( [ key, value ] ) => 
                        <ColorCounter color={key}
                                        onIncrease={ () =>  runMyReducer( {color: key, amount:value+INCREMENT } ) }
                                        onDecrease={ () =>  runMyReducer( {color: key, amount:value-INCREMENT } ) }
                                        disableIncrease = { value >= 255 }
                                        disableDecrease = { value <= 0 }
                        />
                    )                                
                }
                <View style={ styles.containerCard}>
                    <View style= { [styles.box,  {
                            backgroundColor: `rgb( ${red}, ${green}, ${blue})`,
                    } ] }/>
                    <View style= {styles.containerColorTextOuter}>
                        {
                            Object.entries(rgb).map( ( [ key, value ] ) => 
                                <View style={ styles.containerColorText}>
                                    <Text style={ styles.textColor } >{ key.toUpperCase() }</Text>
                                    <Text style={ styles.textColor } >:  { value }</Text>
                                </View>
                            )
                        }
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SquareScreen;