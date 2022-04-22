import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin: "5%",
        alignItems: 'center',
    },
    containerCard:{
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        padding: "5%",
        alignItems: 'center',
    },
    containerColorText: {
        flexDirection: 'row',
        marginRight: 10,
    },
    containerColorTextOuter: {
        width: "60%",
        height: 100,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    textColor: {
        width: "50%",
        fontSize: 18,
        fontWeight: 'bold',
    },
    box: {
        width:100,
        height:100,
        borderWidth: 1,
        borderRadius: 30,
    },
})

export default styles;