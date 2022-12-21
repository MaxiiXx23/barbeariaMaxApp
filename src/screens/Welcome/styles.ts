import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
  justify-content: flex-end;
`;

export const Slogan = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-weight: bold;
    text-align: center;
    font-size: 28px;
    margin-bottom: 50px;
`;

export const Logo = styled(Image)`
    width: 200px;
    height: 200px;
    margin-bottom: 100px;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    bottom: 100px
`;


