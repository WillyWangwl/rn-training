import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../../contexts/AppContext";
import { NavigationNames } from "../../../constants/navigation-names";
import styles from "./styles";

const Home: React.FC = () => {
  const { state } = useContext(AppContext);
  const { navigate } = useNavigation();

  console.log("at Home page", state.isLoggedIn);
  const buttonTitle = state.isLoggedIn ? "Detail Page" : "Detail Page(Need Login)";
  return (
    <View style={styles.container}>
      <Text>
        Home Page: You don't need to login to view this page: (Login Status: {`${state.isLoggedIn}`})
      </Text>
      <Button title={buttonTitle} onPress={()=>navigate(NavigationNames.Detail)}/>
      <Button title="Demo" onPress={()=>navigate(NavigationNames.Demo)}/>
      <Button title="Info (No Need Login)" onPress={()=>navigate(NavigationNames.Info)}/>
      <Button title="Willy Page" onPress={()=>navigate(NavigationNames.Willy)}/>
      <Button title="Counter Page" onPress={()=>navigate(NavigationNames.CounterScreen)}/>
      <Button title="Random Color Page" onPress={()=>navigate(NavigationNames.RandomColor)}/>
      <Button title="Square Page" onPress={()=>navigate(NavigationNames.SquareScreen)}/>
      <Button title="Text Page" onPress={()=>navigate(NavigationNames.TextScreen)}/>
      <Button title="Restaurant" onPress={()=>navigate(NavigationNames.SearchScreen)}/>
    </View>
  );
};

export default Home;
