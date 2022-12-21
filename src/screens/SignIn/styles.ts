import styled from 'styled-components/native';

import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  margin-top: ${Platform.OS == 'ios' ? getStatusBarHeight() : 0}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const WrapperForm = styled.View`
  flex:1;
  justify-content: center;

`;

export const Form = styled.View`
  margin: 8px 0px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(30)}px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const WrapperLine = styled.View`
  width: 100%;
  margin: 8px 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextLine = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  margin: 0px 8px 0px 8px;
`;

export const Line = styled.View`

  width: 120px;
  height: 2px;
  border-bottom-width: 1px;
  border-bottom-color: white;

`;

export const WrapperAsk = styled(RectButton)`

  width: 100%;
  margin: 12px 0px 0px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`; 

export const TextAsk = styled.Text`

  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;

`;

export const TextRoute = styled.Text`

  color: ${({ theme }) => theme.colors.text_route};
  font-size: ${RFValue(15)}px;
`;

export const WrapperForgotPassword = styled.View`

  width: 100%;
  align-items: flex-end;
  justify-content: center;
  margin: 8px 8px;
`;

export const TextForgotPassword = styled.Text`

  color: ${({ theme }) => theme.colors.text_route};
  font-size: ${RFValue(15)}px;
`;