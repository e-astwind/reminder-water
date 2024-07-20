import React from "react";
import {
  Container,
  MetricLabel,
  MetricsContainer,
  AlignContainer,
} from "./styles";
import RadioButton from "../../components/RadioButton";
import { useTheme } from "styled-components/native";
import Icon from "../../components/Icon";
import Button from "../../components/Button";
import { userRepository } from "../../repositorys/userRepository/userRepository";
import { TextInput } from "react-native";

type TGender = "1" | "2";
export default function GenderMetricSetting() {
  const theme = useTheme();
  const { updateUser } = userRepository();

  const [gender, setGender] = React.useState<TGender>("2");
  const radioButtons = [
    { label: "Masculino", id: "1", value: "male", color: theme.primary },
    { label: "Feminino", id: "2", value: "female", color: theme.primary },
  ];
  const handleSaveGender = async () => {
    const genderMapped = {
      "1": "male",
      "2": "female",
    };

    await updateUser({
      gender: genderMapped[gender],
    });
  };

  return (
    <Container>
      <AlignContainer>
        <MetricsContainer>
          <Icon
            familyName="MaterialCommunityIcons"
            name="gender-male-female-variant"
            size={24}
            color={theme.primary}
          />
          <MetricLabel>Selecione um genero</MetricLabel>
        </MetricsContainer>
        <RadioButton
          layout="row"
          onSelectedIdChange={(id) => setGender(id as TGender)}
          containerStyle={{ justifyContent: "space-around" }}
          labelStyle={{ fontSize: 16 }}
          radioButtons={radioButtons}
        />
      </AlignContainer>
      <AlignContainer>
        <MetricsContainer>
          <Icon
            familyName="MaterialCommunityIcons"
            name="weight-kilogram"
            size={24}
            color={theme.primary}
          />
          <MetricLabel>Seu Peso</MetricLabel>
        </MetricsContainer>
        <TextInput
          placeholder="Digite seu peso"
          keyboardType="numeric"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: theme.primary,
            color: theme.text,
            paddingHorizontal: 18,
          }}
        />
      </AlignContainer>
      <AlignContainer>
        <MetricsContainer>
          <Icon
            familyName="MaterialCommunityIcons"
            name="clock-time-four-outline"
            size={24}
            color={theme.primary}
          />
          <MetricLabel>Horario de levantar</MetricLabel>
        </MetricsContainer>
        <TextInput
          placeholder="Digite o horario que você acorda"
          keyboardType="numeric"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: theme.primary,
            color: theme.text,
            paddingHorizontal: 18,
          }}
        />
      </AlignContainer>
      <AlignContainer>
        <MetricsContainer>
          <Icon
            familyName="MaterialCommunityIcons"
            name="clock-time-four-outline"
            size={24}
            color={theme.primary}
          />
          <MetricLabel>Horario de dormir</MetricLabel>
        </MetricsContainer>
        <TextInput
          placeholder="Digite o horario que você dorme"
          keyboardType="numeric"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: theme.primary,
            color: theme.text,
            paddingHorizontal: 18,
          }}
        />
      </AlignContainer>
      <Button variant="primary" label="Salvar" onPress={handleSaveGender} />
    </Container>
  );
}
