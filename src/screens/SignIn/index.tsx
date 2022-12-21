import React, { useEffect } from 'react';

import { useTheme } from 'styled-components';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  Container,
  Header,
  WrapperForm,
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
import { useNavigation } from '@react-navigation/native';


type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Welcome: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "SignUp">;

export function SignIn() {

  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();
  const formAnimation = useSharedValue(0);

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
          iconName='arrow-back'
          onPress={handleBack}
        />
      </Header>

      <Animated.View style={[formStyle, {position: "relative"}]}>
        <Form>
          <Title>Entrar</Title>

          <Input
            iconName='person'
            placeholder='E-mail'
          />

          <InputPassword
            iconName='lock'
            placeholder='Senha'
          />

          <WrapperForgotPassword>
            <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
          </WrapperForgotPassword>

          <Button
            title='Entrar'
            color={theme.colors.shape}
            onPress={() => { console.log("kkkkk") }}
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