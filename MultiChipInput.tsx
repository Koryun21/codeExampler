import { Styled } from "./MultiChipInput.styled";
import { FC, useState, KeyboardEvent, ChangeEvent, useRef } from "react";
import { MultiChipInputProps } from "@sdge-components/MultiChipInput/MultiChipInput.types";
import { Box } from "@mui/material";

const MultiChipInput: FC<MultiChipInputProps> = ({
  label,
  onChange,
  value = [],
  errorMessage,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const inputRef = useRef(null);

  const labelActive = value.length > 0 || inputValue !== "" || inputFocused;
  const emailsSymbolsMax = inputValue.length > 45;

  const handleSetChipValue = () => {
    setInputFocused(false);
    if (!value.includes(inputValue) && inputValue.trim() && !emailsSymbolsMax) {
      onChange([...value, inputValue]);
      setInputValue("");
    }
  };

  const handleSetChipValueWithEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      !value.includes(inputValue) &&
      inputValue.trim() &&
      e.which === 13 &&
      !emailsSymbolsMax
    ) {
      onChange([...value, inputValue]);
      setInputValue("");
    }
    if (e.which === 8 && inputValue === "") {
      const tempState = value.slice();
      tempState.pop();
      onChange(tempState);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeleteChip = (index: number) => {
    const tempState = value.slice();
    tempState.splice(index, 1);
    onChange(tempState);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  return (
    <Box>
      <label>
        <Styled.ChipFormControl
          component="fieldset"
          isActive={labelActive}
          isError={!!errorMessage}
        >
          {label && (
            <Styled.Label isActive={labelActive} isError={!!errorMessage}>
              {label}
            </Styled.Label>
          )}
          <Styled.Content>
            {value.map((item: string, index: number) => {
              return (
                <Styled.Chip
                  label={item}
                  key={item}
                  onDelete={() => handleDeleteChip(index)}
                />
              );
            })}
            <Styled.Input
              name="input"
              onBlur={handleSetChipValue}
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              onKeyDown={handleSetChipValueWithEnter}
              value={inputValue}
              autoComplete="off"
              ref={inputRef}
            />
          </Styled.Content>
        </Styled.ChipFormControl>
      </label>
      {(!!errorMessage || emailsSymbolsMax) && (
        <Styled.Error>
          {emailsSymbolsMax ? "Email can has only 45 symbols" : errorMessage}
        </Styled.Error>
      )}
    </Box>
  );
};

export default MultiChipInput;
