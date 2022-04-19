import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import styles from './styles';

type NumberArray = {
    red:number,
    green:number,
    blue:number,
}

const randomColorGenerator = ():NumberArray => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return { red: red, green: green, blue: blue}
    // return [red, green, blue]
}

const RandomColor:React.FC  = () => {
    // [Red, Green, Blue]
    // const [color, setColor] = useState([[0,0,0]]);
    const [color, setColor] = useState<NumberArray[]>([{ red: 0, green: 0, blue: 0 } ] )

    console.log(color)
    return (
        <View style = { styles.container } >
            <View style = { styles.addColorBtn } >
                <Button 
                    title = "Add A Color" 
                    color={"red"}
                    onPress={ () => setColor([...color,randomColorGenerator()])} 
                />
            </View>
            <View style={styles.flatListContainer} >
                <Text style = { [ styles.colorText, styles.colorTab, styles.header] }>Color</Text>
                <Text style = { [ styles.colorText, styles.header] }>R</Text>
                <Text style = { [ styles.colorText, styles.header] }>G</Text>
                <Text style = { [ styles.colorText, styles.header] }>B</Text>
            </View>
            <FlatList 
                data={color}
                style={styles.flatList}
                keyExtractor={ (item, index) => `${index}`}
                renderItem={ ( {item} ) => {
                    const { red, green ,blue } = item
                    return (
                        <View style={styles.flatListContainer} >
                            <View style={[styles.colorTab,
                                {
                                backgroundColor: `rgb(${red},${green},${blue})`,
                            }]} />
                            <Text style = { styles.colorText }>{red}</Text>
                            <Text style = { styles.colorText }>{green}</Text>
                            <Text style = { styles.colorText }>{blue}</Text>
                        </View>
                    )
                }}
            />
        </View>

    );
}

export default RandomColor;