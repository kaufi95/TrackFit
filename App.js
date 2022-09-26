import React from 'react';
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box
} from 'native-base';
import NativeBaseIcon from './components/NativeBaseIcon';
import { Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen/>
    </NativeBaseProvider>
  );
}
