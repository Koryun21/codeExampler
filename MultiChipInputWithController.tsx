import { FC } from "react";
import { Controller } from "react-hook-form";
import MultiChipInput from "./MultiChipInput";
import { MultiChipInputWithControllerProps } from "./MultiChipInput.types";

const MultiChipInputWithController: FC<MultiChipInputWithControllerProps> = ({
  control,
  label,
  name,
  errorMessage,
  defaultValue,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <MultiChipInput
          value={value}
          onChange={onChange}
          label={label}
          errorMessage={errorMessage}
        />
      )}
    />
  );
};

export default MultiChipInputWithController;
