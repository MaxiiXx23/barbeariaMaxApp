import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";

import { 
    Container ,
    Title
} from './styles';

interface Props extends RectButtonProps {
    title: string;
    iconName: React.ComponentProps<typeof AntDesign>['name'];
    color?: string;
}



export function ButtonIcon({ title, iconName, color }: Props) {
    return (
        <Container
            colorButton={color}
        >

        <AntDesign 
            name={iconName}
            size={20}
        />

        <Title>
            {title}
        </Title>

        </Container>
    );
}