import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`

    justify-content: space-between;
    align-items: center;
    padding: 0px 12px 0px 16px;

`;

export const ContainerButton = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center; 
  background: ${({theme}) => theme.colors.background_secondary};
  border: 1px solid white;
  border-radius: 20px;
`;

export const Name = styled.Text`
    margin-top: 12px;
    color:${({ theme }) => theme.colors.text};
    font-size: ${RFValue(10)}px;
    text-align: center;
`;