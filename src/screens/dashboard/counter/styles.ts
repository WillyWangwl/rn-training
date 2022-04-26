import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: "#000"
    },
    text:{
        marginTop: 15,
        fontSize: 25,
        color: "#fff",
        fontFamily: "MarkerFelt-Wide",
    },
    button: {
        height:60,
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: "#808080",
        borderRadius: 10,
        width: "50%",
        margin: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor:"#fff",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius:8,
    },
    textInput: {
        width: 30,
        height:30,
        backgroundColor: "#fff",
    },
    
})

export default styles;