import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider, Title } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import CreateWorkout from './screens/CreateWorkout';
import WorkoutScreen from './screens/WorkoutScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProgressScreen from './screens/ProgressScreen';
import HistoryDetailScreen from './screens/HistoryDetailScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    onPrimary: '#3cae94'
  }
  // fonts: {
  //   ...DefaultTheme.fonts,
  //   regular: {
  //     ...DefaultTheme.fonts.regular,
  //     fontFamily: 'Roboto',
  //     fontWeight: 'normal'
  //   },
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
              backgroundColor: '#3cae94'
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Create a Workout" component={CreateWorkout} />
          <Stack.Screen
            name="Workout"
            component={WorkoutScreen}
            options={({ route }) => ({
              title: route.params.workout.name
            })}
          />
          <Stack.Screen
            name="Exercise"
            component={ExerciseScreen}
            options={({ route }) => ({
              title: route.params.exercise.name
            })}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen
            name="History Detail"
            component={HistoryDetailScreen}
            options={({ route }) => ({
              title: route.params.workoutName
            })}
          />
          <Stack.Screen name="Progress" component={ProgressScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
