import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';


import { Button } from '../../components/Button';

import {
    Container,
    Slogan,
    Content,
    Logo
} from './styles';


type RootStackParamList = {
    SignUp: undefined;
    SignIn: undefined;
    Welcome: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "SignUp">;

export function Welcome() {

    const { navigate } = useNavigation<NavigationProps>();
    const theme = useTheme();

    function handleNavigateSignUp (){
        navigate("SignUp");
    }

    function handleNavigateSignIn (){
        navigate("SignIn");
    }


    return (
        <Container>
            <StatusBar
                barStyle='light-content'
            />
            <Content>
                <Logo source={require("../../assets/logo3.png")} />
                <Slogan>Torna-se a melhor versão de você mesmo!</Slogan>
                <Button
                    title='Cadastre-se'
                    color= {theme.colors.shape}
                    onPress={handleNavigateSignUp}
                />
                <Button
                    title='Entrar'
                    color={theme.colors.shape}
                    onPress={handleNavigateSignIn}
                />
            </Content>
        </Container>
    );
}