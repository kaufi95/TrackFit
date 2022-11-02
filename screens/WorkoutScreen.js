import React, { useEffect, useState } from 'react';
import { Text, Pressable, StyleSheet, FlatList } from 'react-native';

import ExerciseItem from '../components/ExerciseItem';

const WorkoutScreen = ({ navigation, route }) => {
  const [exercises, setExercises] = useState();

  useEffect(() => {
    setExercises(route.params.workout.exercises);
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={exercises}
      spacing={10}
      renderItem={(entry) => (
        <ExerciseItem exercise={entry.item} navigation={navigation} workout={route.params.workout} />
      )}
      extraData={exercises}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default WorkoutScreen;
