import * as React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  let workouts = null;

  const load = async () => {
    try {
      workouts = await AsyncStorage.getItem('workouts');
    } catch (e) {
      console.error('Failed to load count.', e);
    }
  };

  const renderWorkouts = () => {
    load();
    if (workouts) return <Text>data - TEST</Text>;
    return <Text>No workouts added yet.</Text>;
  };

  return <View style={styles.containerView}>{renderWorkouts()}</View>;
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;
