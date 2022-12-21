import React from 'react';
import { Container, ContainerButton, Name } from './styles';

import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from 'styled-components';

interface Props {
    iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    name: string;
}

export function ButtonCategories({ iconName, name }: Props) {

    const theme = useTheme();

    return (
        <Container>
            <ContainerButton>
                <BorderlessButton>
                    <MaterialCommunityIcons
                        name={iconName}
                        color={theme.colors.text_dark}
                        size={20}
                    />
                </BorderlessButton>
            </ContainerButton>
            <Name>{name}</Name>
        </Container>
    );
}