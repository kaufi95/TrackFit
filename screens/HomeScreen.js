import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

import WorkoutCard from '../components/WorkoutCard';
import { ScrollView } from 'native-base';

import { load } from '../scripts/storage';

const HomeScreen = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    load().then(setWorkouts);
  }, []);

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
