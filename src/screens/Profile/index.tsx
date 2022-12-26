import React, { useRef, useState } from 'react';

import {
    KeyboardAvoidingView,
    Keyboard,
    Alert
} from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import * as Yup from "yup";
import * as ImagePicker from 'expo-image-picker';

import { useAuth } from '../../hooks/auth';
import { BASE_URL } from '@env';
import { api } from '../../services/axios';

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

const FormData = global.FormData;

export function Profile() {

    const theme = useTheme();
    const { user } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [photo, setPhoto] = useState(user.photo);
    const [uriImgPhone, setUriImgPhone] = useState("");


    async function handleEditData() {
        try {
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required("Nome é obrigatório."),
                email: Yup.string()
                    .required("E-mail é obrigatório.")
                    .email("E-mail inválido."),
                phone: Yup.string()
                    .required("Número de telefone é obrigatório.")
                    .length(11, "Número de telefone inválido.")
            })

            await schema.validate({ name, email, phone });

            await api.put("/users/update", {
                name,
                email,
                phone
            })
                .then(() => {
                    return Alert.alert("Dados Atualizados com sucesso!");
                })

        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                return Alert.alert("Opa!", error.message);
            }
            return Alert.alert(
                "Opa! Ocorreu um erro inesperado.",
                "Verifique sua conexão com a internet e tente novamente."
            )
        }
    }

    async function handleChangeImage() {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            selectionLimit: 1,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        const { canceled, assets } = result;

        if (!canceled) {
            setUriImgPhone(assets[0].uri);
            const data = new FormData();

            const path = assets[0].uri.split('/');
            const name = path[path.length - 1];

            const infosFile = {
                uri: assets[0].uri,
                type: assets[0].type,
                name: "img"
            }

            data.append("photo", JSON.stringify(infosFile))
            console.log(data)
            // criar rota para upload de foto de perfil do usuário
            await api.patch("/users/upload/photo", data, 
            {
                headers: {
                    "Content-Type": "multipart/form-data",    
                },

            })
                .then(() => console.log("Photo uploaded."))
                .catch((error) => console.log(error.message))
        }

    }

    return (
        <KeyboardAvoidingView behavior='height' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <WrapperPhotoBtn>
                            <Photo
                                source={{ uri: uriImgPhone ? uriImgPhone : `${BASE_URL}${photo}` }}
                            />
                            <Icon
                                onPress={handleChangeImage}
                            >
                                <MaterialCommunityIcons
                                    name="camera"
                                    size={30}
                                    color={theme.colors.background_secondary}
                                />
                            </Icon>
                        </WrapperPhotoBtn>
                        <NameUser>
                            {name}
                        </NameUser>
                    </Header>

                    <ContainerForm>

                        <Form>
                            <TextEdit>Informações</TextEdit>

                            <Input
                                iconName="person"
                                textAlign='center'
                                maxLength={40}
                                onChangeText={setName}
                                value={name}
                            />

                            <Input
                                iconName="mail"
                                textAlign='center'
                                editable={false}
                                keyboardType='email-address'
                                value={email}
                            />

                            <Input
                                iconName="phone"
                                textAlign='center'
                                keyboardType='phone-pad'
                                onChangeText={setPhone}
                                value={phone}
                            />

                            <ButtonIcon
                                iconName='edit'
                                title='Editar Dados'
                                color={theme.colors.background_secondary}
                                onPress={handleEditData}
                            />

                        </Form>

                    </ContainerForm>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}