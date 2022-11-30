import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes/Routes'

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false}></StatusBar>
        <Routes />
    </NavigationContainer>
  );
}
