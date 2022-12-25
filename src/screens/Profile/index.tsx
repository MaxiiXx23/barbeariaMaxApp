import React, { useRef, useState } from 'react';

import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from 'styled-components';

import { useAuth } from '../../hooks/auth';
import { BASE_URL } from '@env';

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
    const { user } = useAuth();

    return (
        <KeyboardAvoidingView behavior='height' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <WrapperPhotoBtn>
                            <Photo
                                source={{ uri: `${BASE_URL}${user.photo}` }}
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
                            {user.name}
                        </NameUser>
                    </Header>

                    <ContainerForm>

                        <Form>
                            <TextEdit>Informações</TextEdit>

                            <Input
                                iconName="person"
                                textAlign='center'
                                value={user.name}
                            />

                            <Input
                                iconName="mail"
                                textAlign='center'
                                value={user.email}
                                keyboardType='email-address'
                            />

                            <Input
                                iconName="phone"
                                textAlign='center'
                                value={user.phone}
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