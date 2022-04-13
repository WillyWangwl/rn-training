import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabStack from "./BottomTabStack";
import HomeScreen from "../screens/dashboard/home";
import InfoScreen from "../screens/dashboard/info";
import LoginScreen from "../screens/login";
import WelcomeScreen from "../screens/welcome";
import { NavigationNames } from "../constants/navigation-names";
//add on
import WillyScreen from "../screens/dashboard/Willy";
import Demo from "../screens/dashboard/demo";

type RootStackParamList = {
  Login: undefined;
  Welcome: undefined;
  Dashboard: undefined;
  Demo: undefined;
  Info: undefined;
  Willy: undefined;
};  

const Stack = createStackNavigator<RootStackParamList>();

export const AppStack = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Welcome"}
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name={NavigationNames.Login}
          component={LoginScreen}
          options={{
            title: "Login",
            headerLeft: () => null
          }}
        />
        <Stack.Screen
          name={NavigationNames.Welcome}
          component={WelcomeScreen}
          options={{
            title: "Welcome"
          }}
        />
        <Stack.Screen
          name={NavigationNames.Dashboard}
          component={BottomTabStack}
          options={{
            headerLeft: () => null
          }}
        />
        <Stack.Screen
          name={NavigationNames.Demo}
          component={Demo}
          options={{
            title: "Demo"
          }}
        />
        <Stack.Screen
          name={NavigationNames.Info}
          component={InfoScreen}
          options={{
            title: "Info"
          }}
        />
        <Stack.Screen
          name={NavigationNames.Willy}
          component={WillyScreen}
          options={{
            title: "My App"
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
