import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Welcome } from './src/screens/Welcome';
import { theme } from './src/styles/theme';
import { Routes } from './src/routes/index.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar 
          barStyle='light-content'
        />
        <Routes />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
