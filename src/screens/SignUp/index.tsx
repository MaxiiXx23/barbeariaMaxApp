import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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



type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Welcome: undefined;

};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "SignUp">;

export function SignUp() {
  const navigation = useNavigation<NavigationProps>();
  const theme = useTheme();
  const formAnimation = useSharedValue(0);

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
            placeholder='Nome Completo'
          />

          <Input
            iconName='mail'
            placeholder='E-mail'

          />

          <InputPassword
            iconName='lock'
            placeholder='Senha'
            onChangeText={setPassword}
            value={password}
          />

          <InputPassword
            iconName='lock'
            placeholder='Repetir Senha'
            onChangeText={setRepetPassword}
            value={repetPassword}
          />

          <Button
            title='Cadastrar-se'
            color={theme.colors.shape}
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