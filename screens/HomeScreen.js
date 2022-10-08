import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WorkoutCard from '../components/WorkoutCard';
import { ScrollView } from 'native-base';

import testdata from '../components/testdata';

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
        console.log('loaded workouts');
      } else {
        console.log('no workouts available');
      }
    } catch (e) {
      console.error('Failed to load workouts.', e);
    }
  };

  const save = async () => {
    try {
      let workouts = [];

      // uncomment to activate testdata
      workouts = testdata();

      await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
      console.log('saved workouts');
    } catch (e) {
      console.error('Failed to save workouts.', e);
    }
  };

  const renderWorkouts = () => {
    if (workouts.length > 0) {
      return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          {workouts.map((workout) => (
            <View key={workout.name} style={styles.item}>
              <WorkoutCard key={workout.name} navigation={navigation} workout={workout} />
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.container2}>
          <Text>No workouts added yet.</Text>
          <Button onPress={() => navigation.navigate('Create a Workout')} title="Add your first workout" />
        </View>
      );
    }
  };

  return renderWorkouts();
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  item: {
    width: '50%'
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;
