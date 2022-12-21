import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    width: 100%;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    background-color: ${({theme}) => theme.colors.background_secondary};
    border-radius: 8px;
`;

export const IconContainer = styled.View`
    align-items: center;
    justify-content:center;
`;

export const ContainerDescription = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(16)}px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(12)}px;
`;
