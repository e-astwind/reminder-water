import { Text } from "react-native";
import React from "react";
import {
  Container,
  MetricIcon,
  MetricLabel,
  MetricValue,
  MetricsContainer,
} from "./styles";
import Icon from "../../components/Icon";
import { useTheme } from "styled-components/native";

export default function Settings({ navigation }: any) {
  const theme = useTheme();
  const metrics = {
    gender: {
      label: "Gênero",
      icon: (
        <Icon
          familyName="MaterialCommunityIcons"
          name="gender-male-female-variant"
          size={24}
          color={theme.primary}
        />
      ),
      value: "Masculino",
      component: <Text>Componente</Text>,
      router: "GenderMetricSetting",
    },
    weight: {
      label: "Peso",
      icon: (
        <Icon
          familyName="AntDesign"
          name="skin"
          size={24}
          color={theme.primary}
        />
      ),
      value: "80kg",
      component: <Text>Componente</Text>,
      router: "WeightMetricSetting",
    },
    age: {
      label: "Idade",
      icon: (
        <Icon
          familyName="Entypo"
          name="500px"
          size={24}
          color={theme.primary}
        />
      ),
      value: "25 anos",
      component: <Text>Componente</Text>,
      router: "AgeMetricSetting",
    },
    height: {
      label: "Altura",
      icon: (
        <Icon
          familyName="AntDesign"
          name="user"
          size={24}
          color={theme.primary}
        />
      ),
      value: "1,80m",
      component: <Text>Componente</Text>,
      router: "HeightMetricSetting",
    },
    goal: {
      label: "Meta",
      icon: (
        <Icon
          familyName="AntDesign"
          name="user"
          size={24}
          color={theme.primary}
        />
      ),
      value: "2L",
      component: <Text>Componente</Text>,
      router: "GoalMetricSetting",
    },
    wake_up_time: {
      label: "Horário de acordar",
      icon: (
        <Icon
          familyName="AntDesign"
          name="user"
          size={24}
          color={theme.primary}
        />
      ),
      value: "7:00",
      component: <Text>Componente</Text>,
      router: "WakeUpTimeMetricSetting",
    },
    sleep_time: {
      label: "Horário de dormir",
      icon: (
        <Icon
          familyName="AntDesign"
          name="user"
          size={24}
          color={theme.primary}
        />
      ),
      value: "22:00",
      component: <Text>Component Componente</Text>,
      router: "SleepTimeMetricSetting",
    },
  };

  return (
    <Container>
      {Object.entries(metrics).map(([key, value]) => (
        <MetricsContainer
          key={key}
          onPress={() => navigation.navigate(value.router || "MetricSetting")}
        >
          <MetricIcon>
            {value.icon}
            <MetricLabel>{value.label}</MetricLabel>
          </MetricIcon>
          <MetricValue>{value.value}</MetricValue>
        </MetricsContainer>
      ))}
    </Container>
  );
}
