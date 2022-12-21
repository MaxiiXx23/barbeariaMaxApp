import React, { useRef, useState } from 'react';

import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    Photo,
    WrapperPhotoBtn,
    Icon,
    NameUser,
    ContainerForm,
    Form,
    TextEdit
} from './styles';

import { Input } from '../../components/Input';
import { ButtonIcon } from '../../components/ButtonIcon';


export function Profile() {

    const theme = useTheme();

    return (
        <KeyboardAvoidingView behavior='height' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <WrapperPhotoBtn>
                            <Photo
                                source={{ uri: "https://avatars.githubusercontent.com/u/48772842?v=4" }}
                            />
                            <Icon
                                onPress={() => console.log("Mudei a foto")}
                            >
                                <MaterialCommunityIcons
                                    name="camera"
                                    size={30}
                                    color={theme.colors.background_secondary}
                                />
                            </Icon>
                        </WrapperPhotoBtn>
                        <NameUser>
                            Max Jonatas
                        </NameUser>
                    </Header>

                    <ContainerForm>

                        <Form>
                            <TextEdit>Informações</TextEdit>

                            <Input
                                iconName="person"
                                textAlign='center'
                                value="Max Jonatas Da Silva Lima"
                            />

                            <Input
                                iconName="mail"
                                textAlign='center'
                                value="max.test@gmail.com"
                                keyboardType='email-address'
                            />

                            <Input
                                iconName="phone"
                                textAlign='center'
                                value="(11)00000000"
                                keyboardType='phone-pad'
                            />

                            <ButtonIcon
                                iconName='edit'
                                title='Editar Dados'
                                color={theme.colors.background_secondary}
                            />

                        </Form>

                    </ContainerForm>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}