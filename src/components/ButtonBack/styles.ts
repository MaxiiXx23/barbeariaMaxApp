import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


export const Container = styled.View`
  width: 40px;
  height: 40px;
  margin: 0px 0px 0px 10px;
  justify-content: center;
  align-items: center; 
  background: ${({theme}) => theme.colors.background_primary};
  border: 1px solid white;
  border-radius: 20px;
`;

export const Icon = styled(BorderlessButton)`

`;

