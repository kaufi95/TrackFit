import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import CreateWorkout from './screens/CreateWorkout';
import WorkoutScreen from './screens/WorkoutScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import SettingsScreen from './screens/SettingsScreen';

const theme = {
  ...DefaultTheme
  // colors: {
  //   ...DefaultTheme.colors,
  //   primary: 'tomato',
  //   accent: 'yellow'
  // }
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#76a7a7'
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Create a Workout" component={CreateWorkout} />
          <Stack.Screen name="Workout" component={WorkoutScreen} />
          <Stack.Screen name="Exercise" component={ExerciseScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
