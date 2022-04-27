import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundStyle:{
        flex: 1,
        padding: 10,
        backgroundColor: "lightblue",
        paddingTop: "50%"
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: "800",
        alignSelf: "center",
        padding: 20,
    },
    textContainer: {
        width: "80%",
        marginHorizontal: "10%",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 6,
    },
    textStyle: {
        fontSize: 18,
        padding: 10,
        textAlign: "center",
        flex:1
    },
    visibility: {
        justifyContent: 'center',
        paddingRight: 10,
    },
    passwordText: {
        marginBottom: 3,
        marginHorizontal: "10%",
        marginTop: 3
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "80%",
        alignSelf: "center",
    },
    btnStyle: {
        backgroundColor: "#808080",
        width: 100,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: 8
    }
})

export default styles;