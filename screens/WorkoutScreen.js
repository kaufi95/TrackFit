import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Button } from 'react-native-paper';

import moment from 'moment';

import { getExercisesFromWorkout, updateWorkout } from '../services/WorkoutService';

import ExerciseItem from '../components/ExerciseItem';

const WorkoutScreen = ({ navigation, route }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getExercisesFromWorkout(route.params.workout).then((exercises) => {
      setExercises(exercises);
    });
  }, []);

  const finishWorkout = () => {
    navigation.goBack();
  };

  const verifyIfExerciseIsDone = (exercise) => {
    return exercise.sessions?.some((element) => {
      let date1 = moment(new Date(element.date)).startOf('day');
      let date2 = moment(new Date()).startOf('day');
      return date1.isSame(date2);
    });
  };

  const updateExercise = (exercise, sets) => {
    const newExercises = [...exercises];

    if (verifyIfExerciseIsDone(exercise)) {
      const exerciseIndex = newExercises.findIndex((item) => item.name === exercise.name);
      const sessionIndex = newExercises[exerciseIndex].sessions.findIndex((item) => {
        return moment(item.date).startOf('day').isSame(moment(new Date()).startOf('day'));
      });
      newExercises[exerciseIndex].sessions[sessionIndex].sets = sets;
    } else {
      newExercises
        .find((item) => item.name === exercise.name)
        .sessions.unshift({
          date: moment(new Date()).startOf('day'),
          sets: sets
        });
    }
    setExercises(newExercises);

    let workout = route.params.workout;
    workout.exercises = newExercises;
    updateWorkout(workout);
  };

  return (
    <View style={styles.view}>
      <FlatList
        contentContainerStyle={styles.list}
        data={exercises}
        spacing={10}
        renderItem={(entry) => (
          <ExerciseItem
            exercise={entry.item}
            navigation={navigation}
            workout={route.params.workout}
            updateExercise={updateExercise}
            done={verifyIfExerciseIsDone(entry.item)}
          />
        )}
        extraData={exercises}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button style={styles.button} onPress={() => finishWorkout()}>
        Finish Workout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center'
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: '50%',
    height: 75,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 25,
    alignSelf: 'center'
  }
});

export default WorkoutScreen;
