import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './component/SearchBar';

const SearchScreen = () => {
    const [ term, setTerm ] = useState("");
    return (
        <View>
            <SearchBar 
                term = {term} 
                onTermChange = { ( newTerm ) => setTerm( newTerm ) }
                onTermSubmit = { () => console.log("Term was submitted") } 
            />
            <Text>{term}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    
})

export default SearchScreen;