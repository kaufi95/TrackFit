import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExerciseScreen = ({ navigation, route }) => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    setExercise(route.params.exercise);
    navigation.setOptions({
      headerTitle: () => {
        return (
          <View style={styles.view}>
            <Text style={styles.workoutName}>{route.params.workoutName}</Text>
            <Text style={styles.exerciseName}>{route.params.exercise.name}</Text>
          </View>
        );
      },
      headerBackTitle: route.params.workoutNameack
    });
  }, []);

  return (
    <View style={styles.containerView}>
      <Text>{exercise.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  view: {
    alignItems: 'center'
  },
  workoutName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  exerciseName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default ExerciseScreen;
