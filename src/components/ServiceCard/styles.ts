import styled from "styled-components/native";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 150px;
    height: 250px;
    margin-right: 8px;
`;

export const ImageService = styled(Image)`
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid white;
    border-radius: 10px;
`;

export const ContainerDetails = styled.View`
    width: 100%;
    height: 10%;
    justify-content: space-between;
    align-items: center;
    top: 200px;
    padding: 2px;
`;

export const WrapperInfos = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const NameService = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(10)}px;
    font-weight: bold;

`;

export const WrapperRating = styled.View`
    flex-direction: row;
`;

export const TextRating = styled.Text`
    color: ${({ theme }) => theme.colors.text_rating};
    font-size: ${RFValue(12)}px;
`;
