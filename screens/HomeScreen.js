import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WorkoutCard from '../components/WorkoutCard';
import { ScrollView } from 'native-base';

const HomeScreen = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    save();
    load();
  }, []);

  const load = async () => {
    try {
      let temp = await AsyncStorage.getItem('workouts');
      if (temp !== null) {
        setWorkouts(JSON.parse(temp));
        console.log('loaded value');
      } else {
        console.log('no value available');
      }
    } catch (e) {
      console.error('Failed to load workouts.', e);
    }
  };

  const save = async () => {
    try {
      let workouts = [
        {
          name: 'TestWorkout1',
          lastDate: '22.22.2222'
        },
        {
          name: 'TestWorkout2',
          lastDate: '11.11.1111'
        },
        {
          name: 'TestWorkout3',
          lastDate: '00.00.0000'
        }
      ];
      await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
      console.log('saved value');
    } catch (e) {
      console.error('Failed to save workouts.', e);
    }
  };

  const renderWorkouts = () => {
    if (workouts != null) {
      return (workouts.map(workout => <WorkoutCard key={workout.name} navigation={navigation} workout={workout}/>));
    } else {
      return <Text>No workouts added yet.</Text>;
    }
  };

  return <ScrollView>{renderWorkouts()}</ScrollView>;
};

export default HomeScreen;
