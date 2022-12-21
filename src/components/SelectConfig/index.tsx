
import React from 'react';
import {
    Container,
    IconContainer,
    ContainerDescription,
    Title,
    Description
} from './styles';

import { useTheme } from 'styled-components';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
    iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    title: string;
    description: string;
}

export function SelectConfig({ iconName, title, description, ...rest }: Props) {

    const theme = useTheme();

    return (
        <Container
            {...rest}
        >
            <IconContainer>
                <MaterialCommunityIcons
                    name={iconName}
                    size={24}
                    color={theme.colors.background_primary}
                />
            </IconContainer>
            <ContainerDescription>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ContainerDescription>
        </Container>
    );
}