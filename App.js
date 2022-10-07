import React from 'react';
import { Button } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import CreateWorkout from './screens/CreateWorkout';
import WorkoutScreen from './screens/WorkoutScreen';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
};

// extend the theme
export const theme = extendTheme({ config });

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              // backgroundColor: '#f5425d'
              backgroundColor: '#76a7a7'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerLeft: () => <Button onPress={() => navigation.navigate('History')} title="History" color="#fff" />,
              headerRight: () => (
                <Button onPress={() => navigation.navigate('CreateWorkout')} title="Add" color="#fff" />
              )
            })}
          />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="CreateWorkout" component={CreateWorkout} />
          <Stack.Screen name="Workout" component={WorkoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
