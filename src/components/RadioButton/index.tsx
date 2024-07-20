import React, { useMemo, useState } from "react";
import RadioGroup, { RadioGroupProps } from "react-native-radio-buttons-group";

export default function RadioButton({
  radioButtons,
  onSelectedIdChange,
  ...props
}: RadioGroupProps & {
  onSelectedIdChange?: (id: string) => void;
}) {
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <RadioGroup
      radioButtons={useMemo(
        () => radioButtons.map((item) => ({ ...item, id: item.id.toString() })),
        [radioButtons]
      )}
      onPress={(value: string) => {
        setSelectedId(value);
        onSelectedIdChange && onSelectedIdChange(value);
      }}
      selectedId={selectedId}
      {...props}
    />
  );
}
