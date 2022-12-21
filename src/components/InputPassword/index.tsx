import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, IconContainer, InputText } from './styles';

import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButton } from 'react-native-gesture-handler';


interface Props extends TextInputProps{
    iconName: React.ComponentProps<typeof MaterialIcons>['name'];
    placeholder: string;
}

export function InputPassword({ iconName, placeholder, ...rest }: Props) {

    const [isFocused, setIsFocused] = useState(false);
    // const [isFilled, setIsFilled] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        // setIsFilled(!!value); // com essa sintaxe eu torno o valor Lógico, ou seja, como se fosse um if e else;
    }

    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState);
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
                secureTextEntry={isPasswordVisible}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder={placeholder}
                placeholderTextColor="white"
                autoCorrect={false}
                autoCapitalize="none"
                {...rest}
            />

            <BorderlessButton
                onPress={handlePasswordVisibilityChange}
                style={{ justifyContent: 'center', marginRight: 8 }}
            >
                <MaterialIcons
                    name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                    size={40}
                    color="white"
                />
            </BorderlessButton>
        </Container>
    );
}