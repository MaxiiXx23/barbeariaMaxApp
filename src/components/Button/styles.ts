import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    colorButton: string;
}

export const Container = styled(RectButton)<Props>`
    width: 327px;
    height: 56px;
    align-items: center;
    justify-content: center;
    background-color: ${({ colorButton }) => colorButton} ;
    border-radius: 16px;
    margin: 20px 20px;
`;

export const Title = styled.Text<Props>`

    font-size: ${RFValue(15)}px;
    weight: bold;
`;