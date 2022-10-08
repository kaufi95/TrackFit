import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WorkoutCard from '../components/WorkoutCard';
import { ScrollView } from 'native-base';

import testdata from '../scripts/testdata';

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
        <ScrollView contentContainerStyle={styles.content}>
          {workouts.map((workout, index) => (
            <View key={index} style={styles.item}>
              <WorkoutCard key={index} navigation={navigation} workout={workout} />
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.container}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: '50%',
    padding: 5
  }
});

export default HomeScreen;
