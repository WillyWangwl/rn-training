import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{

        margin: "5%",
        paddingHorizontal: 30,

    },
    addColorBtn:{
        backgroundColor: "lightgreen",
        margin: 30,
        borderRadius: 50,
        width: "50%",
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    flatListContainer:{
        flexDirection: 'row',
        width: "100%",
        backgroundColor: "lightgrey",
    },
    colorText:{
        fontSize: 18,
        width: "20%",
        height: 40,
        borderWidth: 0.5,
        borderColor: "#fff",
        textAlign: 'center',
        padding: 8
    },
    colorTab:{
        width: "40%",
        borderWidth: 0.5,
        borderColor: "#fff",
    },
    header: {
        fontWeight: 'bold',
        backgroundColor: "#003366",
        color: "#fff",
    },
    flatList:{
        borderWidth: 1,
        borderColor: "#000",
        borderTopColor: "#fff"
    }
})

export default styles;