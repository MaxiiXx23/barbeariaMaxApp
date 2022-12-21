import React, { useState } from 'react';
import { Container, IconContainer, InputText } from './styles';

import { MaterialIcons } from "@expo/vector-icons";
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof MaterialIcons>['name'];
    placeholder?: string;
}

export function Input({ iconName, placeholder, ...rest }: Props) {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        // setIsFilled(!!value); // com essa sintaxe eu torno o valor Lógico, ou seja, como se fosse um if e else;
    }

    return (
        <Container
            isFocused={isFocused}
        >
            <IconContainer
                isFocused={isFocused}
            >
                <MaterialIcons
                    name={iconName}
                    size={40}
                    color="white"
                />
            </IconContainer>
            <InputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder={placeholder}
                placeholderTextColor="white"
                autoCorrect={false}
                autoCapitalize="none"
                {...rest}
            />
        </Container>
    );
}