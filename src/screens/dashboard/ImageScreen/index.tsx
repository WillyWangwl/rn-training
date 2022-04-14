import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import { Images } from '../demo';

const ImageScreen = ({item}:Images) => {
    console.log(item)
    return (
        <View style={styles.container}>
            <Image source={item.source} style={styles.imageStyle}/>
            <Text style={styles.textStyle}>{item.title}</Text>
            <Text style={styles.textStyle}>Score : {item.score} / 10</Text>
        </View>
    );
}

export default ImageScreen;