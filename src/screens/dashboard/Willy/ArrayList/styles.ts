import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
      fontSize: 20,
      padding: 15,
  },
  arrayContainer: {
      flex: 1,
      justifyContent:"flex-start",
  },
  arrayData: {
      fontSize: 30,
      width:"100%",
      paddingHorizontal: 30,
      paddingVertical:15,
      marginVertical: 5,
      borderWidth: 2,
      borderRadius: 20
  }

});

export default styles;
