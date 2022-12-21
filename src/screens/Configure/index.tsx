import React from 'react';
import {
    Container,
    Title,
    ContainerConfigs,
    ListConfigs
} from './styles';

import { SelectConfig } from '../../components/SelectConfig';

export function Configure() {
    return (
        <Container>
            <Title>Configurações</Title>
            <ContainerConfigs>
                <ListConfigs>
                    <SelectConfig
                        iconName="lock"
                        title='Mudar senha'
                        description='Altere sua senha para uma nova.'
                    />
                    <SelectConfig
                        iconName="theme-light-dark"
                        title='Tema'
                        description='Altere o tema da aplicação.'
                    />
                    <SelectConfig
                        iconName="send"
                        title='Feedaback'
                        description='Envie um feedaback sobre o App.'
                    />
                    <SelectConfig
                        iconName="clipboard-text"
                        title='Sobre'
                        description='Veja informações sobre o App.'
                    />
                    <SelectConfig
                        iconName="logout"
                        title='Sair'
                        description='Desconecte da aplicação.'
                    />
                </ListConfigs>
            </ContainerConfigs>
        </Container>
    );
}