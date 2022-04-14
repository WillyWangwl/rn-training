import React, { cloneElement } from 'react';
import { Text, View, ImageRequireSource } from 'react-native';
import styles from './styles';
import ImageScreen from '../ImageScreen';


const images = [
    { 
        title: "Forest",
        source: require('../../../assets/forest.jpg'),
        score: 9,
    },
    { 
        title: "Beach",
        source: require('../../../assets/beach.jpg'),
        score: 7,
    },
    { 
        title: "Mountain",
        source: require('../../../assets/mountain.jpg'),
        score: 10,
    },
]
export type Images = {
    title: string,
    source: ImageRequireSource,
    score: number,
}


const Demo:React.FC = () =>  {
    return (
        <View style={styles.container}>
            <ImageScreen item={images[0]}/>
            <ImageScreen item={images[1]}/>
            <ImageScreen item={images[2]}/>
        </View>
    );
}

export default Demo;