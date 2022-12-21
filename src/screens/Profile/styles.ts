import styled from 'styled-components/native';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`

    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
`;


export const WrapperPhotoBtn = styled.View`
    align-items: center;
`;

export const Photo = styled(Image)`

    width: 120px;
    height: 120px;
    border: 1px solid white;
    border-radius: 60px;
    position: absolute;
`;

export const Icon = styled(BorderlessButton)`

    top: 90px; 
    left: 40px;
`;

export const NameUser = styled.Text`

    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    top: 80px;
    padding: 20px 0px 60px 0px;
`;

export const ContainerForm = styled.View`

    width: 100%;
    height: 80%;
    background-color: ${({ theme }) => theme.colors.shape} ;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
`;

export const Form = styled.View`
    margin-top: 20px;
    padding: 0px 20px 0px 20px;
    align-items: center;
`;

export const TextEdit = styled.Text`

color: ${({ theme }) => theme.colors.shape};
    
    font-size: ${RFValue(20)}px;  
    color: ${({ theme }) => theme.colors.text};
    padding: 4px;
`;
