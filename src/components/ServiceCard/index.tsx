import React from 'react';

import { useTheme } from 'styled-components';
import { MaterialIcons } from "@expo/vector-icons";

import {
    Container,
    ImageService,
    ContainerDetails,
    WrapperInfos,
    NameService,
    WrapperRating,
    TextRating
} from './styles';

export function ServiceCard() {

    const theme = useTheme();

    return (
        <Container>

            <ImageService
                source={{ uri: "https://i.pinimg.com/736x/3a/35/ee/3a35eeca382f127263f1c4df94a32c12.jpg" }}
                resizeMode="cover"
            />

            <ContainerDetails>

                <WrapperInfos>

                    <NameService>Degrade Alpha 2023</NameService>

                </WrapperInfos>
                <WrapperRating>
                    <MaterialIcons
                        name="star"
                        size={16}
                        color={theme.colors.text_rating}
                    />
                    <TextRating>4.5</TextRating>
                </WrapperRating>

            </ContainerDetails>
        </Container>
    );
}