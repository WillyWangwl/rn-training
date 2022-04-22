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

const SquareScreen:React.FC = () => {
    const [ rgb , setRgb ] = useState< RGB >( { red: 0 , green: 0 , blue: 0 } );
    const { red, green, blue } = rgb;

    return (
        <View style={styles.container}>
            <View>
                {   
                    Object.entries(rgb).map( ( [key,value] ) => 
                        <ColorCounter color={key}
                                        onIncrease={ () =>  setRgb( {...rgb, [key as keyof RGB]: value + INCREMENT } ) }
                                        onDecrease={ () =>  setRgb( {...rgb, [key as keyof RGB]: value - INCREMENT } ) }
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
                            Object.entries(rgb).map( ( [key,value] ) => 
                                <View style={ styles.containerColorText}>
                                    <Text style={ styles.textColor } >{key.toUpperCase()}</Text>
                                    <Text style={ styles.textColor } >:  {value }</Text>
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