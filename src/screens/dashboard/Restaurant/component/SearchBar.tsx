import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import  Feather  from "react-native-vector-icons/Feather";

type Props = {
    term: string;
    onTermChange: (newTerm:string) => void;
    onTermSubmit: () => void;
}


const SearchBar:React.FC<Props> = ( { term, onTermChange, onTermSubmit } ) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather 
                name = "search" 
                style = { styles.iconStyle }
            />
            <TextInput 
                autoCapitalize = "none"
                autoCorrect = { false }
                placeholder='search'
                style = { styles.inputStyle }
                value = { term }
                onChangeText = { newTerm => onTermChange( newTerm ) }
                onEndEditing = { () => onTermSubmit() }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop:15,
        backgroundColor: "#B0B0B0",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex:1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
    
})

export default SearchBar;