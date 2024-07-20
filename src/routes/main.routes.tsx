import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import History from "../screens/History";
import Header from "../components/Header";
import Icon from "../components/Icon";
import GenderMetricSetting from "../screens/SettingsMetricsScreens/GenderMetricSetting";

export default function MainRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header({ navigation }) {
              return (
                <Header
                  title="Nível de Hidratação"
                  leftIcon={
                    <Icon
                      familyName="MaterialCommunityIcons"
                      name="waves"
                      onPress={() => navigation.navigate("History")}
                    />
                  }
                  rightIcon={
                    <Icon
                      familyName="Ionicons"
                      name="settings-outline"
                      onPress={() => navigation.navigate("Settings")}
                    />
                  }
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            header({ navigation }) {
              return (
                <Header
                  title="Configurações"
                  leftIcon={
                    <Icon
                      familyName="Ionicons"
                      name="arrow-back-outline"
                      onPress={() => navigation.goBack()}
                    />
                  }
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            header({ navigation }) {
              return (
                <Header
                  title="Histórico de Hidratação"
                  leftIcon={
                    <Icon
                      familyName="Ionicons"
                      name="arrow-back-outline"
                      onPress={() => navigation.goBack()}
                    />
                  }
                />
              );
            },
          }}
        />
        <Stack.Screen
          options={{
            header({ navigation }) {
              return (
                <Header
                  title="Suas informações"
                  leftIcon={
                    <Icon
                      familyName="Ionicons"
                      name="arrow-back-outline"
                      onPress={() => navigation.goBack()}
                    />
                  }
                />
              );
            },
          }}
          name="GenderMetricSetting"
          component={GenderMetricSetting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
