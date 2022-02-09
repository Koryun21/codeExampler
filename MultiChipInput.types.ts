import { Control } from "react-hook-form/dist/types/form";
import { isActiveType } from "@sdge-utils/globalTypes";

export type MultiChipInputProps = {
  label?: string;
  value: string[];
  onChange: (item: string[]) => void;
  errorMessage?: string;
};

export type MultiChipInputWithControllerProps = {
  label?: string;
  control: Control;
  name: `${string}.${string}` | `${string}.${number}` | `${string}`;
  errorMessage?: string;
  defaultValue?: string[];
};

export type ChipFormControlTypes = isActiveType & { isError?: boolean };
