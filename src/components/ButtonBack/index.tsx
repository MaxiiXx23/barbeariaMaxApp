import React from 'react';
import { Container, Icon } from './styles';

import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButtonProps } from 'react-native-gesture-handler';

interface Props extends BorderlessButtonProps {
  iconName: React.ComponentProps<typeof MaterialIcons>['name'];
}


export function ButtonBack({ iconName, ...rest }: Props) {
  return (
    <Container>
      <Icon
        {...rest}
      >
        <MaterialIcons
          name={iconName}
          size={24}
          color="white"
        />
      </Icon>
    </Container>
  );
}