import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Details from "../screens/Details";

const AppStack = createStackNavigator();

const Main = () => {

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
           <AppStack.Screen
              name="Details"
              component={Details}
              options={{ headerShown: false }}
            />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
