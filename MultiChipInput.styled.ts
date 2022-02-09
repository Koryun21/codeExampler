import styled from "@emotion/styled";
import * as MUI from "@mui/material";
import { StyledPropsWithTheme } from "../../utils/globalTypes";
import { ChipFormControlTypes } from "./MultiChipInput.types";

const ChipFormControl = styled(MUI.Box)<
  StyledPropsWithTheme<ChipFormControlTypes>
>`
  position: relative;
  border: 1px solid
    ${({ theme, isError }) =>
      isError
        ? theme.palette.formItems.errorColor[100]
        : theme.palette.formItems.borderColor[100]};
  border-radius: 4px;
  height: auto;
  min-height: 40px;
  padding: 2.5px 7px;
  max-width: 500px;
  background-color: inherit;
  margin-top: ${({ isActive }) => (isActive ? "-6px" : "0")};

  &:hover {
    border-color: ${({ theme }) => theme.palette.formItems.borderHover[100]};
  }
`;

const Label = styled.legend<StyledPropsWithTheme<ChipFormControlTypes>>`
  font-family: ${({ theme }) => theme.typography.fontFamily};

  transition-duration: 0.08s;
  user-select: none;
  ${({ isActive, theme, isError }) =>
    isActive
      ? `  
      letter-spacing: 0.15px;
      color: ${theme.palette.formItems.legendColor[100]};
      font-size: 12px;
      margin-left: 3px;
      padding: 0 4px;
      line-height: 12px;
      top: -7px;
    `
      : `  
      position: absolute;
      color: ${
        isError
          ? theme.palette.formItems.errorColor[100]
          : theme.palette.formItems.labelColor[100]
      };
      padding: 0;
      font-weight: ${theme.typography.fontWeightRegular};
      font-size: 16px;
      line-height: 1;
      top: 10px;
      left: 11px;
  `};
`;

const Input = styled.input<StyledPropsWithTheme>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  background-color: transparent;
  outline: none;
  border: none;
  min-height: 28px;
  width: auto;
  color: ${({ theme }) => theme.palette.formItems.textColor[100]};
  font-size: 16px;
`;

const Chip = styled(MUI.Chip)`
  width: min-content;
  height: 23px;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Error = styled.p<StyledPropsWithTheme>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.palette.formItems.errorColor[100]};
  font-size: 12px;
  letter-spacing: 0.5px;
  margin: 5px 0 -5px;
  padding: 0;
`;

export const Styled = {
  ChipFormControl,
  Input,
  Chip,
  Content,
  Label,
  Error,
};
