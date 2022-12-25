import styled from "styled-components/native";
import { Image, ScrollView, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    padding: 40px 20px 40px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-right-radius: 60px;
`;

export const ImageProfile = styled(Image)`
    width: 60px;
    height: 60px;
    border: 1px solid white;
    border-radius: 30px;
`;

export const ContainerButton = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center; 
  background: ${({ theme }) => theme.colors.background_secondary};
  border: 1px solid white;
  border-radius: 20px;

`;

export const ContainerSearch = styled.View`

    width: 100%;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const InputSearch = styled(TextInput)`

    width: 80%;
    padding: 20px;
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(14)}px;
    border: 1px solid white;
    border-radius: 8px;
`;

export const ContainerListCategories = styled.View`

    padding: 20px 10px 20px 10px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background_third};
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
`;

export const TitleCategories = styled.Text`

    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(24)}px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const ContainerPopularServices = styled.View`
    padding: 5px;
    align-items: center;
`;

export const TitleServices = styled.Text`

    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
    font-weight: bold;
    margin-bottom: 10px;
`;