import { classPrivateMethod } from '@babel/types';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import ColorCounter from './ColorCounter';
import styles from './style';


const INCREMENT = 15; 
type RGB = {
    red: number;
    green: number;
    blue: number;
}

const validChecking = ( amount: number ):boolean => {
    return (amount > 255 || amount < 0) ? false:true
}

const SquareScreen:React.FC = () => {
    const [ rgb , setRgb ] = useState< RGB | null >( null );
    ( !rgb ) ? setRgb( { red: 0 , green: 0 , blue: 0 } ): null
    return (
        <View style={styles.container}>
            {
                (rgb) &&
                <View>
                <ColorCounter color="red" 
                                onIncrease={ () => ( validChecking( rgb.red + INCREMENT ) ) ? 
                                    setRgb( {...rgb, red: rgb.red + INCREMENT } ) : null }
                                onDecrease={ () => ( validChecking( rgb.red - INCREMENT ) ) ? 
                                    setRgb( {...rgb, red: rgb.red - INCREMENT } ) : null }
                />
                <ColorCounter color="green"
                                onIncrease={ () => ( validChecking( rgb.green + INCREMENT ) ) ? 
                                    setRgb( {...rgb, green: rgb.green + INCREMENT } ) : null }
                                onDecrease={ () => ( validChecking( rgb.green - INCREMENT ) ) ? 
                                    setRgb( {...rgb, green: rgb.green - INCREMENT } ) : null }
                />
                <ColorCounter color="blue"
                                onIncrease={ () => ( validChecking( rgb.blue + INCREMENT ) ) ? 
                                    setRgb( {...rgb, blue: rgb.blue + INCREMENT } ) : null }
                                onDecrease={ () => ( validChecking( rgb.blue - INCREMENT ) ) ? 
                                    setRgb( {...rgb, blue: rgb.blue - INCREMENT } ) : null }
                />
        
                    <View style={ styles.containerCard}>
                        <View style= { { 
                                width:100,
                                height:100,
                                borderWidth: 1,
                                borderRadius: 30,
                                backgroundColor: `rgb( ${rgb.red}, ${rgb.green}, ${rgb.blue})`,
                        } }/>
                        <View style= {styles.containerColorTextOuter}>
                            <View style={ styles.containerColorText}>
                                <Text style={ styles.textColor } >Red</Text>
                                <Text style={ styles.textColor } >:  {rgb.red}</Text>
                            </View>
                            <View style={ styles.containerColorText}>                    
                                <Text style={ styles.textColor } >Blue</Text>
                                <Text style={ styles.textColor } >:  {rgb.green}</Text>
                            </View>
                            <View style={ styles.containerColorText}>
                                <Text style={ styles.textColor } >Green</Text>
                                <Text style={ styles.textColor } >:  {rgb.blue}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            }
        </View>
    );
}

export default SquareScreen;