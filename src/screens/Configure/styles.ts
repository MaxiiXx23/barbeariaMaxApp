import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(20)}px;
    font-weight: bold;
    margin: 48px 0px 48px 0px;
`;

export const ContainerConfigs = styled.View`
    width: 100%;
    height: 80%;
    padding: 16px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.shape};
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    align-items: center;
    justify-content: center;
`;

export const ListConfigs = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    width: 100%;
    height: 80%;
    padding: 16px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.shape};
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;