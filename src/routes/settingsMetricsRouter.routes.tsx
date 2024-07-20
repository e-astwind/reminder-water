import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GenderMetricSetting from "../screens/MetricSetting";

export default function MainRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="GenderMetricSetting"
          component={GenderMetricSetting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
