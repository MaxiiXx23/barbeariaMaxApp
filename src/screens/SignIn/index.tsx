import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { useTheme } from 'styled-components';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Yup from "yup";

import {
  Container,
  Header,
  Form,
  Title,
  WrapperLine,
  Line,
  TextLine,
  WrapperAsk,
  TextAsk,
  TextRoute,
  WrapperForgotPassword,
  TextForgotPassword
} from './styles';

import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { NavigationProps } from '../../navigation/navigationStackProps';

interface Params {
  title: string;
  content: string;
}


export function SignIn() {

  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();
  const formAnimation = useSharedValue(0);
  const { signIn } = useAuth();

  const { title, content } = route.params as Params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  function handleSignUp() {
    navigation.navigate("SignUp");
  }

  async function handleSubmit() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório.')
          .email('E-mail inválido.'),
        password: Yup.string()
          .required('Senha é obrigatória.')
      })

      await schema.validate({ email, password });

      await signIn({
        email,
        password
      })

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Opa!', error.message);
      } else {
        return Alert.alert(
          'Error na autenticação.',
          'Ocorreu um erro ao fazer login, verifica sua conexão ou/e credênciais.')
      }
    }
  }


  useEffect(() => {
    formAnimation.value = withTiming(
      50,
      { duration: 3000 }
    )
    if(title){
      return Alert.alert(title, content);
    }
  }, [])

  return (
    <Container>
      <Header>
        <ButtonBack
          iconName='arrow-back'
          onPress={handleBack}
        />
      </Header>

      <Animated.View style={[formStyle, { position: "relative" }]}>
        <Form>
          <Title>Entrar</Title>

          <Input
            iconName='person'
            placeholder='E-mail'
            onChangeText={setEmail}
            value={email}
          />

          <InputPassword
            iconName='lock'
            placeholder='Senha'
            onChangeText={setPassword}
            value={password}
          />

          <WrapperForgotPassword>
            <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
          </WrapperForgotPassword>

          <Button
            title='Entrar'
            color={theme.colors.shape}
            onPress={handleSubmit}
          />

          <WrapperLine>
            <Line />
            <TextLine>ou</TextLine>
            <Line />
          </WrapperLine>

          <WrapperAsk
            onPress={handleSignUp}
          >
            <TextAsk>Você não possui uma conta? </TextAsk>
            <TextRoute>Criar Conta</TextRoute>
          </WrapperAsk>

        </Form>
      </Animated.View>


    </Container>
  );
}