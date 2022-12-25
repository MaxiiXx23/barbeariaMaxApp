import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import * as Yup from "yup";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';


import {
  Container,
  Header,
  Form,
  Title,
  WrapperLine,
  TextLine,
  Line,
  WrapperAsk,
  TextAsk,
  TextRoute
} from './styles';

import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';
import { InputPassword } from '../../components/InputPassword';
import { api } from '../../services/axios';
import { NavigationProps } from '../../navigation/navigationStackProps';


export function SignUp() {
  const navigation = useNavigation<NavigationProps>();
  const theme = useTheme();
  const formAnimation = useSharedValue(0);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetPassword, setRepetPassword] = useState('');

  const formStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(formAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(formAnimation.value,
            [0, 50],
            [-50, 0]
          )
        }
      ]
    }
  });

  function handleBack() {
    navigation.goBack();
  }

  function handleNavigateLogin(){
      navigation.navigate("SignIn");
  }

  async function handleSignUp(){

    try{

      const schema = Yup.object().shape({
        name: Yup.string()
            .required('Nome é obrigatório.'),
        phone: Yup.string()
          .required('Número de telefone é obrigatório.')
          .length(11, 'Número de telefone inválido'),
        email: Yup.string()
          .required('E-mail é obrigatório.')
          .email('E-mail inválido'),
        password: Yup.string()
          .required('Senha é obrigatória.'),
        repetPassword: Yup.string()
          .required('Confimação de senha é obrigatória.')
      });

      if(password !== repetPassword){
        return Alert.alert('Opa!', 'As senhas precisam ser iguais.')
      }
  
      await schema.validate({name, phone, email, password, repetPassword});

      // SignUp user

      await api.post("/users/", {
        name,
        email,
        phone,
        password
      })
      .then(() => {
        navigation.navigate("SignIn", {
          title: "Conta criada com sucesso!",
          content: "Conecte-se com seus dados e aproveite!"
        })
      })

    }catch(error){
      if(error instanceof Yup.ValidationError){
        return Alert.alert('Opa!', error.message);
      }else {
        console.log(error.message)
        return Alert.alert(
          'Error no cadastro', 
          'Ocorreu um error no cadastro, verifique sua conexão com a internet e tente novamente');
      }
    }



  }

  useEffect(() => {
    formAnimation.value = withTiming(
      50,
      { duration: 3000 }
    )
  }, [])

  return (
    <Container>
      <Header>
        <ButtonBack
          iconName='keyboard-arrow-left'
          onPress={handleBack}
        />
      </Header>
      <Animated.View style={[formStyle, { position: 'relative' }]}>
        <Form>
          <Title>Cadastro</Title>
          <Input
            iconName='person'
            placeholder='Nome e Sobrenome'
            maxLength={40}
            value={name}
            onChangeText={setName}
          />

          <Input
            iconName='phone'
            placeholder='Número de telefone com DD'
            keyboardType='phone-pad'
            maxLength={11}
            value={phone}
            onChangeText={setPhone}
          />

          <Input
            iconName='mail'
            placeholder='E-mail'
            maxLength={32}
            value={email}
            onChangeText={setEmail}
          />

          <InputPassword
            iconName='lock'
            placeholder='Senha'
            maxLength={16}
            onChangeText={setPassword}
            value={password}
          />

          <InputPassword
            iconName='lock'
            placeholder='Repetir Senha'
            maxLength={16}
            onChangeText={setRepetPassword}
            value={repetPassword}
            
          />

          <Button
            title='Cadastrar-se'
            color={theme.colors.shape}
            onPress={handleSignUp}
          />

          <WrapperLine>
            <Line />
            <TextLine>ou</TextLine>
            <Line />
          </WrapperLine>

          <ButtonIcon
            iconName='google'
            title='Entrar com Google'
            color={theme.colors.background_secondary}
          />

          <WrapperAsk
            onPress={handleNavigateLogin}
          >
            <TextAsk> Você já possui uma conta? </TextAsk>
            <TextRoute>Login</TextRoute>
          </WrapperAsk>

        </Form>

      </Animated.View>
    </Container>
  );
}