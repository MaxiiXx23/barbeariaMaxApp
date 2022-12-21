import { TextInput, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface Props {
    isFocused: boolean;
}

export const Container = styled(View)<Props>`
  flex-direction: row;
  justify-content: center;
  margin: 12px 0px 12px 0px;
  border: 1px solid white;
  border-radius: 8px;
  ${({ isFocused, theme }) => isFocused && css`
      border-color: ${theme.colors.shape};
  `}
`;

export const IconContainer = styled(View)<Props>`
    height: 56px;
    width: 55px;
    align-items: center;
    margin-right: 2px;
    justify-content: center;
    border-right-width: 1px;
    border-right-color: white;

    ${({ isFocused, theme }) => isFocused && css`
      border-right-color: ${theme.colors.shape};
  `}

`;

export const InputText = styled(TextInput)`
  flex:1;
  margin-left: 5px;
  color: white;
  font-size: ${RFValue(14)}px;
`;