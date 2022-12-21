import React from 'react';
import { FlatList } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    ImageProfile,
    ContainerButton,
    ContainerSearch,
    InputSearch,
    ContainerListCategories,
    TitleCategories,
    ContainerPopularServices,
    TitleServices
} from './styles';

import { ButtonCategories } from '../../components/ButtonCategories';
import { ServiceCard } from '../../components/ServiceCard';

export function Home() {

    const theme = useTheme();

    const categories = [
        {
            iconName: "content-cut",
            name: "Corte"
        },
        {
            iconName: "test-tube",
            name: "Colometria"
        },
        {
            iconName: "hair-dryer",
            name: "Escovar"
        },
        {
            iconName: "face-man-shimmer",
            name: "Progressiva"
        },
        {
            iconName: "face-man",
            name: "Relaxamento"
        },

    ]

    return (
        <Container>

            <Header>
                <ImageProfile
                    source={{ uri: "https://avatars.githubusercontent.com/u/48772842?v=4" }}
                />

                <ContainerButton>
                    <BorderlessButton>
                        <MaterialIcons
                            name="notifications"
                            size={30}
                        />
                    </BorderlessButton>
                </ContainerButton>

            </Header>

            <ContainerSearch>
                <InputSearch
                    placeholder='Pesquisar Serviços'
                    placeholderTextColor={theme.colors.text}
                />
                <ContainerButton>
                    <BorderlessButton>
                        <MaterialIcons
                            name="search"
                            size={30}
                        />
                    </BorderlessButton>
                </ContainerButton>
            </ContainerSearch>

            <ContainerListCategories>

                <TitleCategories>
                    Categorias
                </TitleCategories>

                <FlatList
                    data={categories}
                    keyExtractor={(item, index) => String(index)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (

                        <ButtonCategories
                            // ajustar o error: colocar Icon Próprios
                            iconName={item.iconName}
                            name={item.name}
                        />
                    )}
                />
            </ContainerListCategories>

            <ContainerPopularServices>

                <TitleServices>
                    Serviços Populares
                </TitleServices>

                <FlatList
                    data={categories}
                    keyExtractor={(item, index) => String(index)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ServiceCard />
                    )}
                />
            </ContainerPopularServices>


        </Container>
    );
}