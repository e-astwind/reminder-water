import { View, Text } from "react-native";
import React from "react";
import Icon from "../../components/Icon";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Icon familyName="AntDesign" name="API" />
    </View>
  );
}
