import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import History from "../screens/History";
import Header from "../components/Header";
import Icon from "../components/Icon";

export default function MainRoutes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header() {
              return (
                <Header
                  title="Nível de Hidratação"
                  leftIcon={
                    <Icon familyName="MaterialCommunityIcons" name="waves" />
                  }
                  rightIcon={
                    <Icon familyName="Ionicons" name="notifications-outline" />
                  }
                />
              );
            },
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
