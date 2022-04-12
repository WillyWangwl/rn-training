import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';

import { friends } from './ArrayData';

const ArrayScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Array List</Text>
            <FlatList
                data={friends}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={styles.arrayContainer}>
                        <Text style={styles.arrayData}>

                            Name : {item.name} {"\n"}
                            Age     :{item.age}
                        </Text>
                    </View>
                } />
        </View>
    );
}

export default ArrayScreen;