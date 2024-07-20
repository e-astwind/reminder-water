import React from "react";
import { Container, MetricGenderLabel, MetricsContainerGender } from "./styles";
import RadioButton from "../../../components/RadioButton";
import { useTheme } from "styled-components/native";
import Icon from "../../../components/Icon";
import Button from "../../../components/Button";
import { userRepository } from "../../../repositorys/userRepository/userRepository";

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
      <MetricsContainerGender>
        <Icon
          familyName="MaterialCommunityIcons"
          name="gender-male-female-variant"
          size={24}
          color={theme.primary}
        />
        <MetricGenderLabel>Selecione um genero</MetricGenderLabel>
      </MetricsContainerGender>
      <RadioButton
        layout="row"
        onSelectedIdChange={(id) => setGender(id as TGender)}
        containerStyle={{ justifyContent: "space-around" }}
        labelStyle={{ fontSize: 16 }}
        radioButtons={radioButtons}
      />
      <Button variant="primary" label="Salvar" onPress={handleSaveGender} />
    </Container>
  );
}
